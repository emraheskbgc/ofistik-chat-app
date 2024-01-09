import React from 'react'

function Favourites() {
    const favoritePeople = [
        {
          id: 1,
          name: 'Emrah',
          message: 'Merhaba, nasılsın?',
          image: '/assets/images/emrah.jpg',
          unreadMessage:18,
          stuation:"online"
        },
        {
          id: 2,
          name: 'Ayşe',
          message: 'Günaydın!',
          image: '/assets/images/avatar.jpeg',
          stuation:"online"
        },
        {
          id: 3,
          name: 'Mehmet',
          message: 'Neredesin?',
          image: '/assets/images/avatar2.jpeg',
          stuation:"online"
        },
        {
          id: 4,
          name: 'Elif',
          message: 'Akşam ne yapıyoruz?',
          image: '/assets/images/icon.jpeg',
          stuation:"online"
        },
      ];
  return (
    <div className='mt-44'>
        <h2 className='text-favTxt text-xs font-semibold mt-14 ml-10'>FAVOURITES</h2>
        <div className=' mt-5'>
        {
            favoritePeople.map((person) => (
                <div key={person.id} className='flex justify-between items-center hover:bg-personBg pr-8 pl-10 py-3 cursor-pointer' >
                    <div className='flex'>
                    <div className='relative'>
                        <img src={person.image} alt={person.name} className='w-10 h-10 rounded-full' />
                       {
                        person.stuation === "online" &&  <div className='absolute bg-dotBg w-3 h-3 rounded-full right-0 bottom-2 border border-[2px] border-inputbg'></div>
                       }
                    </div>
                    <div className='ml-3'>
                        <h2 className='text-ms font-semibold '>{person.name}</h2>
                        <p className='text-personMesTxt font-[400]'>{person.message}</p>
                    </div>
                    </div>
                    {person.unreadMessage &&
                    <div className='w-5 h-5 bg-messageCountBg text-xs text-messageCountTxt font-bold flex items-center rounded-md p-3  justify-center'>
                        <span>{person.unreadMessage}</span>
                    </div>
                    }
                    
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Favourites