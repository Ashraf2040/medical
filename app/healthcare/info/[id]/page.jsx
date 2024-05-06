
"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import './styles.css';

// import required modules
import { EffectCreative, Navigation } from 'swiper/modules';
import Link from 'next/link';


export default function TopicInfo({params}) {
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
    <div className='flex flex-col   items-center w-full h-screen'> 
    <div className='flex  items-center gap-4 flex-col justify-center w-4/5'>
    <Link href="/healthcare" className='self-start'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6   h-6 text-[#02B1BF]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>

      </Link>
    <h1 className='   text-[#02B1BF] mt-6 w-fit   bg-[#dbeefd] rounded-lg p-3'>{dataCards[params.id].title}</h1>
    </div>
   
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper3"
        style={{
          '--swiper-navigation-color': 'red',
          '--swiper-pagination-color': 'red',
        }}
       
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      
     
    </div>
  );
}














































































{/* <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper4"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-125%', 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ['125%', 0, -800],
            rotate: [0, 0, 90],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper5"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper6"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}







// "use client"

// import Link from 'next/link'

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';
// import Image from 'next/image';
// export default function InfoPage({params}) {
 
//       return (
//         <div className='px-4 flex flex-col  '>
//           <Link href="/healthcare">
//           <button className="bg-gradient-to-br px-2 rounded-lg font-semibold text-white py-2 from-[#54A15E] to-green-400 my-2">
//           Back {params.id}
//           </button>
//         </Link>
//           <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-4/5">
//             <SwiperSlide><Image src="/a.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
//             <SwiperSlide><Image src="/b.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
//             <SwiperSlide><Image src="/c.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
//             <SwiperSlide><Image src="/d.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
//             <SwiperSlide><Image src="/e.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
//             <SwiperSlide><Image src="/f.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
         
//           </Swiper>
//         </div>
//       );
//     }
 














































{/* <div className='p-8'>
<h1 className='bg-black font-bold py-2 px-8 text-center text-white'>HealthCare Title Info</h1>
<p className='my-8 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, porro, quas dolorem pariatur deserunt quo culpa molestiae perspiciatis ratione, explicabo iusto sapiente sunt odio. Quae modi adipisci voluptates doloribus accusantium voluptate, eveniet odio ab error dolor quia, consequatur assumenda enim minima velit aliquam. Nihil, rem voluptates ea perferendis est magnam!</p>
<Link href="/medical"><button className='bg-black font-bold py-2 px-8 text-center rounded-lg text-white'>Back to Cards</button></Link>
</div> */}
 {/* <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}