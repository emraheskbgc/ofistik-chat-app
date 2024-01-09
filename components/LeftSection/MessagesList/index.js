
import React from 'react'
import Header from '../Header'
import Favourites from '../Favourites'
import DirectMessages from '../DirectMessages'
import Channels from '../Channels'


function MessagesList() {
 
  const config = {
    isCheckBox:true,
    isAvatar:true,
  }
 

  return (

 <div className='  md:w-[50%] lg:w-[25%] w-[100%] overflow-y-auto bg-messageBodyBg  max-h-screen '>
 <Header/>
 <Favourites/>
 <DirectMessages configAvatar={config.isAvatar} configCheck={config.isCheckBox}/>
 <Channels  configAvatar={config.isAvatar} configCheck={config.isCheckBox}/>
 </div>
 
  )
}

export default MessagesList