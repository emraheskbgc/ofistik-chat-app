
import React from "react";
import { useContext } from "react";
import PhoneBookContext  from "@/context/PhoneBookContext"
import { PiSpeakerSimpleXLight } from "react-icons/pi";


function DirectMessages({filteredUser}) {

  const {handleUserSelect} = useContext(PhoneBookContext)
 

  


  return (
    <div>
      <div className="flex justify-between items-center  pr-7 ">
        <div>
          {" "}
          <h2 className="text-favTxt text-xs font-semibold mt-14 ml-10">
            DIRECT MESSAGE
          </h2>
        </div>
       
        
        
      </div>
      <div className=" mt-5">
        {filteredUser.slice(0,5).map((person) => (
          <div
            key={person.id}
            className="flex justify-between items-center hover:bg-personBg pr-8 pl-10 py-3 cursor-pointer"
            onClick={()=>handleUserSelect(person)}
          >
            <div className="flex">
              <div className="relative">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="absolute bg-dotBg w-3 h-3 rounded-full right-0 bottom-2 border border-[2px] border-inputbg"></div>
              </div>
              <div className="ml-3">
                <h2 className="text-ms font-semibold ">{person.name}</h2>
              </div>
            </div>
            {person.unreadMessage && (
              <div className="w-5 h-5 bg-messageCountBg text-xs text-messageCountTxt font-bold flex items-center rounded-md p-3  justify-center">
                <span>{person.unreadMessage}</span>
              </div>
            )}
            {person.isMuted &&
              <div>
                  <span><PiSpeakerSimpleXLight /></span>
              </div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DirectMessages;
