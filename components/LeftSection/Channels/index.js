"use client"
import React,{useState} from 'react'
import { FaPlus } from "react-icons/fa6";
import { Tooltip } from "@chakra-ui/react";
import ChannelsModal from './ChannelsModal';
function Channels() {
    const channels = [
        {
          id: 1,
          name: 'Emrah',
          members: 20,
          image: '/assets/images/emrah.jpg',
          unreadMessage:18,
        },
        {
          id: 2,
          name: 'Ayşe',
          members: 20,
          image: '/assets/images/avatar.jpeg',
        },
        {
          id: 3,
          name: 'Mehmet',
          members: 20,
          image: '/assets/images/avatar2.jpeg',
        },
        {
          id: 4,
          name: 'Elif',
          members: 20,
          image: '/assets/images/icon.jpeg',
        },
      ];

      const [isOpenModal, setIsOpenModal] = useState(false)

      const handleClickOpenModal = () => {
        setIsOpenModal(!isOpenModal)
      }
  return (
    <div>
       <div className='flex justify-between items-center  pr-7 '>
        <div> <h2 className='text-favTxt text-xs font-semibold mt-14 ml-10'>CHANNELS</h2></div>
        <Tooltip hasArrow label='Create group'  placement='top' fontSize='sm' >
        <div className="mt-14  p-2 bg-plusBtn text-plusTxt rounded-md cursor-pointer ">
          <FaPlus onClick={handleClickOpenModal}/>
          
        </div>
       
        </Tooltip>
        <ChannelsModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
       </div>
        <div className=' mt-5'>
        {
            channels.map((person) => (
                <div key={person.id} className='flex justify-between items-center hover:bg-personBg pr-8 pl-10 py-3 cursor-pointer' >
                    <div className='flex'>
                    <div>
                        <img src={person.image} alt={person.name} className='w-10 h-10 rounded-full' />
                      
                    </div>
                    <div className='ml-3'>
                        <h2 className='text-ms font-semibold '>{person.name}</h2>
                        <p className='text-personMesTxt font-[400]'>{person.members} Members</p>
                    </div>
                    </div>
                    {person.unreadMessage &&
                    <div className='w-5 h-5 bg-messageCountBg text-xs text-messageCountTxt font-bold flex items-center rounded-md p-3  justify-center'>
                        <span>{person.unreadMessage}</span>
                    </div>
                    }
                    
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Channels