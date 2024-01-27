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
  const sendImage = (image) => {
    if (image) {
      
      setMessages([...messages, { image: image, sender: "me" }]);
    }
  };
  return (
    <div className={`${styles.messagesContainer}  md:h-[83vh] h-[87vh]`}>
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
                
              </>
            ) : (<>
              {message.image ? (
                <img src={message.image.image} alt="Sent" className={styles.sentImage} />
              ) : (
                <div className={styles.messageText}>{message.text}</div>
              )}
               
              </>
            
            )}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>


      
        <Input inputValue={inputValue} handleInputChange={handleInputChange} sendMessage={sendMessage} sendImage={sendImage} />
    
   
    </div>
  );
}

export default Messages;
