import ShinyText from '@/components/ShinyText';
import Button from '@/components/button';
import Header from '@/components/header';

const page = () => {
  return (
    <div className="flex flex-col text-bold! items-center  mt-2 justify-center  ">
      <Header />
      <ShinyText 
        text="✨ The Hub For Every dev Event You can't miss ✨"
        speed={4}
        delay={0}
        color="#fff"
        shineColor="cyan"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
        className="text-2xl mt-20 font-bold"
      />
      <p className="text-sm wrap-break-word   w-lg text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias obcaecati doloribus odio quod sit unde rem sint delectus illo.</p>
      <Button />
      <div className="mt-2 flex-col flex">
        <h1 className='text-4xl! text-center'>Featured Events</h1>
        <ul className='flex flex-col gap-2 items-center mt-2'>
          {[1, 2, 3, 4, 5].map((item) => (
            <li className='flex flex-col w-lg h-md border rounded-lg justify-center p-2' key={item}>Event-{item}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default page