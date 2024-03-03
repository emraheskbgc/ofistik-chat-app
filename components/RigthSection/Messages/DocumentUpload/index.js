"use client"
import React, { useRef, useState } from 'react';
import styles from "./styles.module.css";
import { MdCloudUpload } from "react-icons/md";
import { IoSend, IoAddCircle } from "react-icons/io5"; // Ekledim: IoAddCircle


import useClickOutside from '@/hook/useClickOutside';


function DocumentUpload({ documentOpenModal, setIsDocumentModal, onSendClick }) {
  const docRef= useRef();
  useClickOutside(docRef, () => {
    setIsDocumentModal(false)
  })

  const [uploadedFile, setUploadedFile] = useState(null);
  const [blobUrl, setBlobUrl]= useState(null)
  const [message, setMessage] = useState("");

  // Dosya seçildiğinde çağrılacak olan fonksiyon
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]; // Seçilen dosyayı al
    if (selectedFile) {
      const fileExtension = selectedFile.name.split('.').pop(); // Dosya uzantısını al
      if (fileExtension === 'doc' || fileExtension === 'docx' || fileExtension === 'pdf') {
        setUploadedFile(selectedFile); // Seçilen dosyayı state'e ata
  
        // Blob URL oluştur
        const blobUrl = URL.createObjectURL(selectedFile);
        // Blob URL'yi kullanabilirsiniz (örneğin: önizleme, dosyayı gösterme vb.)
        setBlobUrl(blobUrl)
      } else {
        alert('Lütfen .doc, .docx veya .pdf uzantılı bir dosya seçin.');
      }
    }
  };

  const handleMessageChange = (event) => { // Yeni: Mesaj değişikliğini izleyen fonksiyon
    setMessage(event.target.value);
  };
      // Dosyayı gönderme işlemini gerçekleştiren fonksiyon
  const handleSendClick = () => {
    if (uploadedFile) {
      onSendClick(uploadedFile,blobUrl,message); // Gönderme işlemini gerçekleştir
      setUploadedFile(null); // Dosyayı temizle
      setIsDocumentModal(false)
    }
  };
  return (
    <>
      {documentOpenModal && (
        <div   className="fixed z-50 left-0 top-0 bg-modalOutBg bg-opacity-50 w-screen h-screen justify-center items-center flex">
          <div ref={docRef} className="bg-inputbg rounded-t p-2 rounded-b shadow-md md:w-[500px] w-[300px] flex flex-col justify-center items-center">
            <div onClick={() => setIsDocumentModal(false)} className="flex text-messageBg cursor-pointer justify-end mb-2 font-semibold w-full pr-5">
              X
            </div>
            <div className={styles.wrapper}>
              <div className={styles.box}>
                <div className={styles.inputBox}>
                  
                  <form>
                    {/* Dosya seçme inputu */}
                    <input type="file" id="upload" accept=".doc, .docx,.pdf" hidden onChange={handleFileChange} />
                    <label htmlFor="upload" className={styles.uploadLabel}>
                      <MdCloudUpload className={styles.uploadIcon} />
                      <p className="text-messageBg">Dosya Seç</p>
                    </label>
                  </form>
                </div>
                <div id='filewrapper'>
                  <h3 className={styles.uploaded}> Seçilen Dosyalar</h3>
                  {/* Seçilen dosyanın bilgilerini gösterme */}
                  {uploadedFile && (
                    <div className={styles.showFileBox}>
                      <div className={styles.left}>
                       
                        <h3 className={styles.leftText}>{uploadedFile.name}</h3>
                      </div>
                      <div className={styles.right}>
                        <span className={styles.rightSpan} onClick={() => setUploadedFile(null)}>×</span>
                        
                      </div>
                    </div>
                  )}
                  <section className="flex w-full space-x-2 mx-2 my-2 justify-between items-center px-5 py-4 rounded-sm bg-inputbg text-messageBg">
                  <div className="w-full">
                    <input
                      placeholder="Mesaj yazınız..."
                      type="text"
                      className="w-full bg-messageBodyBg text-sm py-2 px-3 rounded-3xl"
                      onChange={handleMessageChange}
                      value={message}
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
                      htmlFor="upload"
                      className="p-1 cursor-pointer bg-modalSendBtn text-modalSendTxt rounded"
                    >
                      <IoAddCircle />
                    </label>
                    <input
                      id="upload"
                      type="file"
                      accept=" .pdf"
                      className="hidden"
                    />
                  </div>
                </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DocumentUpload;
