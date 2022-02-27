import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import { Helmet } from "react-helmet";
import "./Account.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Delete() {
  const link = global.config.development.status
    ? "http://localhost:5000"
    : "https://tiffingrades-api.herokuapp.com";

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    await fetch(link + "/delete-account", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        googleId: localStorage.getItem("google_id"),
        name: localStorage.getItem("name"),
        profilePicture: localStorage.getItem("image"),
        yearGroup: localStorage.getItem("year"),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert(error);
        window.location.reload();
      });
    alert("Goodbye " + localStorage.getItem("name"));
    localStorage.clear();
    window.location.replace("/");
  };
  return (
    <div style={{ marginTop: "25%", marginLeft: "45%" }}>
      {" "}
      <Helmet>
        <title>Delete your Account</title>
      </Helmet>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Delete your Account
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <h1 className="heading3">
          {localStorage.getItem("name")}, are you sure you want to delete your
          account?
        </h1>
        <h3 className="warning">
          All data associated with your account will be deleted.
        </h3>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete}>DELETE MY ACCOUNT</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
