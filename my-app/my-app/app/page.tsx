/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import ShinyText from '@/components/ShinyText';
import Header from '@/components/header';
import English from '@/helpers/English';
import Contstant from '@/helpers/constants';


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const page = async () => {
  const response = await fetch(`${BASE_URL}/api/Event` )
  const {events} = await response.json();
  return (
    <div className='px-4 md:px-8'> 
      <div className="flex flex-col text-bold! items-center  mt-2 justify-center  ">
        <Header />
        <ShinyText
          text={English.E5}
          speed={4}
          delay={0}
          color="#fff"
          shineColor="cyan"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
          className="text-2xl! md:text-4xl! w-full max-w-lg text-center mt-10 font-bold"
        />
        <p className="text-sm wrap-break-word w-full max-w-lg text-center mt-2">{English.E6}</p>
      </div>
      <div className="mt-12 flex-col  flex">
        <h1 className='text-3xl! mx-auto '>{English.E8}</h1>
        <ul className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2 items-center mt-2'>
          {Contstant.eventArray.map((item) => {
            const { img, content } = item
            return (
              <div className='flex flex-col  w-full gap-3 cursor-pointer text-center rounded-lg justify-center p-2' key={content}>
                <img src={img} alt="" className='hover:animate-pulse brightness-100 hover:grayscale  transition-all duration-200 rounded-2xl sm:size-80 ' />
                <p className='text-start'>{content}</p>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default page 