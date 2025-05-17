import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import IMg1 from '../../assets/img1.jpg';
// import required modules
import { EffectCards,Autoplay } from 'swiper/modules';

// const slides = [
//   {
//     id: 1,
//     title: 'কেন আপনি ASNetwork ব্যবহার করবেন????'

//     bg: 'bg-gray-200',
//   },
//   {
//     id: 2,
//     title: 'Slide 2',
//     bg: 'bg-blue-500',
//   },
//   {
//     id: 3,
//     title: 'Slide 3',
//     bg: 'bg-green-500',
//   },
// ];

function MySwiper() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards,Autoplay]}
        className="h-[540px] w-[340px] top-[60px] md:w-[540px] md:h-[640px] lg:w-[640px] lg:h-[740px]  rounded-lg shadow-lg"
      >
      
       
          <SwiperSlide className= "flex items-center justify-center rounded-lg shadow-lg bg-[#00204fc1]">
            <div className="flex flex-col  justify-center items-center">
              <img src={IMg1} className='w-[160PX]' alt="imag" />
              <h2 className="text-white text-xl font-bold text-center mt-9">কেন আপনি <span className='text-teal-500'>ASNetwork</span> ব্যবহার করবেন ?</h2>
            </div>
          </SwiperSlide>
        
      
     
      
        
      </Swiper>
    </>
  )
}

export default MySwiper