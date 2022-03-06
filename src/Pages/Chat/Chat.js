import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TextField from "@mui/material/TextField";
import ScrollToBottom from "react-scroll-to-bottom";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import io from "socket.io-client";
import { useHistory, useParams } from "react-router-dom";
import useSound from "use-sound";
import notification from "./notification.mp3";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";
import Filter from "leo-profanity";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

import wordFilter from "./Filter";
import "./Chat.css";

const useStyles = makeStyles((theme) => ({
  tooltip: {
    backgroundColor: "#D1D5DB",
    color: "#18191A",
    fontSize: 14.2,
    fontFamily: "Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif",
    borderRadius: 7,
    height: 28,
  },
}));

function ValidURL(str) {
  var pattern = new RegExp(
    "^((ft|htt)ps?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?" + // port
      "(\\/[-a-z\\d%@_.~+&:]*)*" + // path
      "(\\?[;&a-z\\d%@_.,~+&:=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i",
  );

  const regex =
    // eslint-disable-next-line
    /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  if (regex.test(str) || pattern.test(str)) {
    return true;
  } else {
    return false;
  }
}

let socketIO;
if (
  window.location.pathname.slice(6) !== "" &&
  window.location.pathname.toString().includes("chat")
) {
  socketIO = io.connect("https://tiffingrades-api.herokuapp.com/");
}

