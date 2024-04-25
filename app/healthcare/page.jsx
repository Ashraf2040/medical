import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HealthCare() {

  const dataCards = [
    { 
      src :"/1.jpg",
      title: " Hazards in the Workplace",
     },
    { 
      src :"/2.jpg",
      title: "Hygiene in the Workplace",
     },
    { 
      src :"/3.jpg",
      title: "Cybersecurity Fundamentals",
     },
  ]
  return (
    <div className='flex justify-center items-center flex-col py-4'>
       <Link href="/">
          <button className="bg-gradient-to-br px-2 rounded-lg font-semibold text-white py-2 from-[#54A15E] to-green-400 my-2">
          Back to Home
          </button>
        </Link>

        <div className='flex justify-center items-center flex-col gap-4'>
      {dataCards.map((card) =>
      
      <Link href='/medical/info' key={card.title} className=' shadow-md shadow-black rounded-lg relative border-black h-fit'>
        <Image src={card.src} alt='a' width={300} height={300} className='relative'/> 
        <p className=' text-md font-semibold flex justify-around items-center  p-3 py-6  bg-white w-full absolute bottom-0'>{card.title} <span className='flex w-10 items-center gap-1 text-lg opacity-60'>6 <Image src="/icon.jpg" alt='a' width={40} height={20} className="" /></span></p></Link> 
    )}
        </div>
     
    </div>
  )
}




























































{/* <div className='  w-full flex justify-center items-center flex-wrap gap-10'>
<Link href='/medical/info'><Image src="/a.jpg" alt='a' width={300} height={300} /></Link> 
<Link href='/medical/info'><Image src="/b.jpg" alt='a' width={300} height={300} /></Link> 
<Link href='/medical/info'><Image src="/c.jpg" alt='a' width={300} height={300} /></Link> 
<Link href='/medical/info'><Image src="/d.jpg" alt='a' width={300} height={300} /></Link> 
<Link href='/medical/info'><Image src="/e.jpg" alt='a' width={300} height={300} /></Link> 
<Link href='/medical/info'><Image src="/f.jpg" alt='a' width={300} height={300} /></Link> 
</div> */}