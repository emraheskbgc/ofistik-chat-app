"use client"
import React,{useState} from 'react'
import ChatHeader from '../ChatHeader'
import Messages from '../Messages'
import Info from '../ChatHeader/Info'

function Chat() {

 
  return (
    <div className='md:w-[75%] hidden md:block  border border-blue-500 '>
    <ChatHeader />
    <Messages/>
   
    </div>
  )
}

export default Chat