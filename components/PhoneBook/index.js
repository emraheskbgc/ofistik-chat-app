import React from 'react'
import styles from "./styles.module.css";

function PhoneBook({configCheck, configAvatar}) {

    const users = [
        { id: 1, name: "Ahmet", avatar: "/assets/images/avatar.jpeg " },
        { id: 2, name: "Ayşe", avatar: "/assets/images/avatar2.jpeg" },
        { id: 3, name: "Berk", avatar: "/assets/images/avatar.jpeg " },
        { id: 4, name: "Buse", avatar: "/assets/images/icon.jpeg" },
        { id: 5, name: "Emrah", avatar: "/assets/images/emrah.jpg " },
        { id: 6, name: "Zeliha", avatar: "/assets/images/avatar2.jpeg" },
        { id: 7, name: "Osman", avatar: "/assets/images/avatar.jpeg" },
        // ... diğer kullanıcılar
      ];
      // kullanıcıları alfabetik sıralama
      const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
    
      //alfabetik sıralamaya göre kullanıcıları harf başlıklarıyla gruplayalım:
    
      const groupedUsers = {};
    
      sortedUsers.forEach((user) => {
        const firstLetter = user.name.charAt(0).toUpperCase();
        if (!groupedUsers[firstLetter]) {
          groupedUsers[firstLetter] = [];
        }
        groupedUsers[firstLetter].push(user);
      });
    
  return (
    <div>
    {Object.keys(groupedUsers).map((letter) => (
        <div key={letter}>
          <div className={`${styles.letterHeader} text-modalSendBtn flex justify-center items-center` }>{letter} <div className="w-[80%] ml-4 h-0 border"></div> </div>
          {groupedUsers[letter].map((user) => (
            <div key={user.id} className={styles.userItem}>
           {
            configCheck &&  <input type="checkbox" className='mr-3 accent-channelModalCheckBoxBg ' />
           }
             {
              
              configAvatar &&  <img
              src={user.avatar}
              alt={user.name}
              className={styles.avatar}
            />
             }
              <span className= "text-modalNameTxt font-[600] text-sm">{user.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default PhoneBook