
const header = () => {
    return (
        <nav className='flex px-2 py-4'>
            <div className=' w-full justify-between'>
                <ul className='flex flex-row gap-10 *:hover:text-[#00F5D4] transition-colors duration-300 ease-in-out cursor-pointer list-none '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default header