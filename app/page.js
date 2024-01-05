import MessagesList from "@/components/LeftSection/MessagesList";
import Chat from "@/components/RigthSection/Chat";
import { ChakraProvider } from "@chakra-ui/react";


export default function Home() {
  return (
    <ChakraProvider>
     <div className="flex">
    <MessagesList/>
    <Chat/>
   </div>
    </ChakraProvider>
  
  )
}
