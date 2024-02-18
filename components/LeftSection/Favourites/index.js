import React from "react";
import { PiSpeakerSimpleXLight } from "react-icons/pi";
import { MdCheck } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

import { useContext } from "react";
import PhoneBookContext from "@/context/PhoneBookContext";

function Favourites({ filteredUser }) {
  const { handleUserSelect } = useContext(PhoneBookContext);

  return (
    <div className="mt-44">
      <h2 className="text-favTxt text-xs font-semibold mt-14 ml-10">
        FAVOURITES
      </h2>
      <div className=" mt-5">
        {filteredUser.slice(0, 5).map((person) => (
          <>
          <div
            key={person.id}
            onClick={() => handleUserSelect(person)}
            className="flex justify-between items-center hover:bg-inputbg pr-8 pl-10 py-3 cursor-pointer"
          >
            <div className="flex">
              <div className="relative">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-14 h-14 rounded-full"
                />
                <div className="absolute bg-dotBg w-3 h-3 rounded-full right-0 bottom-2 border border-[2px] border-inputbg"></div>
              </div>
              <div className="ml-5">
                <h2 className="text-ms text-favTxt font-semibold ">
                  {person.name}
                </h2>
                {person.messages.length > 0 && (
                  <div className="flex flex-col text-personMesTxt font-[400] ">
                    <span className="text-md ">
                      {person.messages[person.messages.length - 1].message}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex space-x-3">
              {person.unreadMessages > 0 && (
                <div className="w-5 h-5 bg-messageCountBg text-xs text-messageCountTxt font-bold flex items-center rounded-md p-3  justify-center">
                  <span>{person.unreadMessages}</span>
                </div>
              )}
              <div className="text-muted flex items-center space-x-2">
                {person.isMuted && (
                  <div className="text-muted">
                    <span>
                      <PiSpeakerSimpleXLight />
                    </span>
                  </div>
                )}
                <div>{person.messages[person.messages.length - 1].hour}</div>
                <div>
                  {person.sendMessage && (
                    <IoCheckmarkDoneSharp className="text-favTxt" />
                  )}
                  {person.unsendMessage && <MdCheck />}
                  {person.readMessage && <IoCheckmarkDoneSharp className="text-dotBg" />}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
          <div className="opacity-10 w-[90%] border border-messageBg" />
          </div>
          </>
          
        ))}
      </div>
    </div>
  );
}

export default Favourites;
