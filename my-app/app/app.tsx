interface Props {
    params: {
        id: string
    }
}

export default function Page({ params }: Props) {
    return (
        <div>
            Dashboard ID: {params.id}
        </div>
    )
}