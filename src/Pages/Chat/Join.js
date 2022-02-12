import React, { useState } from "react";
import io from "socket.io-client";
import Chat from "./Chat";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { Helmet } from "react-helmet";

const socket = io.connect("https://tiffingrades-api.herokuapp.com");

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Join() {
  const [open, setOpen] = React.useState(false);
  const [room, setRoom] = useState("");
  const [hasJoinedRoom, setHasJoinedRoom] = useState(false);

  const joinRoom = () => {
    if (room !== "") {
      setHasJoinedRoom(true);
      socket.emit("join-room", room);
      handleClose();
    } else {
      setHasJoinedRoom(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (hasJoinedRoom === false) {
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
    return (
      <Chat socket={socket} name={localStorage.getItem("name")} room={room} />
    );
  }
}
