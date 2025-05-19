import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegHandPointRight } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import IMg1 from '../../assets/img1.jpg';
import IMg2 from '../../assets/slide-2.png';
import IMg3 from '../../assets/slide-3.jpg';
import IMg4 from '../../assets/slide-4.jpg';
import 'swiper/css/autoplay';
// import required modules
import { EffectCards,Autoplay } from 'swiper/modules';
const slide1=["Local CDN","HD Facebook","Bufferless Youtube","Most Reliable Network","24/7 Customer Support","Optical Fiber Connection",];
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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1500}
        className=" w-[380px] top-[40px]  md:w-[540px] md:h-[640px] lg:w-[640px] lg:h-[740px]  rounded-lg shadow-lg"
      >
           
          <SwiperSlide className= "flex items-center justify-center rounded-lg shadow-lg bg-blue-950">
            <div className="flex flex-col justify-center items-center">
              <img src={IMg2} className='w-[200PX] mt-[50px] mb-[50px]' alt="imag" />
              <h2 className="text-gray-300 text-xl font-bold text-center mt-9 mb-2">আমাদের প্রিমিয়াম প্যাকেজের
               সাথে <span className='text-blue-400'>নিরবচ্ছিন্ন ইন্টারনেট </span>
               সংযোগের অভিজ্ঞতা নিন
              </h2>
               <div className='mt-[60px] mb-[90px]'>
                  <a href="/" className='  text-white rounded-xl  px-3 py-1 mx-3 my-1 bg-blue-800 '>See all packages</a>

                 </div>             
            </div>
          </SwiperSlide>
       
          <SwiperSlide className= "flex items-center justify-center rounded-lg shadow-lg bg-blue-900">
            <div className="flex flex-col  justify-center items-center">
              <img src={IMg1} className='w-[160PX] mt-3' alt="imag" />
              <h2 className="text-gray-300 text-xl font-bold text-center p-2 mt-9 mb-2">কেন আপনি <span className='text-cyan-200'>ASNetwork</span> ব্যবহার করবেন ?</h2>

              <div className='' >
                 {slide1.map((item)=>{
                  return <div className='flex m-2 p-2 font-bold rounded-lg shadow-lg border border-blue-900  bg-blue-800 p-2 mb-[10px]'>
                    <FaRegHandPointRight size={20} /> 
                      
                    <p className='text-gray-100 text-base font-medium ml-2'>{item}</p>
                  </div>
                 })}

              </div>
            </div>
          </SwiperSlide>
        
       
          <SwiperSlide className= "flex items-center justify-center rounded-lg shadow-xl bg-black">
            <div className="flex flex-col justify-center items-center">
              <img src={IMg3} className='w-[200PX] mt-[50px] mb-[50px]' alt="imag" />
              <h2 className="text-gray-100 text-xl font-bold text-center ">বাড়তি খরচ ছাড়াই  আপনার
               <span className='text-blue-700'> ইন্টারনেট বিল </span>
                পরিশোধ করুন
              </h2>
               <div className='mt-[50px] mb-[70px]'>
                  <img src={IMg4} alt="" className='w-[250px]'/>

                 </div>             
            </div>
          </SwiperSlide>
        
      
     
      
        
      </Swiper>
    </>
  )
}

export default MySwiper;