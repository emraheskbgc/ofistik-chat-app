"use client";
import React, { useState, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./styles.module.css";
import PhoneBook from "@/components/PhoneBook";

import useClickOutside from "@/hook/useClickOutside";

import { useContext } from "react";
import PhoneBookContext from "@/context/PhoneBookContext";

function ChannelsModal({
  channelOpenModal,
  setChannelOpenModal,
  setIsOpenModal,
  isOpenModal,
}) {
  const { showCheckBox } = useContext(PhoneBookContext);

  const channalRef = useRef();
  useClickOutside(channalRef, () => {
    setChannelOpenModal(false);
  });
  const handleClickOpenNewMessageModal = () => {
    setIsOpenModal(!isOpenModal);
    setChannelOpenModal(false);
  };

  return (
    <>
      <div
        className={`fixed z-50  left-0 top-0 bg-modalOutBg bg-opacity-50 w-screen h-screen   justify-center items-center ${
          channelOpenModal ? "flex flex-col" : "hidden"
        }`}
      >
        <div className="bg-modalBg rounded-t rounded-b shadow-md md:w-[40%] w-[80%] flex flex-col">
          <div className="bg-dotBg p-2  text-plusTxt  shadow-md  w-[100%] flex ">
            <div
              className="p-2 cursor-pointer"
              onClick={handleClickOpenNewMessageModal}
            >
              New Message
            </div>
            <div className="bg-modalChangeBg p-2 rounded-full cursor-pointer duration-500 ">
              New Channel
            </div>
          </div>
          <div className="bg-modalHeadBg rounded-tr flex justify-between items-center  pl-3 py-5 top-0 w-full">
            <div className="text-plusTxt font-bold text-md">
              Create New Group
            </div>
            <div className="pr-3 text-xl text-modalCloseIcon cursor-pointer">
              <IoCloseOutline onClick={() => setChannelOpenModal(false)} />
            </div>
          </div>
          <div className="flex flex-col  w-[90%] md:ml-7 ml-4  py-5 px-4 ">
            <h2 className="font-semibold mb-3">Group Name</h2>
            <input
              className=" border border-modalInputBorder border-opacity-45 placeholder:italic focus-within:outline bg-inputbg text-sm text-gray-700 px-2 rounded py-2  w-full  "
              type="text"
              id="groupName"
              placeholder="Enter Group Name"
            />
          </div>
          <div className="flex  flex-col  w-[90%] md:ml-7 ml-4  px-4 ">
            <h2 className="font-semibold mb-1">Group Members</h2>
          </div>

          <div className={`${styles.contactsContainer} border md:ml-10 ml-8 `}>
            <h2 className=" font-[600] text-sm text-modalOutBg bg-channleModalContactBg p-2 border w-full">
              Contacts
            </h2>
            <PhoneBook showAvatar={false} showCheckBox={showCheckBox} />
          </div>

          <div className="flex rounded flex-col  w-[90%] md:ml-7 ml-4    my-4 px-4 ">
            <h2 className="font-semibold mb-3">Description</h2>
            <textarea
              cols="2"
              rows="2"
              placeholder="Enter Description"
              className="p-3 placeholder:italic focus-within::outline border-modalInputBorder bg-inputbg border-opacity-45"
            ></textarea>
          </div>

          <hr />
          <div className="flex justify-end items-center pr-8 py-5 border w-full rounded-b">
            <div
              className="flex justify-center items-center mr-5 text-channelModalCloseTxt font-[600] cursor-pointer"
              onClick={() => setChannelOpenModal(false)}
            >
              <IoCloseOutline className="text-xl" /> <span>Cancel</span>
            </div>
            <div className="border py-4 px-5 cursor-pointer bg-modalSendBtn text-modalSendTxt rounded">
              Create Groups
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChannelsModal;
