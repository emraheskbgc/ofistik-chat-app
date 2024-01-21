"use client"
import React,{useState} from 'react'
import ChatHeader from '../ChatHeader'
import Messages from '../Messages'
import Info from '../ChatHeader/Info'

function Chat() {

 
  return (
    <div className='md:w-[50%] lg:w-[25%] w-[100%] border border-blue-500 '>
    <ChatHeader />
    <Messages/>
    </div>
  )
}

export default Chat