"use client"
import React,{useState, useRef} from "react";
import { IoSend } from "react-icons/io5";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { MdAttachment } from "react-icons/md";

import styles from "./styles.module.css";
import { Tooltip } from "@chakra-ui/react";

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import useClickOutside from "@/hook/useClickOutside.js";
import File from "../File";




function Input({ inputValue, sendMessage, handleInputChange, sendImage }) {
  

  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // Emoji seçicinin görünürlüğünü kontrol etmek için bir state oluşturuyoruz.
  const [fileOpenModal, setFileOpenModal] = useState(false)

  const handleFileClick = () => {
    setFileOpenModal(!fileOpenModal)
  }
  

  const handleEmojiClick = () => {
    setShowEmojiPicker(!showEmojiPicker); // Emoji seçicinin görünürlüğünü tersine çeviriyoruz.
  };

  const handleEmojiSelect = (emoji) => {
    // Seçilen emoji'yi giriş değeri ile birleştirin ve set edin
    const newInputValue = inputValue + emoji.native;
    handleInputChange({ target: { value: newInputValue } });

    // Emoji seçicinin görünürlüğünü kapatın
    setShowEmojiPicker(false);
  };

  const emojiRef = useRef()
  useClickOutside (emojiRef, ()=> {
    setShowEmojiPicker(false)
  })


  const handleSendClick = () => {
    sendMessage({ text: inputValue });
  };

  const handleSendFile = (image) => {
    sendImage({
      image:image
    })
  }

  return (
    <>
     <div className={`${styles.inputArea} border-t w-[100%] md:w-[75%] p-5`}>
      <div className="flex  justify-between  items-center   space-x-3 md:space-x-10 text-chatIconBg ">
      
      
       <Tooltip hasArrow label='More'  placement='top' fontSize='sm' >
        <div className="text-2xl cursor-pointer" >
          <MdAttachment onClick={handleFileClick} />
        </div>
        </Tooltip>
      
     
        
      <div ref={emojiRef} onClick={handleEmojiClick}>
       <Tooltip hasArrow label='Emoji'  placement='top' fontSize='sm' >
        <div className="text-2xl cursor-pointer">
          <HiOutlineEmojiHappy />
        </div>
        </Tooltip>
      </div>
       
      {showEmojiPicker && (
        <div ref={emojiRef} style={{ position: 'absolute', top: '-420px', left: '20px' ,backgroundColor: 'white'}}> 
          <Picker data={data} emojiSize={20} emojiButtonSize={28} onEmojiSelect={handleEmojiSelect} maxFrequentRows={0} theme="light" />
        </div>
      )}
       
        <div className="w-full">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className={`${styles.inputField} bg-sendInputBg`}
          />
        </div>
       
        <div >
          <button  onClick={handleSendClick}>
            <div className="border py-4 px-5 cursor-pointer bg-modalSendBtn text-modalSendTxt rounded">
           <IoSend />
            </div>
          </button>
        </div>
      </div>
  
    </div>
    <File fileOpenModal={fileOpenModal} setFileOpenModal={setFileOpenModal}  onSendClick={handleSendFile} />
    </>
   
  );
}

export default Input;
