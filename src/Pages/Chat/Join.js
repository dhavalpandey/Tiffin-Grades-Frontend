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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Join() {
  const [open, setOpen] = React.useState(false);
  const [room, setRoom] = useState(localStorage.getItem("chat-room"));
  const [checked, setChecked] = React.useState(false);
  const history = useHistory();

  localStorage.setItem("chat-room", room);

  const link = global.config.development.status
    ? "http://localhost:5000"
    : "https://tiffingrades-api.herokuapp.com";

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

  const regex = /^[a-zA-Z0-9]*$/gm;

  if (!localStorage.getItem("chat-room")) {
    return (
      <div className="createBtn">
        <Helmet>
          <title>Join a Discussion</title>
        </Helmet>
        <div
          className="joinDisscussion"
          style={{ marginTop: "60%", marginLeft: "35%", width: "100%" }}
        >
          <Button variant="contained" onClick={handleClickOpen} size="large">
            Join a Discussion
          </Button>
        </div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <h1 className="heading3">Join a Discussion</h1>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <TextField
                value={room}
                required
                id="filled-name"
                label="Discussion Code"
                variant="filled"
                margin="dense"
                style={{ color: "#00ff00", width: "100%" }}
                fullWidth
                autoComplete="off"
                onChange={(event) => {
                  setRoom(event.target.value);
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
                style={{ marginTop: "5%" }}
                control={
                  <Switch checked={checked} onChange={handleSwitchChange} />
                }
                label="Make it public"
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
            marginLeft: "25%",
            width: "100%",
          }}
        >
          Join a Public Discussion
        </Button>
      </div>
    );
  } else {
    window.location.replace("/chat/" + localStorage.getItem("chat-room"));
  }
}
