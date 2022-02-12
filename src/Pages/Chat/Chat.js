import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TextField from "@mui/material/TextField";
import ScrollToBottom from "react-scroll-to-bottom";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

import "./Chat.css";

export default function Chat({ socket, name, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        name,
        message: currentMessage,
      };

      await socket.emit("send-message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive-message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <>
      <div className="chat-window">
        <Helmet>
          <title>Discussions - Chat Room {room}</title>
        </Helmet>
        <h1
          style={{
            height: "5%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Chat Room
        </h1>
        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {messageList.map((messageContent) => {
              if (localStorage.getItem("name") === messageContent.name) {
                return (
                  <div className="message" id="other">
                    <div>
                      <div className="message-content">
                        <p>{messageContent.message}</p>
                      </div>
                      <div className="message-meta">
                        <p id="author">
                          {messageContent.name === localStorage.getItem("name")
                            ? "You"
                            : messageContent.name}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="message" id="you">
                    <div>
                      <div className="message-content">
                        <p>{messageContent.message}</p>
                      </div>
                      <div className="message-meta">
                        <p id="author">{messageContent.name}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </ScrollToBottom>
        </div>
        <div className="chat-footer">
          <TextField
            required
            id="filled-required"
            label="Your message"
            variant="filled"
            value={currentMessage}
            style={{
              borderColor: "white",
              backgroundColor: "white",
              width: "78%",
            }}
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <Button
            disabled={currentMessage === "" ? true : false}
            variant="contained"
            onClick={(event) => sendMessage()}
            style={{ width: "22%", height: "97%" }}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
}
