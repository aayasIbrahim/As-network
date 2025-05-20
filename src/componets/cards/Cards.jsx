import React from 'react'
import Card from './card.jsx';
function Cards() {



  return (
    <>
    <section className="mt-[70px] border-b-[1px] border-gray-200 dark:border-gray-700">
        <div className="lg:px-8 max-w-7xl lg:mx-auto md:mx-12 mx-6 lg:pt-16 lg:pb-24 md:pb-16 pb-16 md:py-10 py-0">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-extrabold text-gray-900 sm:text-left dark:text-gray-100">Services & Solutions</h1>
            <p className="mt-3 lg:text-xl md:text-xl text-base text-gray-500 sm:text-left">ASNetwork দুর্দান্ত বৈশিষ্ট্যগুলি উপভোগ করতে আজই যোগদান করুন।.</p>
            <Card/>
        </div>
          
    </section>
    
    
    
    
    </>
  )
}

export default Cards;