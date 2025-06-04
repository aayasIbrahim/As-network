import React from "react";
import CoveraAgeAriaimg from "../assets/coverage.jpg";

function CoveraAgeAria() {
  return (
    <section className="border-b-[1px] border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-8 lg:py-28 md:py-20 py-16">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 shadow-xl rounded-lg overflow-hidden">
          <div className="bg-green-800 flex items-center lg:order-0 md:order-1 order-1">
            <div className="lg:px-12 md:px-8 px-5 lg:py-5 md:py-8 py-5">
              <p className="md:text-xl text-2xl font-extrabold text-white mb-4">
                এখনই সংযোগ নিন!
              </p>
              <p className="md:text-3xl text-2xl font-extrabold text-white">
                {" "}
                আপনার অবস্থানে ASNetwork সেবা রয়েছে কি না, তা জেনে নিন।
              </p>

              <p className="lg:mt-4 md:mt-4 mt-2 lg:text-lg md:text-base text-sm leading-6 text-gray-200">
                ASNetwork চকরিয়া শহরের প্রায় সর্বত্র বিস্তৃত। আপনি এখনই চকরিয়ার
                সকল কভারেজ এলাকার বিস্তারিত তালিকা ও প্রাপ্যতা যাচাই করুন।
                নির্দিষ্ট এলাকায় নেটওয়ার্ক সেবা পাওয়া যাচ্ছে কি না, তা নিশ্চিত
                হতে আমাদের কভারেজ ম্যাপ দেখুন অথবা সরাসরি আমাদের সাপোর্ট টিমের
                সঙ্গে যোগাযোগ করুন।
              </p>
              <a
                className="relative lg:mt-8 md:mt-8 mt-3 bg-white border border-transparent rounded-md shadow lg:px-5 md:px-5 px-3 lg:py-3 md:py-2 py-1 inline-block items-center text-base font-medium text-green-600 hover:bg-green-50"
                href="/"
              >
                কভারেজ ম্যাপ দেখুন
              </a>
            </div>
          </div>
          <div className="lg:order-1 md:order-0 order-0">
         <div className="relative w-full h-full">
           <img src={CoveraAgeAriaimg} alt="" />
           <div>
            <h1>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
                    ASNetwork কভারেজ এরিয়া
                </span>
            </h1>
           </div>
         </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoveraAgeAria;
