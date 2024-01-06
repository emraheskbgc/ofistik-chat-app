import React from "react";
import styles from "./styles.module.css";

import { IoCloseOutline } from "react-icons/io5";
import { RiUserSearchLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";

function DirectModal({ isOpenModal, setIsOpenModal }) {
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
              <div className="text-plusTxt font-bold text-md">Contacts</div>
              <div className="pr-3 text-xl text-modalCloseIcon cursor-pointer">
                <IoCloseOutline onClick={() => setIsOpenModal(false)} />
              </div>
            </div>
            <div className="flex items-center w-[90%] ml-7  py-5 px-4 ">
              <input
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
            <h2 className="ml-11 font-[600] text-sm text-modalContactTxt">Contacts</h2>
              {Object.keys(groupedUsers).map((letter) => (
                <div key={letter}>
                  <div className={`${styles.letterHeader} text-modalSendBtn flex justify-center items-center` }>{letter} <div className="w-[80%] ml-4 h-0 border"></div> </div>
                  {groupedUsers[letter].map((user) => (
                    <div key={user.id} className={styles.userItem}>
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className={styles.avatar}
                      />
                      <span className= "text-modalNameTxt font-[600] text-sm">{user.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <hr/>
            <div className="flex justify-end items-center pr-8 py-5 border w-full rounded-b">
                    <div className="flex justify-center items-center mr-5 text-modalCloseTxt font-[600] cursor-pointer" onClick={()=>setIsOpenModal(false)}>
                        <IoCloseOutline className="text-xl"/> <span>Cancel</span>
                    </div>  
                    <div className="border py-4 px-5 cursor-pointer bg-modalSendBtn text-modalSendTxt rounded">
                        <IoSend/>
                    </div>
            </div>
          </div>
        </div>
    
    </>
  );
}

export default DirectModal;
