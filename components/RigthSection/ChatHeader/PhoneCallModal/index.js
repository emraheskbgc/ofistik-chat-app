
import React,{useRef} from "react";
import { HiVideoCamera } from "react-icons/hi2";
import { HiVolumeUp } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa6";
import { ImPhoneHangUp } from "react-icons/im";
import { LuMessagesSquare } from "react-icons/lu";
import { AiOutlineAudioMuted } from "react-icons/ai";

import useClickOutside from "@/hook/useClickOutside";


function PhoneCallModal({ isOpenPhoneModal, setIsOpenPhoneModal, selectedUser }) {

  const phoneRef = useRef()
  useClickOutside (phoneRef, ()=> {
    setIsOpenPhoneModal(false)
  })

  return (
    <>
      <div
        className={`fixed z-50  left-0 top-0 bg-modalOutBg bg-opacity-50 w-screen h-screen   justify-center items-center ${
          isOpenPhoneModal ? "flex" : "hidden"
        }`}
      >
        <div ref={phoneRef} className="bg-modalBg rounded-t rounded-b shadow-md w-[35%] flex flex-col">
          <div className="flex justify-center items-center">
            <img
            src={selectedUser.avatar}
            alt={selectedUser.name}
            className="rounded-full w-20 m-4 h-20"
            />
          </div>
          <div className="flex-col justify-center text-center">
            <div className="text-xl font-semibold">{selectedUser.name}</div>
            <div className="text-md opacity-50">05:45</div>
          </div>
          <div className="relative">
            <div className="flex justify-center items-center mt-3 space-x-4 ">
              <div className=" bg-phoneModalCameraBg rounded-full text-phoneModalCameraTxt text-xl p-3 ">
                <HiVideoCamera />
              </div>
              <div className=" bg-phoneModalVolBg rounded-full text-phoneModalVolTxt text-xl p-3 ">
                <HiVolumeUp />
              </div>
              <div className=" bg-phoneModalUserBg rounded-full text-phoneModalUserTxt text-xl p-3 ">
                <FaUserPlus />
              </div>
            </div>
            <div className="absolute left-[43%] top-24 bg-phoneModalhangbg hover:bg-phoneModalhangHoverbg cursor-pointer text-phoneModalhangTxt w-20 h-20 text-2xl flex justify-center items-center rounded-full border border-solid border-[5px] border-phoneModalhangTxt">
            <ImPhoneHangUp onClick={()=> setIsOpenPhoneModal(false)} />
            </div>
          </div>
          <div className="bg-dotBg px-5 mt-20  py-8  flex justify-between">
            <div className="bg-phoneModalMsBg p-2 text-phoneModalhangTxt duration-500 cursor-pointer hover:bg-phoneModalhangTxt hover:text-phoneModalMsHoverBg text-2xl rounded-lg">
            <LuMessagesSquare/>
            </div>
            <div className="bg-phoneModalMsBg p-2 text-phoneModalhangTxt duration-500 cursor-pointer hover:bg-phoneModalhangTxt hover:text-phoneModalMsHoverBg text-2xl rounded-lg">
            <AiOutlineAudioMuted/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneCallModal;
