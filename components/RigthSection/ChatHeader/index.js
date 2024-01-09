import React from "react";
import { IoSearch } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { PiVideoCameraFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";


function ChatHeader() {
  const user = {
    userName: "Emrah Eskibağcı",
    path: "/assets/images/emrah.jpg",
    status:"Online"
  };
  return (
    <div className="border-b border-dashed fixed top-0 bg-inputbg w-[75%]  ">
    <div className="flex justify-between items-center w-full border">
    <div className="flex  items-center p-4" >
        <div className="relative">
          <img
            src={user.path}
            alt={user.userName}
            className="w-10 h-10 rounded-full"
          />
          <div className="absolute bg-dotBg w-3 h-3 rounded-full right-0 bottom-0 border border-[2px] border-inputbg"></div>
        </div>
        <div className="ml-3">
          <h2 className="text-md font-bold ">{user.userName}</h2>
          <p className="text-personMesTxt font-[400]">{user.status}</p>
        </div>
      </div>
      <div className="flex mr-10 text-chatIconBg space-x-10 text-2xl">
        <IoSearch/>
        <PiPhoneCallFill/>
        <PiVideoCameraFill/>
        <FaBookmark/>
        <MdInfo/>
        <BsThreeDotsVertical/>
      </div>
    </div>
      
    </div>
  );
}

export default ChatHeader;
