import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { Helmet } from "react-helmet";

export default function Predict() {
  const [subject, setSubject] = useState("");
  const link = global.config.predictURL;
  const [grades, setGrades] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [prediction, setPrediction] = useState("");

  const getPrediction = async (variables) => {
    setLoading(true);
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
        alert(
          "Please ensure that the grades you entered are between 0 and 100",
        );
        setPrediction("");
        setSubject("");
        setGrades("");
        setDisabled(true);
        setLoading(false);
      });
  };

  const handleChange = (event) => {
    setGrades(event.target.value);
  };

  const [loading, setLoading] = useState(false);

  const regex = /^[0-9,]*$/;

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
    } else {
      setDisabled(true);
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
          <Helmet>
            <title>
              Our AI thinks you will get {prediction} in your next {subject}{" "}
              test
            </title>
          </Helmet>
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
            setLoading(false);
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
          marginLeft: "42%",
          width: "10%",
        }}
      >
        <Helmet>
          <title>AI Grade Predictor</title>
        </Helmet>
        <div>
          <TextField
            style={{
              marginTop: "20%",
              backgroundColor: "white",
              width: "230%",
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
              width: "220%",
            }}
            variant="filled"
            id="outlined-grades"
            autoComplete="off"
            label="Enter 3 or more past TSS grades or Percentages"
            helperText="Seperate your grades with commas (e.g. 70, 89, 85)"
            value={grades}
            onChange={(event) => {
              if (regex.test(event.target.value)) {
                handleChange(event);
              } else {
                event.preventDefault();
              }
              if (
                event.target.value.split(",").map((i) => Number(i)).length >=
                  3 &&
                event.target.value.split(",").map((i) => Number(i))[
                  event.target.value.split(",").map((i) => Number(i)).length - 1
                ] !== 0
              ) {
                if (subject) setDisabled(false);
              } else {
                setDisabled(true);
              }
            }}
          />
        </div>
        <div>
          <LoadingButton
            style={{
              marginTop: "20%",
              width: "200%",
              marginLeft: "20%",
            }}
            variant="contained"
            disabled={disabled}
            onClick={getPrediction}
            loading={loading}
          >
            Predict Next TSS
          </LoadingButton>
        </div>
      </div>
    );
  }
}
