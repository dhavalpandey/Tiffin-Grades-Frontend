import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TextField from "@mui/material/TextField";
import ScrollToBottom from "react-scroll-to-bottom";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import "./Chat.css";
import io from "socket.io-client";
import { useHistory, useParams } from "react-router-dom";
import useSound from "use-sound";
import notification from "./notification.mp3";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Filter from "bad-words";

const socketIO = io.connect("https://tiffingrades-api.herokuapp.com/");

export default function Chat({ name, room }) {
  const [mute, setMute] = useState(
    localStorage.getItem("mute") === "true" ? true : false,
  );

  let { id } = useParams();

  const filter = new Filter();

  localStorage.setItem("chat-room", id);

  const history = useHistory();
  const socket = socketIO;
  const joinRoom = () => {
    socket.emit("join-room", localStorage.getItem("chat-room"));
  };

  joinRoom();

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        name,
        message: filter.clean(currentMessage),
      };

      await socket.emit("send-message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  const [play] = useSound(notification, { volume: 0.45 });

  useEffect(() => {
    socket.on("receive-message", (data) => {
      setMessageList((list) => [...list, data]);
      if (localStorage.getItem("mute") === "false") {
        play();
      }
    });
    // eslint-disable-next-line
  }, [socket]);

  useEffect(() => {
    socket.on("receive-message", (data) => {
      if (localStorage.getItem("mute") === "false") {
        play();
      }
    });
    // eslint-disable-next-line
  }, [play]);

  const handleMuteChange = (event) => {
    setMute(event.target.checked);
    localStorage.setItem("mute", event.target.checked);
  };

  return (
    <>
      <div className="chat-window">
        <Helmet>
          <title>Discussions - {localStorage.getItem("chat-room")}</title>
        </Helmet>
        <h1
          style={{
            height: "5%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Discussion - {localStorage.getItem("chat-room")}
        </h1>
        <div style={{ marginLeft: "40%", marginTop: "2%" }}>
          <FormControlLabel
            control={
              <Switch
                style={{
                  color: "white",
                }}
                checked={mute}
                onChange={handleMuteChange}
              />
            }
            label="Mute Notifications"
          />
        </div>
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
            autoComplete="off"
            id="filled-required"
            label="Your message"
            variant="filled"
            value={currentMessage}
            style={{
              borderColor: "white",
              backgroundColor: "#f8fafc",
              width: "78%",
              height: "100%",
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
            onClick={(event) => {
              sendMessage();
            }}
            style={{ width: "22%", height: "100%" }}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </div>
        <Button
          style={{ marginTop: "5%", marginLeft: "35%" }}
          onClick={(event) => {
            localStorage.removeItem("chat-room");
            window.location.replace("/chat");
          }}
          variant="contained"
          color="secondary"
        >
          Leave this Discussion
        </Button>
        <Button
          style={{ marginTop: "4%", marginLeft: "33.5%" }}
          onClick={(event) => {
            history.push("/public-discussions");
          }}
          variant="contained"
          color="primary"
        >
          Join a Public Discussion
        </Button>
      </div>
    </>
  );
}
