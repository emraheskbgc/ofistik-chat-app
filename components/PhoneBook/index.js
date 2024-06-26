import React, { useState } from "react";
import styles from "./styles.module.css";
import users from "@/public/assets/data/users.json";

import { useContext } from "react";
import PhoneBookContext from "@/context/PhoneBookContext";

function PhoneBook({
  showAvatar,
  showCheckBox,
  filteredUsers,
  setIsOpenModal,
  setUserBg
}) {
  const { handleUserSelect } = useContext(PhoneBookContext);

  const handleSelectPerson = (person) => {
   
    handleUserSelect(person);
    setIsOpenModal(false);
  };

  
  const handleToggleSelect = (person) => {
    setUserBg((prevSelectedUsers) => {
      const isSelected = prevSelectedUsers.includes(person);
      return isSelected
        ? prevSelectedUsers.filter((user) => user !== person)
        : [...prevSelectedUsers, person];
    });
    person.isSelected = !person.isSelected
  };

  const usersToDisplay = filteredUsers || users;

  // kullanıcıları alfabetik sıralama
  const sortedUsers = usersToDisplay.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

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
            className={`${styles.letterHeader} text-premiumOrange flex justify-center items-center`}
          >
            {letter} <div className="w-[80%] ml-4 h-0 opacity-15 border"></div>
          </div>
          {groupedUsers[letter].map((user) => (
            <div key={user.id} className={styles.userItem}>
              {showAvatar && (
                <div
                  className="flex items-center"
                  onClick={() => handleSelectPerson(user)}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className={styles.avatar}
                  />
                  <span className=" hover:text-premiumOrange font-[600] text-sm">
                    {user.name}
                  </span>
                </div>
              )}
              {showCheckBox && (
                <div className="flex pb-1 items-center space-x-2" onClick={() => handleToggleSelect(user)}>
                <div className={`${styles.checkbox} ${user.isSelected ? "bg-premiumOrange" : ''} `}></div>
                <div
                  className="flex items-center"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className={styles.avatar}
                  />
                  <span className=" hover:text-premiumOrange font-[600] text-sm">
                    {user.name}
                  </span>
                </div>
                </div>
               
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PhoneBook;
