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


function Input({ inputValue, sendMessage, handleInputChange }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // Emoji seçicinin görünürlüğünü kontrol etmek için bir state oluşturuyoruz.
  const [showMoreMenu, setShowMoreMenu] = useState(false); // more menü açılımı için kullanılan state

  const handleEmojiClick = () => {
    setShowEmojiPicker(!showEmojiPicker); // Emoji seçicinin görünürlüğünü tersine çeviriyoruz.
  };

  const handleMoreClick = () => {
    setShowMoreMenu(!showMoreMenu); // DotsHorizontal ikonuna tıklanınca görünürlüğü değiştir
  };

  return (
    <div className={`${styles.inputArea} border- p-5`}>
      <div className="flex  justify-center items-center space-x-10 text-chatIconBg ">
      
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
          <Picker data={data} emojiSize={20} emojiButtonSize={28} onEmojiSelect={console.log} maxFrequentRows={0} theme="light" />
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
        <div className="text-2xl">
          <TiMicrophoneOutline />
        </div>
        <div >
          <button onClick={sendMessage}>
            <div className="border py-4 px-5 cursor-pointer bg-modalSendBtn text-modalSendTxt rounded">
              <IoSend />
            </div>
          </button>
        </div>
      </div>
      <div className="ml-36 flex items-center">
      <span className="mr-3 text-xs font-[400]">Emrah is Typing </span>
      <div className={`${styles.dot} ${styles.dot1} bg-typeingDotBg`}></div>
      <div className={`${styles.dot} ${styles.dot2} bg-typeingDotBg` }></div>
      <div className={`${styles.dot} ${styles.dot3} bg-typeingDotBg`}></div>
   
    </div>
    </div>
  );
}

export default Input;
