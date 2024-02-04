import React,{useRef} from 'react'
import { MdAttachment } from "react-icons/md";
import { GrGallery } from "react-icons/gr";


import useClickOutside from '@/hook/useClickOutside';



function MoreItems({showMoreMenu, setShowMoreMenu,handleFileClick}) {


  const moreRef = useRef()
  useClickOutside (moreRef, ()=> {
    setShowMoreMenu(false)
  })


  return (
     <div ref={moreRef}
    className="flex justify-evenly items-center absolute md:left-0 left-[-12px]  overflow-x-auto md:overflow-x-hidden top-[-120px]
     border p-5 bg-inputMoreBg w-[100%] space-x-12 md:space-x-0 snap-x-mandatory snap-type-x-[mandatory]">
    <div className="flex flex-col items-center cursor-pointer">
    <div className="bg-inputMoreIconBg  text-inputMoreIcon rounded-full p-3 text-xl">
    <MdAttachment onClick={handleFileClick}/>
    </div>
    <p className="uppercase text-sm font-[600] mt-6">Attached</p>
    </div>
   
   
    <div className="flex flex-col items-center cursor-pointer">
    <div className="bg-inputMoreIconBg  text-inputMoreIcon rounded-full p-3 text-xl">
    <GrGallery/>
    </div>
    <p className="uppercase text-sm font-[600] mt-6">Gallery</p>
    </div>
  
  
    
    </div>
    

   
  )
}

export default MoreItems