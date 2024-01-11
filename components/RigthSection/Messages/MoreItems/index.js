import React from 'react'
import { MdAttachment } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { SlEarphones } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { motion } from 'framer-motion';
function MoreItems({showMoreMenu}) {
  return (
    <motion.div
    initial={{ y: "10%", opacity: 0 }}
    animate={showMoreMenu ? { y: "-10%", opacity: 1 } : { y: "10%", opacity: 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="flex justify-between items-center absolute left-[-40px] top-[-120px] border p-5 bg-inputMoreBg w-full"
  >
    <div className="flex flex-col items-center">
    <div className="bg-inputMoreIconBg  text-inputMoreIcon rounded-full p-3 text-xl">
    <MdAttachment/>
    </div>
    <p className="uppercase text-sm font-[600] mt-6">Attached</p>
    </div>
    <div className="flex flex-col items-center">
    <div className="bg-inputMoreIconBg  text-inputMoreIcon rounded-full p-3 text-xl">
    <FaCamera/>
    </div>
    <p className="uppercase text-sm font-[600] mt-6">Camera</p>
    </div>
   
    <div className="flex flex-col items-center">
    <div className="bg-inputMoreIconBg  text-inputMoreIcon rounded-full p-3 text-xl">
    <GrGallery/>
    </div>
    <p className="uppercase text-sm font-[600] mt-6">Gallery</p>
    </div>
    <div className="flex flex-col items-center">
    <div className="bg-inputMoreIconBg  text-inputMoreIcon rounded-full p-3 text-xl">
    <SlEarphones/>
    </div>
    <p className="uppercase text-sm font-[600] mt-6">Audio</p>
    </div>
    <div className="flex flex-col items-center">
    <div className="bg-inputMoreIconBg  text-inputMoreIcon rounded-full p-3 text-xl">
    <FaLocationDot/>
    </div>
    <p className="uppercase text-sm font-[600] mt-6">Location</p>
    </div>
    <div className="flex flex-col items-center">
    <div className="bg-inputMoreIconBg  text-inputMoreIcon rounded-full p-3 text-xl">
    <IoMdContact/>
    </div>
    <p className="uppercase text-sm font-[600] mt-6">Contacts</p>
    </div>
    </motion.div>
  )
}

export default MoreItems