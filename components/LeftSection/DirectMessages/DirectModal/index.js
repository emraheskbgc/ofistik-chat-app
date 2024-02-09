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
          <div className="bg-dotBg p-2  text-plusTxt  shadow-md md:w-[100%] w-[80%] flex ">
            <div className="bg-modalChangeBg p-2 rounded-full cursor-pointer ">
              New Message
            </div>
            <div className="p-2 cursor-pointer" onClick={handleClickOpenModal}>
              New Channel
            </div>
          </div>
          <div className="bg-modalHeadBg rounded-tr flex justify-between items-center  pl-3 py-5 top-0 w-full">
            <div className="text-plusTxt font-bold text-md">Contacts</div>
            <div className="pr-3 text-xl text-modalCloseIcon cursor-pointer">
              <IoCloseOutline onClick={() => setIsOpenModal(false)} />
            </div>
          </div>
          <div className="flex items-center w-[90%] ml-7  py-5 px-4 ">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" border border-modalInputBorder border-opacity-45 placeholder:italic focus-within:outline bg-inputbg text-sm text-gray-700 px-2 rounded-bl rounded-tl py-3  w-full  "
              type="text"
              id="searchUser"
              placeholder="Search here.."
            />
            <div className="p-3.5 rounded-r  left-0 bg-modalSearchBg hover:bg-modalSearchHoverBg cursor-pointer text-inputbg text-lg ">
              <RiUserSearchLine />
            </div>
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
          <hr />
          <div className="flex justify-end items-center pr-8 py-5 border w-full rounded-b">
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
