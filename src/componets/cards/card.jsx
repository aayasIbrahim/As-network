import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuServer } from "react-icons/lu";
import { LuCctv } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";



const cardData = [
  {
    id: 1,
    icon:<IoHomeOutline/>,
    title: "Home Broadband Internet",
    description: "ASNetwork চকরিয়াই মধ্যে অন্যতম দ্রুত ও নির্ভরযোগ্য ব্রডব্যান্ড এবং নেটওয়ার্ক সেবা প্রদানকারী প্রতিষ্ঠান, যা গেমার এবং সাধারণ ব্যবহারকারীদের জন্য উপযোগী।"
  },
  {
    id: 2,
    icon:<HiOutlineDesktopComputer/>,
    title: "Network Security",
    description: "ASNetwork ভিপিএন, অ্যান্টিভাইরাস এবং CCTV IP নজরদারি সল্যুশন প্রদান করে, যা আপনার নিরাপত্তা নিশ্চিত করতে সর্বোচ্চ মানের সেবা দিয়ে থাকে।",
  },
  {
    id: 3,
    icon:<MdOutlineShoppingBag/>,
    title: "Corporate/SME Internet",
    description: "কর্পোরেট ও এসএমই গ্রাহকদের জন্য ASNetwork দিচ্ছে নিরবিচ্ছিন্ন ডেডিকেটেড ইন্টারনেট সংযোগ ও উন্নত নেটওয়ার্ক সমাধান, যা নিশ্চিত করে সর্বোচ্চ নেটওয়ার্ক স্থিতিশীলতা। সেই সঙ্গে রয়েছে ২৪/৭ সাপোর্ট নিশ্চিত করতে এক্সক্লুসিভ সাপোর্ট ম্যানেজার।",
  },
  {
    id: 4,
    icon:<LuServer/>,
    title: "Network Solutions",
    description:" ASNetwork, LAN ও WAN উভয় ধরণের নেটওয়ার্ক সল্যুশন প্রদান করে। আমাদের অভিজ্ঞ নেটওয়ার্ক ইঞ্জিনিয়ারদের সহায়তায় আমরা ক্লায়েন্টদের জন্য সর্বোচ্চ কার্যকর নেটওয়ার্ক সমাধান নিশ্চিত করি|",
  },
  {
    id: 5,
    icon:<LuCctv/>,
    title: "CCTV System Solutions",
    description: "আবাসিক হোক, বাণিজ্যিক কিংবা শিল্প প্রতিষ্ঠান—সব ধরনের নিরাপত্তার জন্য ASNetwork দিচ্ছে উন্নতমানের সিসিটিভি ও আইপি সার্ভেইলেন্স সল্যুশন সারা বাংলাদেশজুড়ে",
  },
  {
    id: 6,
    icon:<FaDatabase/>,
    title: "Data Connectivity",
    description:"স্মার্ট কানেকশন, স্মুথ পারফরম্যান্স—ASNetwork দিচ্ছে আধুনিক প্রযুক্তিনির্ভর বিভিন্ন ডেটা কানেক্টিভিটি সমাধান, যা আপনার ব্যবসাকে রাখবে সবসময় সংযুক্ত ও আপডেট।",

  },
  {
    id: 7,
    icon:<BiNetworkChart/>,
    title: "Dedicated Internet",
    description: "নিরবিচ্ছিন্ন কানেক্টিভিটির নিশ্চয়তা—ASNetwork দিচ্ছে একাধিক আপস্ট্রিম ও ব্যাকআপ লিংকসহ ডেডিকেটেড হাই-স্পিড ইন্টারনেট, যা নিশ্চিত করে ৯৯.৯% আপটাইম।",
  },
];
function card() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white border border-teal-300 dark:bg-gray-800 rounded-lg p-6 transition-transfrom transfrom hover:-translate-y-1 hover:shadow shadow-gray-300 "
          >
            <span className="text-blue-500 text-[48px] ">{card.icon}</span>
            <h2 className="mt-5 text-2xl leading-6 font-semibold text-gray-900 dark:text-gray-200">
              {card.title}
            </h2>
            <p className="mt-2 mb-5 text-base text-gray-500 dark:text-gray-400">
              {card.description}
            </p>
            
          </div>
        ))}
      </div>
    </>
  );
}

export default card;
