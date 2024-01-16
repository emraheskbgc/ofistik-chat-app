import React from "react";
import { HiOutlineVideoCameraSlash } from "react-icons/hi2";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { ImPhoneHangUp } from "react-icons/im";
import { BsVolumeUpFill } from "react-icons/bs";
import { LuRefreshCcw } from "react-icons/lu";



function VideoCallModal({ isOpenVideoCallModal, setIsOpenVideoCallModal }) {
  return (
    <>
      <div
        className={`fixed z-50  left-0 top-0 bg-modalOutBg bg-opacity-50 w-screen h-screen   justify-center items-center ${
          isOpenVideoCallModal ? "flex" : "hidden"
        }`}
      >
        <div className="rounded-t rounded-b shadow-md  flex flex-col ">
          <div
            className="bg-cover relative bg-center h-[500px] w-[500px]  "
            style={{ backgroundImage: "url('/assets/images/avatar.jpeg')" }}
          >
          <div className="text-plusTxt  font-semibold flex-col justify-center text-center p-3">
                <div className="text-xl"> Emrah eskibağcı</div>
                <div className="bg-plusTxt bg-opacity-50 w-12 rounded-md text-sm ml-[45%] mt-3 ">
                <div >05:47</div>
                </div>
          </div>
            <div className="relative">
              <div className="absolute left-[43%] top-64 z-50 bg-phoneModalhangbg hover:bg-phoneModalhangHoverbg cursor-pointer text-phoneModalhangTxt w-20 h-20 text-2xl flex justify-center items-center rounded-full border border-solid border-[5px] border-phoneModalhangTxt">
                <ImPhoneHangUp onClick={() => setIsOpenVideoCallModal(false)} />
              </div>
            </div>
            <div className="relative h-72 ">
            
            <div className="absolute  bottom-0 right-4 bg-messageBg h-20 w-20 rounded"></div>
            </div>
            <div className="bg-dotBg px-5 absolute bottom-0  py-10 w-full flex justify-evenly">
            <div className="flex">
               <div className="bg-phoneModalMsBg p-2 text-phoneModalhangTxt duration-500 cursor-pointer hover:bg-phoneModalhangTxt hover:text-phoneModalMsHoverBg text-2xl rounded-full">
              <AiOutlineAudioMuted />
              
              </div>
              <div className="bg-phoneModalMsBg p-2 ml-5 text-phoneModalhangTxt duration-500 cursor-pointer hover:bg-phoneModalhangTxt hover:text-phoneModalMsHoverBg text-2xl rounded-full">
              <HiOutlineVideoCameraSlash/>
              </div>
            </div>
            <div className="flex">
               <div className="bg-phoneModalMsBg p-2 text-phoneModalhangTxt duration-500 cursor-pointer hover:bg-phoneModalhangTxt hover:text-phoneModalMsHoverBg text-2xl rounded-full">
              <BsVolumeUpFill />
              
              </div>
              <div className="bg-phoneModalMsBg p-2 ml-5 text-phoneModalhangTxt duration-500 cursor-pointer hover:bg-phoneModalhangTxt hover:text-phoneModalMsHoverBg text-2xl rounded-full">
              <LuRefreshCcw/>
              </div>
            </div>

           
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCallModal;
