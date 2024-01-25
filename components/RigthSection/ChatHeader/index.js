"use client";
import React, { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { PiVideoCameraFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

import { FaArchive } from "react-icons/fa";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import PhoneCallModal from "./PhoneCallModal";
import VideoCallModal from "./VideoCallModal";
import Info from "./Info";
import { useContext } from "react";
import PhoneBookContext from "@/context/PhoneBookContext";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { LuUser2 } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";

import useClickOutside from "@/hook/useClickOutside";


function ChatHeader() {

  

  const { selectedUser, handleUserSelect } = useContext(PhoneBookContext);

  

  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);

  const handleInfoPanelToggle = () => {
    setIsInfoPanelOpen(!isInfoPanelOpen);
  };

  // three dot dropdownMenu

  const handleOpenSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleBackToMessages = () => {
    // Seçili kullanıcıyı null yaparak mesaj listesine dön
    handleUserSelect("");
  };
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenPhoneModal, setIsOpenPhoneModal] = useState(false);
  const [isOpenVideoCallModal, setIsOpenVideoCallModal] = useState(false);

  const infoRef = useRef()
  useClickOutside(infoRef, ()=> {
    setIsOpenSearch(false)
    setIsOpenMenu(false)
    
  })



  return (
    <>
      <div className="flex  ">
        <div className="border-b border-dashed  fixed  top-0 bg-inputbg w-[100%] md:w-[75%]  ">
          <div className="flex justify-between items-center w-full border">
            <div className="flex  items-center p-4">
              <div className="p-1  bg-backBtnBg rounded text-md font-bold mr-5 md:hidden text-backBtnTxt" onClick={handleBackToMessages}>
                <MdKeyboardArrowLeft />
              </div>
              <div className="relative">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="absolute bg-dotBg w-3 h-3 rounded-full right-0 bottom-0 border border-[2px] border-inputbg"></div>
              </div>
              <div className="ml-3">
                <h2 className="text-md font-bold ">
                  {selectedUser && selectedUser.name}
                </h2>
                <p className="text-personMesTxt font-[400]">
                  {selectedUser.stuation}
                </p>
              </div>
            </div>
            <div ref={infoRef} className="flex mr-10 text-chatIconBg space-x-10 text-2xl relative">
              <IoSearch  onClick={handleOpenSearch} className="cursor-pointer" />
              {isOpenSearch && (
                <>
                  <div className="absolute md:w-[350px] w-[200px] h-15 bg-inputbg border border-messageCountBgs  top-10 md:right-[320px] right-[50px] p-3 rounded">
                    <input
                      type="search"
                      placeholder="Search..."
                      className="text-[15px] px-3 py-2 w-full border rounded focus-within:outline-personMesTxt "
                    />
                  </div>
                </>
              )}
              <PiPhoneCallFill
                onClick={() => setIsOpenPhoneModal(!isOpenPhoneModal)}
                className="hidden md:block cursor-pointer"
              />

              <PiVideoCameraFill
                onClick={() => setIsOpenVideoCallModal(!isOpenVideoCallModal)}
                className="hidden md:block cursor-pointer"
              />
              <FaBookmark className="hidden md:block cursor-pointer" />
              <MdInfo
                onClick={handleInfoPanelToggle}
                className="hidden md:block cursor-pointer"
              />
              <BsThreeDotsVertical
                onClick={handleOpenMenu}
                className="cursor-pointer hidden md:block"
              />
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
              <BsThreeDotsVertical
                onClick={handleOpenMenu}
                className="cursor-pointer md:hidden "
              />
              {isOpenMenu && (
                <div className="absolute right-2 top-10 text-sm  font-[500] text-threeDotMenuTxt bg-threeDotMenu shadow-md rounded">
                <div className="flex justify-between px-6 py-2 hover:bg-threeDotMenuHover cursor-pointer">
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
          </div>
        </div>
      </div>

      <PhoneCallModal
        isOpenPhoneModal={isOpenPhoneModal}
        setIsOpenPhoneModal={setIsOpenPhoneModal}
        selectedUser={selectedUser}
      />
      <VideoCallModal
        isOpenVideoCallModal={isOpenVideoCallModal}
        setIsOpenVideoCallModal={setIsOpenVideoCallModal}
      />
      <Info
        isInfoPanelOpen={isInfoPanelOpen}
        setIsInfoPanelOpen={setIsInfoPanelOpen}
        selectedUser={selectedUser}
        infoRef={infoRef}
      />
    </>
  );
}

export default ChatHeader;
