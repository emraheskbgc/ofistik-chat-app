"use client"
import React,{useState} from "react";
import { IoSearch } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { PiVideoCameraFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

import { FaArchive } from "react-icons/fa";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";



function ChatHeader() {
  const user = {
    userName: "Emrah Eskibağcı",
    path: "/assets/images/emrah.jpg",
    status:"Online"
  };


  // three dot dropdownMenu

  const [isOpenMenu, setIsOpenMenu]=useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }


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
        <BsThreeDotsVertical onClick={handleOpenMenu} className="cursor-pointer" />
        {isOpenMenu && (
          <div className="absolute right-12 top-20 text-sm font-[500] text-threeDotMenuTxt bg-threeDotMenu shadow-md rounded">
            <div className="flex justify-between px-6 py-2 hover:bg-threeDotMenuHover cursor-pointer">
              <span>Archive</span>
              <FaArchive className="ml-6"/>
            </div>
            <div className="flex justify-between px-6 py-2  hover:bg-threeDotMenuHover cursor-pointer">
            <span>Muted</span>
            <AiOutlineAudioMuted className="ml-6"/>
          </div>
          <div className="flex justify-between px-6 py-2  hover:bg-threeDotMenuHover cursor-pointer">
          <span>Delete</span>
          <RiDeleteBin6Line className="ml-6"/>
        </div>
          </div>
        )}
      </div>
    </div>
      
    </div>
  );
}

export default ChatHeader;
