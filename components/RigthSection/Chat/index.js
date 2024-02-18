"use client"
import React,{useState} from 'react'
import ChatHeader from '../ChatHeader'
import Messages from '../Messages'
import Info from '../ChatHeader/Info'

function Chat({selectedUser}) {

 
  return (
    <div className={`md:w-[75%] w-full  ${selectedUser ? "" : "md:block hidden"} bg-messageBodyBg`}>
    <ChatHeader />
    <Messages/>
    </div>
  )
}

export default Chat