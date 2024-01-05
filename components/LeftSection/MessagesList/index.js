import React from 'react'
import Header from '../Header'
import Favourites from '../Favourites'
import DirectMessages from '../DirectMessages'
import Channels from '../Channels'


function MessagesList() {
 


  return (
    <div  className='md:w-[50%] lg:w-[25%] w-[100%] bg-messageBodyBg overflow-y-auto  max-h-screen '>
    <Header/>
    <Favourites/>
    <DirectMessages/>
    <Channels/>
    </div>
  )
}

export default MessagesList