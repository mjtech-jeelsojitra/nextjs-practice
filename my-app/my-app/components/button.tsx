'use client';

interface ButtonProps {
    onClick?: () => void;
    text: string;
    className?: string;
}

const button = (PROPS: ButtonProps) => {
    const { onClick, text, className } = PROPS
    return (
        <button
            type="button"
            className={`bg-cyan-600 shadow-md shadow-cyan-950 mt-2 rounded-lg text-sm p-2 text-white cursor-pointer ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default button