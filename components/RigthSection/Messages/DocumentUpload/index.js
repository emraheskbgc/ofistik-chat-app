"use client"
import React, { useRef, useState } from 'react';
import styles from "./styles.module.css";
import { MdCloudUpload } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import useClickOutside from '@/hook/useClickOutside';


function DocumentUpload({ documentOpenModal, setIsDocumentModal, onSendClick }) {
  const docRef= useRef();
  useClickOutside(docRef, () => {
    setIsDocumentModal(false)
  })

  const [uploadedFile, setUploadedFile] = useState(null);
  const [blobUrl, setBlobUrl]= useState(null)

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

      // Dosyayı gönderme işlemini gerçekleştiren fonksiyon
  const handleSendClick = () => {
    if (uploadedFile) {
      onSendClick(uploadedFile,blobUrl); // Gönderme işlemini gerçekleştir
      setUploadedFile(null); // Dosyayı temizle
      setIsDocumentModal(false)
    }
  };
  return (
    <>
      {documentOpenModal && (
        <div   className="fixed z-50 left-0 top-0 bg-modalOutBg bg-opacity-50 w-screen h-screen justify-center items-center flex">
          <div ref={docRef} className="bg-modalBg rounded-t p-2 rounded-b shadow-md md:w-[500px] w-[300px] flex flex-col justify-center items-center">
            <div onClick={() => setIsDocumentModal(false)} className="flex cursor-pointer justify-end mb-2 font-semibold w-full pr-5">
              X
            </div>
            <div className={styles.wrapper}>
              <div className={styles.box}>
                <div className={styles.inputBox}>
                  <h2 className={styles.uploadAreatitle}>Upload File</h2>
                  <form>
                    {/* Dosya seçme inputu */}
                    <input type="file" id="upload" accept=".doc, .docx,.pdf" hidden onChange={handleFileChange} />
                    <label htmlFor="upload" className={styles.uploadLabel}>
                      <MdCloudUpload className={styles.uploadIcon} />
                      <p className={styles.text}>Click to upload</p>
                    </label>
                  </form>
                </div>
                <div id='filewrapper'>
                  <h3 className={styles.uploaded}> Uploaded Document</h3>
                  {/* Seçilen dosyanın bilgilerini gösterme */}
                  {uploadedFile && (
                    <div className={styles.showFileBox}>
                      <div className={styles.left}>
                        <span className={styles.fileType}>{uploadedFile.type.split('/')[1].toUpperCase()}</span>
                        <h3 className={styles.leftText}>{uploadedFile.name}</h3>
                      </div>
                      <div className={styles.right}>
                        <span className={styles.rightSpan} onClick={() => setUploadedFile(null)}>×</span>
                        <div
                        className="border p-1 cursor-pointer bg-modalSendBtn text-modalSendTxt rounded ml-2"
                        onClick={handleSendClick}
                    
                      >
                        <IoSend />
                      </div>
                      </div>
                    </div>
                  )}
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
