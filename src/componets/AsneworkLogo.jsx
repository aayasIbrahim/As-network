const ASNetworkLogo = ({scrolled}) => {
    return (
      <div className="flex items-center space-x-2 text-blue-600 font-bold text-2xl">
        {/* Icon (Optional: Can be replaced with SVG or React Icon) */}
        <div className="w-10 h-10  rounded-full flex items-center justify-center shadow-lg ">
          <span className="text-l">🌐</span>
        </div>
  
        {/* Logo Text */}
        <span className="tracking-wide font-bold text-blue-600 ">
          <span className={`${scrolled ?"text-black dark:text-white":"text-white"}`}>AS</span>
          <span className={`text-2xl ${scrolled ?"text-black dark:text-white":"text-white"}`}>Network</span>
        </span>
      </div>
    );
  };
  
  export default ASNetworkLogo;
  