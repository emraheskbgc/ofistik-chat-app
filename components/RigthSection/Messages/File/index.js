import React, { useState, useRef } from "react";
import styles from "./styles.module.css";
import { MdCloudUpload } from "react-icons/md";
import { IoSend, IoAddCircle } from "react-icons/io5";
import useClickOutside from "@/hook/useClickOutside";

function File({ fileOpenModal, setFileOpenModal, onSendClick }) {
  const fileRef = useRef();
  useClickOutside(fileRef, () => {
    setFileOpenModal(false);
  });

  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");
  

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFiles([
      ...files,
      {
        name: selectedFile.name,
        type: selectedFile.type,
        data: URL.createObjectURL(selectedFile),
      },
    ]);
    
  };

  const handleSendClick = () => {
    const filesData = files.map((file) => file.data);
    const dataToSend = {
      message: message,
      files: filesData
    };
    onSendClick(dataToSend);
    setFileOpenModal(false);
    setFiles([]);
    setMessage("");
  };

  const removeFile = (indexToRemove) => {
    setFiles(files.filter((file, index) => index !== indexToRemove));
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
          
          >
            
            <div className="flex flex-wrap justify-center">
              {files.map((file, index) => (
                <div  key={index} className="m-1 relative">
                  <img
                    src={file.data}
                    width={100}
                    height={100}
                    alt={file.name}
                    className="w-20 h-20"
                  />
                  <button
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={() => removeFile(index)}
                  >
                    sil
                  </button>
                </div>
              ))}
            </div>
            {files.length === 0 && (
              <>
                <MdCloudUpload color="#005246" size={60} />
                <p className="text-messageBg">Fotoğraf seçiniz..</p>
                <p className="opacity-30 text-xs">(Fotoğraf seçmek için artı butonuna basınız)</p>
              </>
            )}
          </form>

          <section className="flex w-full space-x-2 mx-2 my-2 justify-between items-center px-5 py-4 rounded-sm bg-inputbg text-messageBg">
            <div className="w-full">
              <input
                placeholder="Mesaj yazınız..."
                type="text"
                className="w-full bg-messageBodyBg text-sm py-2 px-3 rounded-3xl"
                value={message}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center">
              <div
                className="p-1 cursor-pointer bg-modalSendBtn text-modalSendTxt rounded mr-2"
                onClick={handleSendClick}
              >
                <IoSend />
              </div>
              <label
                htmlFor="file-upload"
                className="p-1 cursor-pointer bg-modalSendBtn text-modalSendTxt rounded"
              >
                <IoAddCircle />
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default File;
