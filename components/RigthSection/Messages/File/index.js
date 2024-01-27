import React, { useState } from "react";
import styles from "./styles.module.css";

import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { IoSend } from "react-icons/io5";


function File({ fileOpenModal }) {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  return (
    <>
      <div
        className={`fixed z-50  left-0 top-0 bg-modalOutBg bg-opacity-50 w-screen h-screen   justify-center items-center ${
          fileOpenModal ? "flex" : "hidden"
        }`}
      >
        <div className="bg-modalBg rounded-t rounded-b shadow-md md:w-[500px] w-[300px] flex flex-col">
          <form
            className={`${styles.form} md:w-[500px] w-[300px] `}
            onClick={() => document.querySelector(".input-field").click()}
          >
            <input
              type="file"
              accept="image/*"
              className="input-field"
              hidden
              onChange={({ target: { files } }) => {
                files[0] && setFileName(files[0].name);
                if (files) {
                  setImage(URL.createObjectURL(files[0]));
                }
              }}
            />
            {image ? (
              <img src={image} width={200} height={200} alt={fileName} />
            ) : (
              <>
                <MdCloudUpload color="#1475cf" size={60} />
                <p>Browse Files to upload</p>
              </>
            )}
          </form>

          <section className="flex mx-2 my-2 justify-between items-center px-5 py-4 rounded-sm bg-fileUploudBg">
            <AiFillFileImage color="#1475cf" />
            <span className="flex justify-center space-x-2 items-center" ><div>{fileName}</div> <div className="border p-1 cursor-pointer bg-fileUploudDlt rounded"><MdDelete className="  text-modalSendTxt  " onClick={() => {
                setFileName("No selected File")
                setImage(null)
            }} /> </div> <div className="border p-1 cursor-pointer bg-modalSendBtn text-modalSendTxt rounded">
            <IoSend />
             </div></span>
            
          </section>
        </div>
      </div>
    </>
  );
}

export default File;
