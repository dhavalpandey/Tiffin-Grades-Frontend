import React from "react";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import MenuItem from "@mui/material/MenuItem";
import "./Meet.css";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const subjects = [
  {
    value: "English",
    label: "English",
  },
  {
    value: "Maths",
    label: "Maths",
  },
  {
    value: "Biology",
    label: "Biology",
  },
  {
    value: "Physics",
    label: "Physics",
  },
  {
    value: "Chemistry",
    label: "Chemistry",
  },
  {
    value: "Geography",
    label: "Geography",
  },
  {
    value: "German",
    label: "German",
  },
  {
    value: "History",
    label: "History",
  },
  {
    value: "Latin",
    label: "Latin",
  },
  {
    value: "RP",
    label: "RP",
  },
  {
    value: "Music",
    label: "Music",
  },
];

const times = [
  {
    value: 1800000,
    label: "In 30 mins",
  },
  {
    value: 3600000,
    label: "In 1 hour",
  },
  {
    value: 10800000,
    label: "In 3 hours",
  },
  {
    value: 18000000,
    label: "In 5 hours",
  },
  {
    value: 86400000,
    label: "In 1 day",
  },
];

export default function Meet() {
  const [open, setOpen] = React.useState(false);
  const [meetName, setMeetName] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [subject, setSubject] = React.useState("");
  const [time, setTime] = React.useState("");
  const [code, setCode] = React.useState("");

  const handleChange = (event) => {
    setSubject(event.target.value);
    setMeetName(
      localStorage.getItem("name") + "'s " + event.target.value + " session",
    );
    setCode(
      localStorage.getItem("name") + "s" + event.target.value + "Session",
    );
    setIsDisabled(isDisabled >= 2 ? 2 : isDisabled + 1);
  };

  const handleChangeTime = (event) => {
    setTime(event.target.value);
    console.log(time);
    setIsDisabled(isDisabled >= 2 ? 2 : isDisabled + 1);
  };

  const link = global.config.url;

  const handleCreate = async () => {
    window.open(`https://g.co/meet/${code}`);
    setOpen(false);
    await fetch(link + "/meet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        link: `https://g.co/meet/${code}`,
        subject: subject,
        meetName: meetName,
        name: localStorage.getItem("name"),
        googleId: localStorage.getItem("google_id"),
        createdAt: Date.now(),
        expiringAt: time + Date.now(),
        profilePicture: localStorage.getItem("image"),
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
  };

  return (
    <div>
      <Helmet>
        <title>Study Sessions</title>
      </Helmet>
      <div className="createBtn">
        <Button variant="contained" onClick={handleClickOpen} size="large">
          Host a Study Session
        </Button>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <h1 className="heading3">Start a Study Session</h1>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField
              required
              width="100%"
              id="filled-select"
              select
              label="Subject"
              autoFocus
              value={subject}
              onChange={handleChange}
              helperText="Please select the subject of the study session"
              variant="filled"
            >
              {subjects.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              width="100%"
              id="filled-select"
              select
              label="Expiration Date"
              autoFocus
              value={time}
              onChange={handleChangeTime}
              helperText="Please select when your study session will finish"
              variant="filled"
            >
              {times.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              value={meetName}
              required
              id="filled-name"
              label="Name of Study Session"
              variant="filled"
              margin="dense"
              disabled
              fullWidth
              autoComplete="off"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            disabled={isDisabled === 2 ? false : true}
            onClick={handleCreate}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>

      <div className="joinBtn">
        <Link
          to="/meet/active-meets"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Button variant="contained" color="secondary" size="large">
            Join an active Study Session
          </Button>
        </Link>
      </div>
    </div>
  );
}
