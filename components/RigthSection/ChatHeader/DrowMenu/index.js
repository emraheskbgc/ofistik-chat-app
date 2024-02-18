import React,{useRef} from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArchive } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { PiSpeakerSimpleXLight } from "react-icons/pi";


import useClickOutside from '@/hook/useClickOutside';
import { useContext } from 'react';
import PhoneBookContext  from "@/context/PhoneBookContext"

function DropMenu({handleOpenMenu, isOpenMenu, setIsOpenMenu,handleInfoPanelToggle}) {
  const {handleIsMutedChange} = useContext(PhoneBookContext)

    const menuRef = useRef()
  useClickOutside (menuRef, ()=> {
    setIsOpenMenu(false)
  })

  const handleMutedClick = () => {
    handleIsMutedChange(); // isMuted değerini değiştiren fonksiyonu çağır
    setIsOpenMenu(false); // menüyü kapat
  };

  return (
   <div ref={menuRef}>
   <BsThreeDotsVertical
   onClick={handleOpenMenu}
   className="cursor-pointer "
 />
 {isOpenMenu && (
   <div className="absolute right-2 top-10 text-sm  font-[500] text-threeDotMenuTxt bg-threeDotMenu shadow-md rounded">
   <div onClick={handleInfoPanelToggle} className="flex md:hidden justify-between px-6 py-2 hover:bg-threeDotMenuHover cursor-pointer">
   <span>Profile</span>
   <LuUser2 className="ml-6" />
 </div>
    
     <div className="flex justify-between px-6 py-2 hover:bg-threeDotMenuHover cursor-pointer">
       <span>Archive</span>
       <FaArchive className="ml-6" />
     </div>
     <div className="flex justify-between px-6 py-2  hover:bg-threeDotMenuHover cursor-pointer" onClick={handleMutedClick} >
       <span>Muted</span>
       <PiSpeakerSimpleXLight className="ml-6 font-bold" />
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