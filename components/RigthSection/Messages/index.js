"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Input from "./Input";
import { BsFiletypePdf } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import { BsFiletypeDocx } from "react-icons/bs";
import { BsFiletypeDoc } from "react-icons/bs";
import { MdCheck } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

import { useContext } from "react";
import PhoneBookContext from "@/context/PhoneBookContext";

function Messages() {
  const { selectedUser } = useContext(PhoneBookContext);

  const [messages, setMessages] = useState([]); // Mesajların listesi
  const [inputValue, setInputValue] = useState(""); // Girişteki değer

  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  useEffect(() => {
    // Örnek mesajları başlangıçta yükleyelim
    setMessages([
      {
        text: "Merhaba e",
        sender: "Emrah",
        avatar: "/assets/images/emrah.jpg",
        hour: "11:20",
      },
      {
        text: "Nasılsın?",
        sender: "me",
        hour: "11:20",
        sendMessage: false,
        unsendMessage: false,
        readMessage: true,
      }, // Zaman damgası eklendi
      {
        text: "İyiyim, teşekkürler e.",
        sender: "Emrah",
        avatar: "/assets/images/emrah.jpg",
        hour: "11:20",
      },
      {
        text: "Sen nasılsın? e",
        sender: "Emrah",
        avatar: "/assets/images/emrah.jpg",
        hour: "11:20",
      },
      {
        text: "Ben de iyiyim, teşekkürler.",
        sender: "me",
        hour: "11:20",
        sendMessage: false,
        unsendMessage: false,
        readMessage: true,
      },
      {
        text: "Ben de iyiyim e, teşekkürler.",
        sender: "Emrah",
        avatar: "/assets/images/emrah.jpg",
        hour: "11:20",
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
      setMessages([
        ...messages,
        { image: image, sender: "me", download: true },
      ]);
    }
  };
  const sendDocument = (document) => {
    if (document) {
      setMessages([...messages, { document: document, sender: "me" }]);
    }
  };
  console.log(messages);
  return (
    <div className={`${styles.messagesContainer} ${styles.scrollStyles}  md:h-[83vh]  h-[87vh]`}>
      {/* Mesajlaşma alanı */}
      <div className={styles.messageArea}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              message.sender === "me" ? styles.myMessage : styles.notMyMessage
            }`}
          >
            {message.sender !== "me" && (
              <div className={styles.avatar}>
                <img
                  src={selectedUser.avatar}
                  alt="Avatar"
                  className={styles.avatarImage}
                />
              </div>
            )}

            {message.document ? (
              <a
                href={message.document.blobUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentLink}
              >
                {message.document.document.name.endsWith(".pdf") ? (
                  <BsFiletypePdf className="mr-3 text-3xl text-pdfBg" />
                ) : message.document.document.name.endsWith(".docx") ? (
                  <BsFiletypeDocx className="mr-3 text-3xl text-docxBg" />
                ) : (
                  <BsFiletypeDoc className="mr-3 text-3xl text-docBg" />
                )}
                <h2>{message.document.document.name}</h2>
              </a>
            ) : message.image ? (
              <div className="flex flex-col">
                {message.image.image.files.map((img, index) => (
                  <div key={index} className="mx-1">
                    <div className={styles.imageWithDownload}>
                      <img src={img} alt="Sent" className={styles.sentImage} />
                      {message.download && (
                        <a
                          href={message.image.image}
                          download="image"
                          className={styles.downloadLink}
                        >
                          <IoMdDownload />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
                <div
                  className={`${
                    message.sender === "me"
                      ? styles.myMessageText
                      : styles.messageText
                  } flex flex-col `}
                >
                  <div> {message.image.image.message}</div>
                </div>
              </div>
            ) : (
              <div
                className={`${
                  message.sender === "me"
                    ? styles.myMessageText
                    : styles.messageText
                } flex flex-col `}
              >
                <div> {message.text}</div>
                <div className=" flex  justify-end items-center space-x-2 text-xs mt-1 opacity-70">
                  <div>{message.hour}</div>
                  <div>
                    {message.sendMessage && (
                      <IoCheckmarkDoneSharp className="text-favTxt" />
                    )}
                    {message.unsendMessage && <MdCheck />}
                    {message.readMessage && (
                      <IoCheckmarkDoneSharp className="text-dotBg" />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        <div ref={messagesEndRef}></div>
      </div>

      <Input
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        sendMessage={sendMessage}
        sendImage={sendImage}
        sendDocument={sendDocument}
      />
    </div>
  );
}

export default Messages;
