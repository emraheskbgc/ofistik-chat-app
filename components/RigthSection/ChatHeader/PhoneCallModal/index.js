
import React from "react";

import { IoCloseOutline } from "react-icons/io5";

import { IoSend } from "react-icons/io5";



function PhoneCallModal({ isOpenPhoneModal, setIsOpenPhoneModal }) {
 

  return (
    <>
    <div
    className={`fixed z-50  left-0 top-0 bg-modalOutBg bg-opacity-50 w-screen h-screen   justify-center items-center ${
      isOpenPhoneModal ? "flex" : "hidden"
    }`}
  >
    <div className="bg-modalBg rounded-t rounded-b shadow-md w-[40%] flex flex-col">
      <div className="bg-modalHeadBg rounded-t flex justify-between items-center  pl-3 py-5 top-0 w-full">
        <div className="text-plusTxt font-bold text-md">Contacts</div>
        <div className="pr-3 text-xl text-modalCloseIcon cursor-pointer">
          <IoCloseOutline onClick={() => setIsOpenPhoneModal(false)} />
        </div>
      </div>
     
      <hr/>
      <div className="flex justify-end items-center pr-8 py-5 border w-full rounded-b">
              <div className="flex justify-center items-center mr-5 text-modalCloseTxt font-[600] cursor-pointer" onClick={()=>setIsOpenPhoneModal(false)}>
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

export default PhoneCallModal;