export default function Chat({ name, room }) {
  useEffect(() => {
    joinRoom();
    const messageData = {
      room: room,
      googleId: localStorage.getItem("google_id"),
      name,
      message: localStorage.getItem("name") + " has joined this discussion",
    };

    socket.emit("send-message", messageData);
    setCurrentMessage("");
    // eslint-disable-next-line
  }, []);

  let users = [];
  let usersNames = [];
  const [num, setNum] = useState(0);
  const [names, setnames] = useState("You");

  const classes = useStyles();
  const [copyText, setCopyText] = useState("Copy shareable Link");
  const [mute, setMute] = useState(
    localStorage.getItem("mute") === "true" ? true : false,
  );

  let { id } = useParams();

  const filter = Filter;

  const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  localStorage.setItem("chat-room", id);

  const history = useHistory();
  const socket = socketIO;
  const joinRoom = () => {
    socket.emit("join-room", {
      chatRoom: localStorage.getItem("chat-room"),
      name: localStorage.getItem("name"),
      googleId: localStorage.getItem("google_id"),
    });
  };

  const isBlank = (str) => {
    return !str || /^\s*$/.test(str);
  };

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const divRef = React.useRef(null);

  const sendMessage = () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        googleId: localStorage.getItem("google_id"),
        name,
        message: /[a-z]/i.test()
          ? filter.clean(wordFilter(currentMessage))
          : currentMessage,
      };

      socket.emit("send-message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  const [play] = useSound(notification, { volume: 0.45 });

  useEffect(() => {
    socket.on("receive-message", (data) => {
      setMessageList((list) => [...list, data]);
      if (
        !users.includes(data.googleId) &&
        data.googleId !== localStorage.getItem("google_id")
      ) {
        users.push(data.googleId);
      }
      if (localStorage.getItem("mute") === "false") {
        play();
      }
    });
    // eslint-disable-next-line
  }, [socket]);

  useEffect(() => {
    socket.on("new-user", (data) => {
      joinRoom();
      const valueArr = userIds.map((item) => {
        return item.name;
      });

      const isDuplicate = valueArr.some((item, idx) => {
        return valueArr.indexOf(item) !== idx;
      });

      if (
        !isDuplicate &&
        data.data.chatRoom === localStorage.getItem("chat-room")
      ) {
        userIds = [
          ...userIds,
          {
            name: data.data.name,
            id: data.id,
          },
        ];
      } else {
        if (userIds.length !== 0) {
          userIds = userIds.map((obj) =>
            obj.name === data.data.name ? { ...obj, id: data.id } : obj,
          );
        }
      }

      const ids = userIds.map((o) => o.id);
      // eslint-disable-next-line
      userIds = userIds.filter(
        ({ name }, index) => !ids.includes(name, index + 1),
      );

      userIds = [
        ...new Map(
          userIds.map((item) => [JSON.stringify(item), item]),
        ).values(),
      ];

      if (
        !users.includes(data.data.googleId) &&
        data.data.googleId !== localStorage.getItem("google_id")
      ) {
        users.push(data.data.googleId);
        usersNames.push(data.data.name);
      }

      setnames(usersNames.join(", "));
      setNum(users.length);
    });
    // eslint-disable-next-line
  }, [socket]);

  useEffect(() => {
    socket.on("receive-message", (data) => {
      if (
        !users.includes(data.googleId) &&
        data.googleId !== localStorage.getItem("google_id")
      ) {
        users.push(data.googleId);
      }
      if (localStorage.getItem("mute") === "false") {
        play();
      }
    });
    // eslint-disable-next-line
  }, [play]);

  let userIds = [];

  useEffect(() => {
    socket.on("disconnect-user", (data) => {
      const checkExists = (obj) => obj.id === data;
      let temp;
      if (userIds.some(checkExists)) {
        for (let i = 0; i < userIds.length; i++) {
          if (userIds[i].id === data) {
            temp = userIds[i].name;

            const messageData = {
              room: localStorage.getItem("chat-room"),
              googleId: localStorage.getItem("google_id"),
              name: localStorage.getItem("name"),
              message: temp + " has left this discussion",
            };
            setMessageList((list) => [...list, messageData]);

            // eslint-disable-next-line
            userIds = userIds.filter((person) => person.id !== data);
            let index = usersNames.indexOf(temp);
            // eslint-disable-next-line
            usersNames = usersNames.filter((person) => person !== temp);
            users.splice(index, 1);

            setnames(usersNames.join(", "));
            setNum(num - 1);
          }
        }
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
          <title>
            {`Discussions - ${localStorage.getItem("chat-room")} - With ${
              num + 1 <= 1 ? "yourself" : num + 1 + " people"
            }`}
          </title>
        </Helmet>
        <div
          style={{
            height: "5%",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="chattitle"
        >
          <Tooltip
            className="tooltip"
            classes={{ tooltip: classes.tooltip }}
            title={names.length >= 1 ? "With " + names : "With You"}
          >
            <h1>
              {`Discussions - ${localStorage.getItem("chat-room")} - ${
                num + 1 <= 1 ? "Just you" : "With " + (num + 1) + " people"
              }`}
              <SupervisedUserCircleIcon fontSize="large" />
            </h1>
          </Tooltip>
        </div>
        <div style={{ marginLeft: "32%", marginTop: "2%" }}>
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
          <FormControlLabel
            style={{ marginLeft: "0%", marginTop: "0%" }}
            control={
              <IconButton
                disabled={room === "" ? true : false}
                onClick={() => {
                  navigator.clipboard.writeText(
                    `https://tiffingrades.netlify.app/chat/${room}`,
                  );
                  setCopyText("Copied to Clipboard ✔️");
                  sleep(1300).then(() => {
                    setCopyText("Copy shareable Link");
                  });
                }}
                aria-label="Copy link"
              >
                <LinkIcon
                  style={{
                    color: "white",
                  }}
                />
              </IconButton>
            }
            label={copyText}
          />
        </div>
        <div className="chat-body" ref={divRef}>
          <ScrollToBottom className="message-container">
            {messageList.map((messageContent) => {
              if (
                messageContent.message.includes("has joined this discussion") ||
                messageContent.message.includes("has left this discussion")
              ) {
                return (
                  <i>
                    <b>
                      <h4
                        className={
                          messageContent.message.includes(
                            "has left this discussion",
                          )
                            ? "left"
                            : "joined"
                        }
                      >
                        {messageContent.message}
                      </h4>
                    </b>
                  </i>
                );
              } else if (
                localStorage.getItem("google_id") === messageContent.googleId
              ) {
                return (
                  <div className="message" id="other">
                    <div>
                      <div className="message-content">
                        {ValidURL(messageContent.message) ? (
                          <a
                            href={
                              messageContent.message.substring(0, 8) !==
                              "https://"
                                ? "https://" + messageContent.message
                                : messageContent.message
                            }
                            target="_blank"
                            rel="noreferrer"
                          >
                            {messageContent.message}
                          </a>
                        ) : (
                          <p>{messageContent.message}</p>
                        )}
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
              } else if (
                messageContent.name === "Dhaval" &&
                messageContent.googleId === "111912170440804641372"
              ) {
                return (
                  <div className="message" id="leader" ref={divRef}>
                    <Tooltip
                      className="tooltip"
                      placement="right"
                      classes={{ tooltip: classes.tooltip }}
                      title="This message was sent by the app creator."
                    >
                      <div>
                        <div className="message-content">
                          {ValidURL(messageContent.message) ? (
                            <a
                              href={
                                messageContent.message.substring(0, 8) !==
                                "https://"
                                  ? "https://" + messageContent.message
                                  : messageContent.message
                              }
                              target="_blank"
                              rel="noreferrer"
                            >
                              {messageContent.message}
                            </a>
                          ) : (
                            <p>{messageContent.message}</p>
                          )}
                        </div>
                        <div className="message-meta">
                          <p id="author">Dhaval</p>
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                );
              } else {
                return (
                  <div className="message" id="you" ref={divRef}>
                    <div>
                      <div className="message-content">
                        {ValidURL(messageContent.message) ? (
                          <a
                            href={
                              messageContent.message.substring(0, 8) !==
                              "https://"
                                ? "https://" + messageContent.message
                                : messageContent.message
                            }
                            target="_blank"
                            rel="noreferrer"
                          >
                            {messageContent.message}
                          </a>
                        ) : (
                          <p>{messageContent.message}</p>
                        )}
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
            cleanOnEnter
            autoComplete="off"
            id="filled-required"
            label="Your message"
            variant="filled"
            value={currentMessage}
            style={{
              borderColor: "white",
              backgroundColor: "#f8fafc",
              width: "80%",
              height: "100%",
            }}
            onChange={(event) => {
              if (event.target.value.length <= 40) {
                setCurrentMessage(event.target.value);
              } else {
                event.preventDefault();
              }
            }}
            onKeyPress={(event) => {
              if (!isBlank(event.target.value)) {
                event.key === "Enter" && sendMessage();
              }
            }}
          />
          <Button
            disabled={isBlank(currentMessage) ? true : false}
            variant="contained"
            onClick={(event) => {
              sendMessage();
            }}
            style={{ width: "20%", height: "100%" }}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </div>
        <Button
          style={{ marginTop: "2.5%", marginLeft: "40%" }}
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
          style={{ marginTop: "2.5%", marginLeft: "39%" }}
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
