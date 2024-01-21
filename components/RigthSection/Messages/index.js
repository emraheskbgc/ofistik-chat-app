"use client";
import { useState, useEffect,useRef } from "react";
import styles from "./styles.module.css";
import Input from "./Input";

import { useContext } from "react";
import PhoneBookContext  from "@/context/PhoneBookContext"

function Messages() {

  const {selectedUser} = useContext(PhoneBookContext)

  const [messages, setMessages] = useState([]); // Mesajların listesi
  const [inputValue, setInputValue] = useState(""); // Girişteki değer

  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  useEffect(() => {
    // Örnek mesajları başlangıçta yükleyelim
    setMessages([
      {
        text: "Merhaba e",
        sender: "Emrah",
        avatar: "/assets/images/emrah.jpg",
      },
      { text: "Nasılsın?", sender: "me" },
      {
        text: "İyiyim, teşekkürler e.",
        sender: "Emrah",
        avatar: "/assets/images/emrah.jpg",
      },
      {
        text: "Sen nasılsın? e",
        sender: "Emrah",
        avatar: "/assets/images/emrah.jpg",
      },
      { text: "Ben de iyiyim, teşekkürler.", sender: "me" },
      {
        text: "Ben de iyiyim e, teşekkürler.",
        sender: "Emrah",
        avatar: "/assets/images/emrah.jpg",
      },
      // Daha fazla mesaj eklemek isterseniz buraya ekleyebilirsiniz.
    ]);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "me" }]);
      setInputValue(""); // Input değerini sıfırla
    }
  };
  return (
    <div className={`${styles.messagesContainer} md:w-[75%]`}>
      {/* Mesajlaşma alanı */}
      <div className={styles.messageArea}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              message.sender === "me" ? styles.myMessage : styles.notMyMessage
            }`}
          >
            {message.sender !== "me" ? (
              <>
                <div className={styles.avatar}>
                  <img
                    src={selectedUser.avatar}
                    alt="Avatar"
                    className={styles.avatarImage}
                  />
                </div>
                <div className={styles.messageText}>{message.text}</div>
              </>
            ) : (
              <div className={styles.myMessageText}>{message.text}</div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>


      
        <Input inputValue={inputValue} handleInputChange={handleInputChange} sendMessage={sendMessage} />
    
   
    </div>
  );
}

export default Messages;
