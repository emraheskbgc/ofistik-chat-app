import React,{useRef} from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArchive } from "react-icons/fa";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";

import useClickOutside from '@/hook/useClickOutside';

function DropMenu({handleOpenMenu, isOpenMenu, setIsOpenMenu,handleInfoPanelToggle}) {

    const menuRef = useRef()
  useClickOutside (menuRef, ()=> {
    setIsOpenMenu(false)
  })

  return (
   <div ref={menuRef}>
   <BsThreeDotsVertical
   onClick={handleOpenMenu}
   className="cursor-pointer "
 />
 {isOpenMenu && (
   <div className="absolute right-2 top-10 text-sm  font-[500] text-threeDotMenuTxt bg-threeDotMenu shadow-md rounded">
   <div onClick={handleInfoPanelToggle} className="flex justify-between px-6 py-2 hover:bg-threeDotMenuHover cursor-pointer">
   <span>Profile</span>
   <LuUser2 className="ml-6" />
 </div>
     <div className="flex justify-between px-6 py-2 hover:bg-threeDotMenuHover cursor-pointer">
       <span>Audio</span>
       <MdOutlinePhoneInTalk className="ml-6" />
     </div>
     <div className="flex justify-between px-6 py-2 hover:bg-threeDotMenuHover cursor-pointer">
       <span>Video</span>
       <BsCameraVideo className="ml-6" />
     </div>
     <div className="flex justify-between px-6 py-2 hover:bg-threeDotMenuHover cursor-pointer">
       <span>Archive</span>
       <FaArchive className="ml-6" />
     </div>
     <div className="flex justify-between px-6 py-2  hover:bg-threeDotMenuHover cursor-pointer">
       <span>Muted</span>
       <AiOutlineAudioMuted className="ml-6" />
     </div>
     <div className="flex justify-between px-6 py-2  hover:bg-threeDotMenuHover cursor-pointer">
       <span>Delete</span>
       <RiDeleteBin6Line className="ml-6" />
     </div>
   </div>
 )}
   </div>
  )
}

export default DropMenu