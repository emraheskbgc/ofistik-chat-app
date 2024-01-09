import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./styles.module.css";
import PhoneBook from "@/components/PhoneBook";
function ChannelsModal({ isOpenModal, setIsOpenModal, configAvatar, configCheck }) {
  
  const [isOpenContact, setIsOpenContact] = useState(false);
  const handleOpenContact = () => {
    setIsOpenContact(!isOpenContact);
  };
  return (
    <>
      <div
        className={`fixed z-50  left-0 top-0 bg-modalOutBg bg-opacity-50 w-screen h-screen   justify-center items-center ${
          isOpenModal ? "flex" : "hidden"
        }`}
      >
        <div className="bg-modalBg rounded-t rounded-b shadow-md w-[40%] flex flex-col">
          <div className="bg-modalHeadBg rounded-t flex justify-between items-center  pl-3 py-5 top-0 w-full">
            <div className="text-plusTxt font-bold text-md">
              Create New Group
            </div>
            <div className="pr-3 text-xl text-modalCloseIcon cursor-pointer">
              <IoCloseOutline onClick={() => setIsOpenModal(false)} />
            </div>
          </div>
          <div className="flex flex-col  w-[90%] ml-7   py-5 px-4 ">
            <h2 className="font-semibold mb-3">Group Name</h2>
            <input
              className=" border border-modalInputBorder border-opacity-45 placeholder:italic focus-within:outline bg-inputbg text-sm text-gray-700 px-2 rounded py-3  w-full  "
              type="text"
              id="groupName"
              placeholder="Enter Group Name"
            />
          </div>
          <div className="flex  flex-col  w-[90%] ml-7   py-5 px-4 ">
            <h2 className="font-semibold mb-3">Group Members</h2>
            <button
              onClick={handleOpenContact}
              className=" p-1 rounded w-[25%] bg-channleModalBtnBg hover:bg-channelModalBtnHoverBg text-channelModalBtnTxt text-sm font-[500]"
            >
              Select Members
            </button>
          </div>
          {isOpenContact && (
            <div className={`${styles.contactsContainer} border ml-10 `}>
              <h2 className=" font-[600] text-sm text-modalOutBg bg-channleModalContactBg p-2 border w-full">
                Contacts
              </h2>
              <PhoneBook configAvatar={configAvatar=false} configCheck={configCheck} />
            </div>
          )}

          <div className="flex rounded flex-col  w-[90%] ml-7   py-5 px-4 ">
            <h2 className="font-semibold mb-3">Description</h2>
            <textarea
              cols="10"
              rows="5"
              placeholder="Enter Description"
              className="p-3 placeholder:italic focus-within::outline border-modalInputBorder bg-inputbg border-opacity-45"
            ></textarea>
          </div>

          <hr />
          <div className="flex justify-end items-center pr-8 py-5 border w-full rounded-b">
            <div
              className="flex justify-center items-center mr-5 text-channelModalCloseTxt font-[600] cursor-pointer"
              onClick={() => setIsOpenModal(false)}
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