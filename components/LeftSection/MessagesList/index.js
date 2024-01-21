
import React,{useState} from 'react'
import Header from '../Header'
import Favourites from '../Favourites'
import DirectMessages from '../DirectMessages'
import Channels from '../Channels'
import users from "@/public/assets/data/users.json"
import channels from "@/public/assets/data/channels.json"

function MessagesList({selectedUser}) {
 
  const [searchQuery, setSearchQuery] = useState('');
  

  const handleSearch = (query) => {
    setSearchQuery(query);
  };



  const filteredUser = users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredChannels = channels.filter((channel) => channel.name.toLowerCase().includes(searchQuery.toLowerCase()))



  return (

 <div className={`md:w-[50%] lg:w-[25%] w-[100%]  overflow-y-auto bg-messageBodyBg  max-h-screen ${selectedUser && "md:block hidden" }`}>
 <Header onSearch={handleSearch}/>
 <Favourites filteredUser={filteredUser}/>
 <DirectMessages filteredUser={filteredUser} />
 <Channels filteredChannels={filteredChannels} />
 </div>
 
  )
}

export default MessagesList