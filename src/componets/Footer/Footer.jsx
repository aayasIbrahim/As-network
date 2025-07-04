import React from "react";
import FooterContent from "./FooterContent";
import FooterForm from "./FooterForm";
const arrayofCompany = ["About Us", "Pricing", "Coverage Area", "Bill Payment"];
const arrayofQuickLinks = ["Join Group", "Like our Page"];
const arrayofSupport = ["How to Play", "Self Care", "Articles", "Contact Us"];
const arrayofLegal = ["Terms of Service", "Privacy Policy", "Return Policy"];
function Footer() {
  return (
    <footer className="bg-gray-800 dark:border-t dark:border-t-gray-700">
      <div className="max-w-7xl mx-auto pt-16 py-12 px-5 lg:py-16 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <FooterContent heading={"COMPANY"} link={arrayofCompany} />
            <FooterContent heading={"QUICK LINKS"} link={arrayofQuickLinks} />
            <FooterContent heading={"SUPPORT"} link={arrayofSupport} /> 
            <FooterContent heading={"LEGAL"} link={arrayofLegal} />
          </div>
           <FooterForm/>
       
           
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
