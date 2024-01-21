"use client"
import React,{useState} from 'react'
import ChatHeader from '../ChatHeader'
import Messages from '../Messages'
import Info from '../ChatHeader/Info'

function Chat({selectedUser}) {

 
  return (
    <div className={`md:w-[75%] w-full border border-blue-500 ${selectedUser ? "" : "md:block hidden"}`}>
    <ChatHeader />
    <Messages/>
    </div>
  )
}

export default Chat