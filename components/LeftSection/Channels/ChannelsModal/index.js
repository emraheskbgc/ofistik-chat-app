import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import styles from "./styles.module.css";
function ChannelsModal({ isOpenModal, setIsOpenModal }) {
  const users = [
    { id: 1, name: "Ahmet", avatar: "/assets/images/avatar.jpeg " },
    { id: 2, name: "Ayşe", avatar: "/assets/images/avatar2.jpeg" },
    { id: 3, name: "Berk", avatar: "/assets/images/avatar.jpeg " },
    { id: 4, name: "Buse", avatar: "/assets/images/icon.jpeg" },
    { id: 5, name: "Emrah", avatar: "/assets/images/emrah.jpg " },
    { id: 6, name: "Zeliha", avatar: "/assets/images/avatar2.jpeg" },
    { id: 7, name: "Osman", avatar: "/assets/images/avatar.jpeg" },
    // ... diğer kullanıcılar
  ];
  // kullanıcıları alfabetik sıralama
  const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));

  //alfabetik sıralamaya göre kullanıcıları harf başlıklarıyla gruplayalım:

  const groupedUsers = {};

  sortedUsers.forEach((user) => {
    const firstLetter = user.name.charAt(0).toUpperCase();
    if (!groupedUsers[firstLetter]) {
      groupedUsers[firstLetter] = [];
    }
    groupedUsers[firstLetter].push(user);
  });
  return (
    <>
      
    <div
      className={`fixed z-50  left-0 top-0 bg-modalOutBg bg-opacity-50 w-screen h-screen   justify-center items-center ${
        isOpenModal ? "flex" : "hidden"
      }`}
    >
      <div className="bg-modalBg rounded-t rounded-b shadow-md w-[40%] flex flex-col">
        <div className="bg-modalHeadBg rounded-t flex justify-between items-center  pl-3 py-5 top-0 w-full">
          <div className="text-plusTxt font-bold text-md">Create New Group</div>
          <div className="pr-3 text-xl text-modalCloseIcon cursor-pointer">
            <IoCloseOutline onClick={() => setIsOpenModal(false)} />
          </div>
        </div>
        <div className="flex flex-col  w-[90%] ml-7   py-5 px-4 ">
          <h2 className='font-semibold mb-3'>Group Name</h2>
          <input
            className=" border border-modalInputBorder border-opacity-45 placeholder:italic focus-within:outline bg-inputbg text-sm text-gray-700 px-2 rounded py-3  w-full  "
            type="text"
            id="groupName"
            placeholder="Enter Group Name"
          />
         
        </div>
        <div className="flex  flex-col  w-[90%] ml-7   py-5 px-4 ">
        <h2 className='font-semibold mb-3'>Group Members</h2>
        <button className=' p-1 rounded w-[25%] bg-channleModalBtnBg hover:bg-channelModalBtnHoverBg text-channelModalBtnTxt text-sm font-[500]'>Select Members</button>
        </div>
        <div className="flex rounded flex-col  w-[90%] ml-7   py-5 px-4 ">
        <h2 className='font-semibold mb-3'>Description</h2>
        <textarea cols="10" rows="5" placeholder='Enter Description' className='p-3 placeholder:italic focus-within::outline border-modalInputBorder bg-inputbg border-opacity-45'></textarea>
        </div>

   
        <hr/>
        <div className="flex justify-end items-center pr-8 py-5 border w-full rounded-b">
                <div className="flex justify-center items-center mr-5 text-channelModalCloseTxt font-[600] cursor-pointer" onClick={()=>setIsOpenModal(false)}>
                    <IoCloseOutline className="text-xl"/> <span>Cancel</span>
                </div>  
                <div className="border py-4 px-5 cursor-pointer bg-modalSendBtn text-modalSendTxt rounded">
                    Create Groups
                </div>
        </div>
      </div>
    </div>

</>
  )
}

export default ChannelsModal