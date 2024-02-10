import React from 'react'
import { PiSpeakerSimpleXLight } from "react-icons/pi";


import { useContext } from "react";
import PhoneBookContext  from "@/context/PhoneBookContext"

function Favourites({ filteredUser }) {

    const {handleUserSelect} = useContext(PhoneBookContext)


   console.log(filteredUser);

 
  
  return (
    <div className='mt-44'>
        <h2 className='text-favTxt text-xs font-semibold mt-14 ml-10'>FAVOURITES</h2>
        <div className=' mt-5'>
        {
          filteredUser.slice(0,5).map((person) => (
                <div key={person.id} onClick={()=> handleUserSelect(person)} className='flex justify-between items-center hover:bg-personBg pr-8 pl-10 py-3 cursor-pointer' >
                    <div className='flex'>
                    <div className='relative'>
                        <img src={person.avatar} alt={person.name} className='w-10 h-10 rounded-full' />
                       {
                        person.stuation === "online" &&  <div className='absolute bg-dotBg w-3 h-3 rounded-full right-0 bottom-2 border border-[2px] border-inputbg'></div>
                       }
                    </div>
                    <div className='ml-3'>
                        <h2 className='text-ms font-semibold '>{person.name}</h2>
                        { person.messages.length > 0 && (
                            <div className='flex flex-col text-personMesTxt font-[400] text-sm '>
                            <span>
                                {person.messages[person.messages.length - 1].message}
                            </span>
                            <span>
                                {person.messages[person.messages.length - 1].time}
                            </span>
                            </div>
                        )}
                    </div>
                    </div>
                    <div className='flex space-x-3'>
                     {person.unreadMessages > 0 &&
                    <div className='w-5 h-5 bg-messageCountBg text-xs text-messageCountTxt font-bold flex items-center rounded-md p-3  justify-center'>
                        <span>{person.unreadMessages}</span>
                        
                    </div>
                    }
                        {person.isMuted &&
                        <div>
                            <span><PiSpeakerSimpleXLight /></span>
                        </div>}
                    
                    </div>
                   
                    
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Favourites