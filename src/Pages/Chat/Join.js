import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { Helmet } from "react-helmet";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useHistory } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Join() {
  const [open, setOpen] = React.useState(false);
  const [room, setRoom] = useState("");
  const [checked, setChecked] = React.useState(false);
  const [copyText, setCopyText] = useState("Copy shareable Link");
  const history = useHistory();

  const link = global.config.url;

  const joinRoom = async () => {
    if (checked) {
      await fetch(link + "/discussion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          link: `https://tiffingrades.netlify.app/chat/${room}`,
          name: room,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log("done");
        })
        .catch((error) => {
          console.log("failed");
        });
      localStorage.setItem("chat-room", room);
      window.location.replace("/chat/" + room);
    } else {
      localStorage.setItem("chat-room", room);
      window.location.replace("/chat/" + room);
    }
  };

  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  localStorage.setItem("chat-room", localStorage.getItem("chat-room"));

  const regex = /^[a-zA-Z0-9]*$/gm;

  if (!localStorage.getItem("chat-room")) {
    return (
      <div className="createBtn">
        <Helmet>
          <title>Discussions</title>
        </Helmet>
        <div
          className="joinDisscussion"
          style={{
            width: "100vw",
            marginTop: "30%",
            marginLeft: "10%",
            // eslint-disable-next-line
            width: "100%",
          }}
        >
          <Button variant="contained" onClick={handleClickOpen} size="large">
            Join or Create a Discussion
          </Button>
        </div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <h1 className="heading3">Join or Create a Discussion</h1>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <TextField
                value={room}
                required
                id="filled-name"
                label="Discussion Code"
                variant="filled"
                margin="dense"
                style={{ color: "#00ff00" }}
                fullWidth
                autoComplete="off"
                onChange={(event) => {
                  if (event.target.value.length !== 16) {
                    setRoom(event.target.value);
                  } else {
                    event.preventDefault();
                  }
                }}
                onKeyPress={(event) => {
                  event.key === "Enter" && joinRoom();
                  if (!regex.test(event.key)) {
                    event.preventDefault();
                  }
                  if (room !== "") {
                    event.key === "Enter" && joinRoom();
                  }
                }}
              />
              <FormControlLabel
                style={{ marginLeft: "25%", marginTop: "3%" }}
                control={
                  <Switch checked={checked} onChange={handleSwitchChange} />
                }
                label="Make it public"
              />
              <br></br>
              <FormControlLabel
                style={{ marginLeft: "25%", marginTop: "2%" }}
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
                    <LinkIcon />
                  </IconButton>
                }
                label={copyText}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button disabled={room === "" ? true : false} onClick={joinRoom}>
              Join
            </Button>
          </DialogActions>
        </Dialog>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            history.push("/public-discussions");
          }}
          size="large"
          style={{
            marginTop: "15%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "10%",
            width: "100%",
          }}
        >
          Join a Public Discussion
        </Button>
      </div>
    );
  } else {
    if (localStorage.getItem("chat-room") !== "null") {
      window.location.replace("/chat/" + localStorage.getItem("chat-room"));
    } else {
      return (
        <div className="createBtn">
          <Helmet>
            <title>Discussions</title>
          </Helmet>
          <div
            className="joinDisscussion"
            style={{
              width: "100vw",
              marginTop: "30%",
              marginLeft: "10%",
              // eslint-disable-next-line
              width: "100%",
            }}
          >
            <Button variant="contained" onClick={handleClickOpen} size="large">
              Join or Create a Discussion
            </Button>
          </div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <h1 className="heading3">Join or Create a Discussion</h1>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <TextField
                  value={room}
                  required
                  id="filled-name"
                  label="Discussion Code"
                  variant="filled"
                  margin="dense"
                  style={{ color: "#00ff00" }}
                  fullWidth
                  autoComplete="off"
                  onChange={(event) => {
                    if (event.target.value.length !== 16) {
                      setRoom(event.target.value);
                    } else {
                      event.preventDefault();
                    }
                  }}
                  onKeyPress={(event) => {
                    event.key === "Enter" && joinRoom();
                    if (!regex.test(event.key)) {
                      event.preventDefault();
                    }
                    if (room !== "") {
                      event.key === "Enter" && joinRoom();
                    }
                  }}
                />
                <FormControlLabel
                  style={{ marginLeft: "25%", marginTop: "3%" }}
                  control={
                    <Switch checked={checked} onChange={handleSwitchChange} />
                  }
                  label="Make it public"
                />
                <br></br>
                <FormControlLabel
                  style={{ marginLeft: "25%", marginTop: "2%" }}
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
                      <LinkIcon />
                    </IconButton>
                  }
                  label={copyText}
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button disabled={room === "" ? true : false} onClick={joinRoom}>
                Join
              </Button>
            </DialogActions>
          </Dialog>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              history.push("/public-discussions");
            }}
            size="large"
            style={{
              marginTop: "15%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "10%",
              width: "100%",
            }}
          >
            Join a Public Discussion
          </Button>
        </div>
      );
    }
  }
}
