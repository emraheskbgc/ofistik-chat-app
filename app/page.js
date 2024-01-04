import MessagesList from "@/components/LeftSection/MessagesList";
import Chat from "@/components/RigthSection/Chat";


export default function Home() {
  return (
   <div className="flex">
    <MessagesList/>
    <Chat/>
   </div>
  )
}
