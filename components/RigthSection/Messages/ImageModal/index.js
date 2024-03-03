import React from 'react'
import { IoMdDownload } from "react-icons/io";
import styles from "./styles.module.css"


function ImageModal({ imageUrl, onClose }) {
  return (
    <div className="fixed z-50 left-0 top-0 bg-modalOutBg bg-opacity-50 w-screen h-screen flex justify-center items-center" onClick={onClose}>
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-messageBodyBg bg-opacity-50 p-6 rounded-lg relative">
        <img src={imageUrl} alt="Modal" className="w-96 h-96" />
        <span
          className={styles.closeImage}
          onClick={onClose}
        >
          X
        </span>
        <a
        href={imageUrl}
        download="image"
        className={styles.downloadLink}
      >
        <IoMdDownload />
      </a>
      </div>
    </div>
  </div>
  )
}

export default ImageModal