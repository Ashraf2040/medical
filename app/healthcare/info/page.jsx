"use client"

import Link from 'next/link'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
export default function InfoPage() {
 
      return (
        <div className='px-4 flex flex-col  '>
          <Link href="/healthcare">
          <button className="bg-gradient-to-br px-2 rounded-lg font-semibold text-white py-2 from-[#54A15E] to-green-400 my-2">
          Back 
          </button>
        </Link>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-4/5">
            <SwiperSlide><Image src="/a.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
            <SwiperSlide><Image src="/b.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
            <SwiperSlide><Image src="/c.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
            <SwiperSlide><Image src="/d.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
            <SwiperSlide><Image src="/e.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
            <SwiperSlide><Image src="/f.jpg" alt="diaf" width={180} height={180}  className="h-10 w-10" /></SwiperSlide>
         
          </Swiper>
        </div>
      );
    }
 














































{/* <div className='p-8'>
<h1 className='bg-black font-bold py-2 px-8 text-center text-white'>HealthCare Title Info</h1>
<p className='my-8 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, porro, quas dolorem pariatur deserunt quo culpa molestiae perspiciatis ratione, explicabo iusto sapiente sunt odio. Quae modi adipisci voluptates doloribus accusantium voluptate, eveniet odio ab error dolor quia, consequatur assumenda enim minima velit aliquam. Nihil, rem voluptates ea perferendis est magnam!</p>
<Link href="/medical"><button className='bg-black font-bold py-2 px-8 text-center rounded-lg text-white'>Back to Cards</button></Link>
</div> */}
