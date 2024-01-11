
"use client"
import MessagesList from "@/components/LeftSection/MessagesList";
import Chat from "@/components/RigthSection/Chat";
import { ChakraProvider } from "@chakra-ui/react";
import PhoneBookContext from "../context/PhoneBookContext"
import { useState } from "react";


export default function Home() {
  const showAvatar = true;
  const showCheckBox = true;
  const data = {
    showCheckBox,
    showAvatar,
  }
  return (
    <PhoneBookContext.Provider value={data}>
    
      <ChakraProvider>
     <div className="flex">
    <MessagesList />
    <Chat/>
   </div>
    </ChakraProvider>
  
    </PhoneBookContext.Provider>
  
  )
}
