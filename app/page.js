
"use client"
import MessagesList from "@/components/LeftSection/MessagesList";
import Chat from "@/components/RigthSection/Chat";
import { ChakraProvider } from "@chakra-ui/react";
import PhoneBookContext from "../context/PhoneBookContext"
import { useState } from "react";


export default function Home() {
  const [selectedUser, setSelectedUser] = useState(
{    id: 1,
    name: "Ahmet",
    avatar: "/assets/images/avatar.jpeg ",
    messages: ["Merhaba Ahmet!", "Nasılsın?", "İyi misin?"],
    unreadMessages:18,
    stuation:"online"}
  );
  const showAvatar = true;
  const showCheckBox = true;
    const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const data = {
    showCheckBox,
    showAvatar,
    selectedUser,
    handleUserSelect
  }


  console.log(selectedUser);

  return (
    <PhoneBookContext.Provider value={data}>
    
      <ChakraProvider>
      <div className="flex">
        <MessagesList selectedUser={selectedUser} />
        <Chat selectedUser={selectedUser} />
    
    </div>
    </ChakraProvider>
  
    </PhoneBookContext.Provider>
  
  )
}
