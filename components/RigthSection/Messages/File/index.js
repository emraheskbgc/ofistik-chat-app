import React, { useState, useRef } from "react";
import styles from "./styles.module.css";
import { MdCloudUpload } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import useClickOutside from "@/hook/useClickOutside";

function File({ fileOpenModal, setFileOpenModal, onSendClick }) {
  const fileRef = useRef();
  useClickOutside(fileRef, () => {
    setFileOpenModal(false);
  });

  const [file, setFile] = useState(null);

  const handleSendClick = () => {
    onSendClick(file.data);
    setFileOpenModal(false); // Gönderildikten sonra modal'ı kapat
    setFile(null);
  };
  return (
    <>
      <div
        className={`fixed z-50 left-0 top-0 bg-modalOutBg bg-opacity-50 w-screen h-screen justify-center items-center ${
          fileOpenModal ? "flex" : "hidden"
        }`}
      >
        <div
          ref={fileRef}
          className="bg-inputbg rounded-t p-2 rounded-b shadow-md md:w-[500px] w-[300px] flex flex-col justify-center items-center"
        >
          <div
            onClick={() => setFileOpenModal(false)}
            className="flex cursor-pointer justify-end mb-2 font-semibold w-full pr-5 text-messageBg"
          >
            X
          </div>
          <form
            className={`${styles.form} md:w-[450px] w-[300px]  `}
            onClick={() => document.querySelector(".input-field").click()}
          >
            <input
              type="file"
              accept="image/*"
              className="input-field"
              hidden
              onChange={({ target: { files } }) => {
                if (files && files.length > 0) {
                  const selectedFile = files[0];
                  setFile({
                    name: selectedFile.name,
                    type: selectedFile.type,
                    data: URL.createObjectURL(selectedFile),
                  });
                }
              }}
            />
            {file ? (
              <>
               
                  <img src={file.data} width={200} height={200} alt={file.name} />
               
              </>
            ) : (
              <>
                <MdCloudUpload color="#005246" size={60} />
                <p className="text-messageBg">click to choose image</p>
              </>
            )}
          </form>

          <section className="flex w-full space-x-2 mx-2 my-2 justify-between items-center px-5 py-4 rounded-sm bg-inputbg text-messageBg">
              
              <div className="w-full">
                <input  placeholder="enter message" type="text" className="w-full bg-messageBodyBg text-sm py-2 px-3 rounded-3xl"  />
              </div>
           
            
              <div
                className=" p-1 cursor-pointer bg-modalSendBtn text-modalSendTxt rounded"
                onClick={handleSendClick}
              >
                <IoSend />
              </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default File;
