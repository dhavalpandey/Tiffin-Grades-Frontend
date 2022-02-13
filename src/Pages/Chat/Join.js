import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { Helmet } from "react-helmet";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Join() {
  const [open, setOpen] = React.useState(false);
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    localStorage.setItem("chat-room", room);
    window.location.replace("/chat/" + room);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  localStorage.setItem("chat-room", localStorage.getItem("chat-room"));

  if (!localStorage.getItem("chat-room")) {
    return (
      <div className="createBtn">
        <Helmet>
          <title>Join a Discussion</title>
        </Helmet>
        <div className="joinDisscussion" style={{ marginTop: "60%" }}>
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
                }}
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
      </div>
    );
  } else {
    window.location.replace("/chat/" + localStorage.getItem("chat-room"));
  }
}
