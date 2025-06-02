import React from "react";
import { IoMdCheckmark } from "react-icons/io";

function Package({ level, Mbps ,taka,bgcolor}) {
  return (
    <div className="overflow-hidden dark:bg-gray-800 rounded-xl relative  lg:border-[3px] dark:lg:border-[1px] md:border-[3px] dark:md:border-[1px] border-[2px] border-[#ECEEF1] dark:border-gray-700">
      <div className="p-6 md:flex lg:flex  items-center justify-between">
        <div >
          <h2 className="text-xl leading-6 font-medium font-bold text-[#1F2937] dark:text-gray-100 flex items-center gap-1">
          <span>🔥</span>  {level}
          </h2>
          <p className="mt-3 text-sm text-[#A2A5AB] dark:text-gray-200">
            Choose a package and start your internet journey
          </p>
          <div class="lg:mt-8 md:mt-5 mt-8">
            <span style={{backgroundColor:bgcolor}} class="lg:text-2xl md:text-xl text-xl font-extrabold text-white lg:px-9 md:px-4 px-5 lg:py-4 md:py-3 py-3 shadow-lg rounded-t-2xl rounded-r-2xl">
              {Mbps}
            </span>
          </div>
        </div>
        <div className="mt-[60px]">
          <ul className="space-y-2">
            <li className="flex space-x-3 ">
              <span className="font-bold ">
                <IoMdCheckmark color="green" />
              </span>{" "}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                150 Mbps BDIX and Other Speed
              </span>
            </li>
            <li className="flex space-x-3">
              <span>
                <IoMdCheckmark color="green"/>
              </span>{" "}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                4k Youtube and Facebook Stream.
              </span>
            </li>
            <li className="flex space-x-3">
              <span>
                <IoMdCheckmark color="green" />
              </span>{" "}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Optical Fiber Connection
              </span>
            </li>
            <li className="flex space-x-3">
              <span>
                <IoMdCheckmark color="green"/>
              </span>{" "}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                IPv6 Public IP Only
              </span>
            </li>
            <li className="flex space-x-3">
              <span>
                <IoMdCheckmark color="green" />
              </span>{" "}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                24/7 Phone and Online Support
              </span>
            </li>
            <li className="flex space-x-3">
              <span>
                <IoMdCheckmark color="green" />
              </span>{" "}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                1:8 Contention Ratio
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-[60px] flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            {taka}
          </h2>
          <a
            href="/"
            className="mt-4 block bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 w-32 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 transform hover:scale-105"
          >
            <div>Buy {level}</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Package;
