import React, { useRef } from 'react';
import { MdAttachment } from "react-icons/md";
import { GrGallery } from "react-icons/gr";

import useClickOutside from '@/hook/useClickOutside';
import styles from "./styles.module.css"

function MoreItems({ showMoreMenu, setShowMoreMenu, handleFileClick, handleDocumentClick }) {
  const moreRef = useRef();
  useClickOutside(moreRef, () => {
    setShowMoreMenu(false);
  });

  return (
    <div ref={moreRef} className={` ${styles.animate} z-10 rounded-md flex flex-col items-center absolute md:left-[-40px] left-[-12px]  top-[-205px] border p-5 bg-inputMoreBg md:w-[25%] w-[40%]  `}>
      <div className="flex flex-col items-center cursor-pointer">
        <div className="bg-inputMoreIconBg text-inputMoreIcon rounded-full p-3 text-xl">
          <GrGallery onClick={handleFileClick} />
        </div>
        <p className="uppercase text-sm font-[600] mt-2">Gallery</p>
      </div>
      

      <div className="flex flex-col items-center cursor-pointer mt-4 ">
        <div className="bg-inputMoreIconBg text-inputMoreIcon rounded-full p-3 text-xl">
          <MdAttachment onClick={handleDocumentClick} />
        </div>
        <p className="uppercase text-sm font-[600] mt-2">Document</p>
      </div>
    </div>
  );
}

export default MoreItems;
