import React from "react";

function FooterForm() {
  return (
    <div className="mt-14 mb-14 lg:mt-0 lg:mb-0 xl:mt-0">
      <h3 className="text-lg font-semibold text-white tracking-wider uppercase">
        Subscrive to our newsletter
      </h3>
      <p className="mt-6 text-lg text-gray-200">
        The latest news,articles,and resources,sent to your inbox weekly
      </p>
      <div className="mt-6 sm:flex sm:items-center sm:justify-between">
        <from classname="sm:flex sm:max-w-md md:w-full">
        <div className="flex">
              <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-sm text-gray-900 placeholder-gray-500 md:w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-white"
          />
        </div>
          <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button className="w-full bg-blue-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
              Subscribe
            </button>
          </div>
        </from>
      </div>
    </div>
  );
}

export default FooterForm;
