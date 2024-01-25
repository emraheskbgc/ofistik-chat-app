
import React from "react";
import styles from "./styles.module.css";
import users from "@/public/assets/data/users.json";


import { useContext } from "react";
import PhoneBookContext  from "@/context/PhoneBookContext"

function PhoneBook({ showAvatar, showCheckBox,filteredUsers }) {

  const {handleUserSelect} = useContext(PhoneBookContext)


  const usersToDisplay = filteredUsers || users;

  // kullanıcıları alfabetik sıralama
  const sortedUsers = usersToDisplay.sort((a, b) => a.name.localeCompare(b.name));

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
          <div
            className={`${styles.letterHeader} text-modalSendBtn flex justify-center items-center`}
          >
            {letter} <div className="w-[80%] ml-4 h-0 border"></div>{" "}
          </div>
          {groupedUsers[letter].map((user) => (
            <div onClick={()=>handleUserSelect(user)} key={user.id} className={styles.userItem}>
              {showAvatar && (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className={styles.avatar}
                />
              )}
              {showCheckBox && (
                <input
                  type="checkbox"
                  className="mr-3 accent-channelModalCheckBoxBg "
                />
              )}
              <span className="text-modalNameTxt font-[600] text-sm">
                {user.name}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PhoneBook;
