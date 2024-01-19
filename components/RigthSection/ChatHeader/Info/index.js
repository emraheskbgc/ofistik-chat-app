import React from 'react'

function Info({isInfoPanelOpen,setIsInfoPanelOpen}) {
  return (
    <>
    <div
      className={`fixed z-50  left-0 top-0 bg-modalOutBg bg-opacity-50 w-screen h-screen   justify-center items-center ${
        isInfoPanelOpen ? "flex" : "hidden"
      }`}
    >
      <div className="rounded-t rounded-b shadow-md  flex flex-col ">
        <div
          className="bg-cover relative bg-center h-[500px] w-[800px]  "
          style={{ backgroundImage: "url('/assets/images/avatar.jpeg')" }}
        >
        <div className="text-plusTxt  font-semibold flex-col justify-center text-center p-3">
              <div className="text-xl"> Emrah eskibağcı</div>
              <div className="bg-plusTxt bg-opacity-50 w-12 rounded-md text-sm ml-[45%] mt-3 ">
              <div >05:47</div>
              </div>
        </div>
         
        </div>
      </div>
    </div>
  </>
  )
}

export default Info