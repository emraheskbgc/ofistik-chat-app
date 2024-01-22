"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"
import { IoClose } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArchive } from "react-icons/fa";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsCameraVideoFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


function Info({ isInfoPanelOpen, setIsInfoPanelOpen }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  useEffect(()=> {
    let handler = () => {
     setIsInfoPanelOpen(false)
    } 
    document.addEventListener("mousedown", handler)
   })
  return (
    <>
      <div
        className={`fixed ${styles.animate} z-50  right-0 top-16  w-screen    justify-end items-start ${
          isInfoPanelOpen ? "flex" : "hidden"
        }`}
      >
        <div className="rounded-t rounded-b shadow-md bg-infoModalBg  w-[25%] flex flex-col justify-center items-center relative">
          <div className="relative text-2xl">
            <img
              src="/assets/images/avatar.jpeg"
              className="w-full h-72 p-3 rounded-2xl"
              alt=""
            />
            <div className="absolute flex top-6 left-6 text-inputbg">
              <div>
                <IoClose onClick={() => setIsInfoPanelOpen(false)} />
              </div>
            </div>
            <div className="absolute flex top-6 right-6 text-inputbg">
              <div>
                <BsThreeDotsVertical onClick={handleOpenMenu} />
              </div>
              {isOpenMenu && (
                <div className="absolute right-2 top-10 text-sm font-[500] text-threeDotMenuTxt bg-threeDotMenu shadow-md rounded">
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

             <div className="absolute flex-col bottom-6 left-8 text-sm text-inputbg">
            <p className="font-semibold">Ahmet</p>
            <div className="flex items-center">
              <div className="bg-dotBg w-3 h-3 mr-3 rounded-full "></div>
              <p className="opacity-60"> Online</p>
            </div>
          </div>
          </div>
          <div className="border border-solid w-full"></div>
          <div className="overflow-y-auto overflow-hidden  max-h-[500px]">
           <div className="flex justify-center items-center py-6 space-x-3">
            <div className="bg-infoMsgBg text-infoMsgTxt text-xl cursor-pointer p-3 rounded ">
              <BiMessageAltDetail />
            </div>
            <div className="bg-infoHrtBg text-infoHrtTxt text-xl cursor-pointer p-3 rounded ">
              <FaRegHeart />
            </div>
            <div className="bg-infoPhnBg text-infoPhnTxt text-xl cursor-pointer p-3 rounded ">
              <FaPhoneVolume />
            </div>
            <div className="bg-infoCmrBg text-infoCmrTxt text-xl cursor-pointer p-3 rounded ">
              <BsCameraVideoFill />
            </div>
            <div className="bg-infoDotBg text-infoFotTxt text-xl cursor-pointer p-3 rounded ">
              <BsThreeDots />
            </div>
          </div>
         <div className="w-[75%] my-3 mx-11 border border-dotted " ></div>
         <div className="p-5">
          <h2 className="opacity-40 uppercase text-sm font-semibold mb-3">Status :</h2>
          <p className="opacity-45 font-[500]">A professional profile is a brief summary of your skills, strengths, and key experiences</p>
          </div>
          <div className="p-8">
                <h2 className=" opacity-40 uppercase mb-3">Info : </h2> 
                <div className="flex  space-x-3 mb-5">
                  <FiUser className="opacity-40"/> <h5 className="font-[500]">Ahmet</h5>
                </div>
                <div className="flex space-x-3 mb-5">
                  <MdOutlineMail className="opacity-40"/> <h5 className="font-[500]">emrah@emrah.com</h5>
                </div>
                <div className="flex space-x-3 mb-5">
                  <MdOutlineLocalPhone className="opacity-40"/> <h5 className="font-[500]">053497899999</h5>
                </div>
                <div className="flex space-x-3 mb-5">
                  <IoLocationOutline className="opacity-40"/> <h5 className="font-[500]">Ankara, TR</h5>
                </div>
          </div>
         
         </div>
         
         
        </div>
      </div>
    </>
  );
}

export default Info;
