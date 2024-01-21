"use client"
import React,{useState} from "react";
import { IoSend } from "react-icons/io5";
import { TiMicrophoneOutline } from "react-icons/ti";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { HiDotsHorizontal } from "react-icons/hi";
import MoreItems from "../MoreItems/index.js"

import styles from "./styles.module.css";
import { Tooltip } from "@chakra-ui/react";

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import { useContext } from "react";
import PhoneBookContext  from "@/context/PhoneBookContext"


function Input({ inputValue, sendMessage, handleInputChange }) {
  const {selectedUser} = useContext(PhoneBookContext)

  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // Emoji seçicinin görünürlüğünü kontrol etmek için bir state oluşturuyoruz.
  const [showMoreMenu, setShowMoreMenu] = useState(false); // more menü açılımı için kullanılan state


  const handleEmojiClick = () => {
    setShowEmojiPicker(!showEmojiPicker); // Emoji seçicinin görünürlüğünü tersine çeviriyoruz.
  };

  const handleMoreClick = () => {
    setShowMoreMenu(!showMoreMenu); // DotsHorizontal ikonuna tıklanınca görünürlüğü değiştir
  };

  const handleEmojiSelect = (emoji) => {
    // Seçilen emoji'yi giriş değeri ile birleştirin ve set edin
    const newInputValue = inputValue + emoji.native;
    handleInputChange({ target: { value: newInputValue } });

    // Emoji seçicinin görünürlüğünü kapatın
    setShowEmojiPicker(false);
  };

 


  const handleSendClick = () => {
    
      
    sendMessage({ text: inputValue });
    
  };

  return (
    <div className={`${styles.inputArea}  w-[100%] md:[75%] p-5`}>
      <div className="flex  justify-center items-center  w-full space-x-3 md:space-x-10 text-chatIconBg ">
      
      <div onClick={handleMoreClick}>
       <Tooltip hasArrow label='More'  placement='top' fontSize='sm' >
        <div className="text-2xl cursor-pointer" >
          <HiDotsHorizontal />
        </div>
        </Tooltip>
      </div>
      {showMoreMenu && <MoreItems showMoreMenu={showMoreMenu} />}
        
      <div onClick={handleEmojiClick}>
       <Tooltip hasArrow label='Emoji'  placement='top' fontSize='sm' >
        <div className="text-2xl cursor-pointer">
          <HiOutlineEmojiHappy />
        </div>
        </Tooltip>
      </div>
       
      {showEmojiPicker && (
        <div style={{ position: 'absolute', top: '-420px', left: '20px' ,backgroundColor: 'white'}}> {/* Stilinizi ayarlamak için style ekledim. Konumunu değiştirebilirsiniz. */}
          <Picker data={data} emojiSize={20} emojiButtonSize={28} onEmojiSelect={handleEmojiSelect} maxFrequentRows={0} theme="light" />
        </div>
      )}
       
        <div className="w-full ">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className={`${styles.inputField} bg-sendInputBg`}
          />
        </div>
        <div className="text-2xl hidden md:block">
         <TiMicrophoneOutline />
        </div>
        <div >
          <button  onClick={handleSendClick}>
            <div className="border py-4 px-5 cursor-pointer bg-modalSendBtn text-modalSendTxt rounded">
           <IoSend />
            </div>
          </button>
        </div>
      </div>
      <div className="md:ml-36 ml-20 flex items-center">
      <span className="mr-3 text-xs font-[400]">{selectedUser.name} is Typing </span>
      <div className={`${styles.dot} ${styles.dot1} bg-typeingDotBg`}></div>
      <div className={`${styles.dot} ${styles.dot2} bg-typeingDotBg` }></div>
      <div className={`${styles.dot} ${styles.dot3} bg-typeingDotBg`}></div>
   
    </div>
    </div>
  );
}

export default Input;
