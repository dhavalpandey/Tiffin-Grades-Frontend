import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export default function Predict() {
  const [subject, setSubject] = useState("");
  const link = global.config.predictURL;
  const [grades, setGrades] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [prediction, setPrediction] = useState("");

  const getPrediction = async (variables) => {
    await fetch(
      link + "/" + grades,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
      variables,
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPrediction(res.prediction);
      })
      .catch((error) => {
        alert(error);
        window.location.reload();
      });
  };

  const handleChange = (event) => {
    setGrades(event.target.value);
    if (subject) {
      setDisabled(false);
    }
  };

  const regex = /^[1-9,]*$/;

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

  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
    if (grades) {
      setDisabled(false);
    }
  };

  if (prediction) {
    return (
      <div
        style={{
          marginTop: "15%",
        }}
      >
        <div>
          <h1>Our Machine Learning Model predicts that you will recieve</h1>
          <h1 style={{ color: "yellow" }}>{prediction} TSS</h1>
          <h2 style={{ display: "flex", justifyContent: "center" }}>
            in yout next {subject} Test.
          </h2>
        </div>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setPrediction("");
            setSubject("");
            setGrades("");
            setDisabled(true);
          }}
          style={{ marginLeft: "47%" }}
        >
          Try it again?
        </Button>
      </div>
    );
  } else {
    return (
      <div
        style={{
          marginTop: "16%",
          display: "flex",
          justifyContent: "center",
          flexFlow: "row wrap",
          flexBasis: "100%",
          marginLeft: "43%",
          width: "10%",
        }}
      >
        <div>
          <TextField
            style={{
              marginTop: "20%",
              backgroundColor: "white",
              width: "200%",
            }}
            variant="filled"
            required
            width="1"
            id="filled-select"
            select
            label="Subject"
            autoFocus
            value={subject}
            onChange={handleChangeSubject}
            helperText="Please select the subject."
          >
            {subjects.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            required
            style={{
              marginTop: "20%",
              backgroundColor: "white",
              width: "190%",
            }}
            variant="filled"
            id="outlined-grades"
            autoComplete="off"
            label="Grades"
            value={grades}
            onChange={(event) => {
              if (regex.test(event.target.value)) {
                handleChange(event);
              } else {
                event.preventDefault();
              }
            }}
          />
        </div>
        <div>
          <Button
            style={{
              marginTop: "20%",
              width: "200%",
              marginLeft: "3%",
            }}
            variant="contained"
            disabled={disabled}
            onClick={getPrediction}
          >
            Predict Grade
          </Button>
        </div>
      </div>
    );
  }
}
