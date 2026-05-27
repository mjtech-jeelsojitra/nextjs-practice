/* eslint-disable @next/next/no-img-element */
import Contstant from '@/helpers/constants'
import { Images } from '@/helpers/Images'
import Button from '@/components/button';
import English from '@/helpers/English';


const header = () => {
    return (
        <nav className='relative flex items-center w-full py-4'>
            <img src={Images.logo} alt="Logo" className='w-14 h-14 ' />
            <ul className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-row gap-8 list-none cursor-pointer'>
                {Contstant.navArray.map((item) => {
                    const { content } = item
                    return (
                        <li key={content} className='hover:text-[#00F5D4] transition-colors duration-300 ease-in-out'>
                            {content}
                        </li>
                    )
                })}
            </ul>
            <Button text={English.E7} className='absolute right-0 hidden md:flex' />
        </nav>


    )
}

export default header