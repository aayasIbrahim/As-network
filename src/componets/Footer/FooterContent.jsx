import React from "react";

function FooterContent({ heading, link }) {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-8 lg:col-span-1">
      <div>
        <h3 className="text-xl font-semibold text-white tracking-wider uppercase">
        {heading}
      </h3>
      <ul className="mt-6 space-y-4 ms-1">
        {link.map((item, index) => {
          return (
            <li key={index}>
              {" "}
              <a href="/" className="text-lg text-gray-200 hover:text-white">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
      </div>
    </div>
  );
}

export default FooterContent;
