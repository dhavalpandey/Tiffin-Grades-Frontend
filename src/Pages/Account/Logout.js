import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import { Helmet } from "react-helmet";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Logout() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("/");
  };
  return (
    <div style={{ marginTop: "25%", marginLeft: "45%" }}>
      {" "}
      <Helmet>
        <title>Logout</title>
      </Helmet>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Log your Account Out
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <h1 className="heading3">Are you sure you want to logout?</h1>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogout}>Yes, log me out</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
