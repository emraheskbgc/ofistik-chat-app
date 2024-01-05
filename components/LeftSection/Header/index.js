import React from "react";


function Header() {
  return (
    <div className="fixed z-40 bg-messageBodyBg w-[25%] ">
    <h2 className="text-xl ml-10 mt-6 mb-4 font-[500] ">
      Messages <span className="text-messageBg text-sm " >(128)</span>
    </h2>
  
    <div className="flex  items-center w-[80%] h-12 rounded-sm focus-within:shadow-lg focus-within:outline container bg-inputbg">
      <div className="grid place-items-center h-full w-12 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
  
      <input
        className="outline-none placeholder:italic text-sm text-gray-700 pr-2 w-full  "
        type="text"
        id="search"
        placeholder="Search here.."
      />
    </div>
  </div>
  
  );
}

export default Header;
