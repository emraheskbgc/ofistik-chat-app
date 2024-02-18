"use client";
import React, { useState, useRef } from "react";
import styles from "./styles.module.css";

import { IoCloseOutline } from "react-icons/io5";
import { RiUserSearchLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";
import PhoneBook from "@/components/PhoneBook";
import users from "@/public/assets/data/users.json";
import ChannelsModal from "../../Channels/ChannelsModal";

import useClickOutside from "@/hook/useClickOutside";

import { useContext } from "react";
import PhoneBookContext from "@/context/PhoneBookContext";

function DirectModal({ isOpenModal, setIsOpenModal }) {
  const { showAvatar } = useContext(PhoneBookContext);

  const [searchTerm, setSearchTerm] = useState(""); // Arama terimi için state

  // Filtreleme fonksiyonu
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const directRef = useRef();

  const [channelOpenModal, setChannelOpenModal] = useState(false);

  const handleClickOpenModal = () => {
    setChannelOpenModal(!channelOpenModal);
    setIsOpenModal(false);
  };

  return (
    <>
      <div
        className={`fixed z-50  left-0 top-0 bg-modalOutBg bg-opacity-50 w-screen h-screen   justify-center items-center ${
          isOpenModal ? "flex flex-col" : "hidden"
        }`}
      >
        <div className="bg-modalBg rounded-t rounded-b shadow-md md:w-[40%] w-[80%] flex flex-col">
          <div className="bg-inputbg p-2   text-plusTxt  shadow-md  w-[100%] flex justify-between">
          <div className="flex">
          <div className="bg-inputMoreBg p-2 rounded-full cursor-pointer ">
              New Message
            </div>
            <div className="p-2 cursor-pointer" onClick={handleClickOpenModal}>
              New Mass Message
            </div>
          </div>
          <div >
          <div className="pr-3 pt-3 text-xl text-modalCloseIcon cursor-pointer">
              <IoCloseOutline onClick={() => setIsOpenModal(false)} />
            </div>
          </div>
            
          </div>
          <div className="bg-inputbg  flex justify-between items-center  pl-3 py-5 top-0 w-full">
            <div className="text-plusTxt font-bold text-md">Contacts</div>
            
          </div>
          <div className="flex  w-[100%] bg-messageBodyBg py-5 px-4 ">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" border border-modalInputBorder border-opacity-45 placeholder:italic focus-within:outline bg-inputbg text-sm text-gray-700 px-2 rounded py-3  w-full  "
              type="text"
              id="searchUser"
              placeholder="Search here.."
            />
         
          </div>
          <div className={styles.contactsContainer}>
            <h2 className="ml-11 font-[600] text-sm text-modalContactTxt">
              Contacts
            </h2>
            <PhoneBook
              showAvatar={showAvatar}
              showCheckBox={false}
              filteredUsers={filteredUsers}
              setIsOpenModal={setIsOpenModal}
            />
          </div>
         
          <div className="flex justify-end bg-messageBodyBg items-center pr-8 py-5   w-full rounded-b">
            <div
              className="flex justify-center items-center mr-5 text-modalCloseTxt font-[600] cursor-pointer"
              onClick={() => setIsOpenModal(false)}
            >
              <IoCloseOutline className="text-xl" /> <span>Cancel</span>
            </div>
            <div className="border py-4 px-5 cursor-pointer bg-modalSendBtn text-modalSendTxt rounded">
              <IoSend />
            </div>
          </div>
        </div>
      </div>

      <ChannelsModal
        channelOpenModal={channelOpenModal}
        setChannelOpenModal={setChannelOpenModal}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </>
  );
}

export default DirectModal;
