
import React,{useState} from 'react'
import Header from '../Header'
import Favourites from '../Favourites'
import DirectMessages from '../DirectMessages'
import Channels from '../Channels'
import styles from "./styles.module.css"
import channels from "@/public/assets/data/channels.json"
import { useContext } from "react";
import PhoneBookContext  from "@/context/PhoneBookContext"

function MessagesList({selectedUser}) {
 
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('inbox'); // Yeni state
  const {users} = useContext(PhoneBookContext)
  

  

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const filteredUser = users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()));



  return (

 <div className={`${styles.scrollStyle} md:w-[50%] lg:w-[50%] xl:w-[25%] w-[100%]  overflow-y-auto bg-messageBodyBg  min-h-[100vh] pb-10 max-h-[120vh] ${selectedUser && "md:block hidden" }`}>
 <Header onSearch={handleSearch} onFilterChange={handleFilterChange}/>
 <DirectMessages filteredUser={filteredUser} filterType={filterType} />
 {/*<Channels filteredChannels={filteredChannels} />*/}
 </div>
 
  )
}

export default MessagesList