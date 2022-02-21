import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Helmet } from "react-helmet";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import "./Adjectives.css";

export default function Adjectives() {
  const [state, setState] = React.useState({
    creative: false,
    techincal: false,
    hardWorking: false,
    practical: false,
    intelligent: false,
    determined: false,
  });

  const { creative, techincal, hardWorking, practical, intelligent } = state;
  const error =
    [creative, techincal, hardWorking, practical, intelligent].filter((v) => v)
      .length !== 2;

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleClick = (event) => {
    console.log("clicked");
  };

  const link = global.config.development.status
    ? "http://localhost:5000"
    : "https://tiffingrades-api.herokuapp.com";

  const handleSubmit = async (event) => {
    if (!error && year !== 0) {
      await fetch(link + "/adjectives", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          googleId: localStorage.getItem("google_id"),
          state,
          yearGroup: year,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.status === "OK") {
            localStorage.setItem("adjectives_submitted", true);
            localStorage.setItem("year", year);
            window.location.reload();
          } else {
            alert(res.message);
            localStorage.clear();
            window.location.reload();
          }
        })
        .catch((error) => {
          console.log("failed");
        });
    } else {
      alert("Please ensure that you have filled out all the required fields.");
    }
  };

  const years = [
    {
      value: "7",
      label: "7",
    },
    {
      value: "8",
      label: "8",
    },
    {
      value: "9",
      label: "9",
    },
    {
      value: "10",
      label: "10",
    },
    {
      value: "11",
      label: "11",
    },
    {
      value: "12",
      label: "12",
    },
    {
      value: "13",
      label: "13",
    },
  ];

  const [year, setYears] = React.useState(0);

  const handleYearChange = (event) => {
    setYears(event.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>Complete Setup</title>
      </Helmet>
      <h1 className="title1">
        Hello, {localStorage.getItem("name")}. Let's finish setting up your
        account.
      </h1>
      <h2 className="title2">Select your Year Group:</h2>
      <TextField
        style={{ backgroundColor: "#f8fafc", marginLeft: "45%" }}
        required
        width="100%"
        id="filled-select"
        select
        label="Year"
        autoFocus
        value={year}
        onChange={handleYearChange}
        helperText="Please select your Year Group"
        variant="filled"
      >
        {years.map((year) => (
          <MenuItem key={year.value} value={year.value}>
            {year.label}
          </MenuItem>
        ))}
      </TextField>
      <h2 className="title2">Pick 2 words that best describe you:</h2>
      <div className="adj">
        <Card
          sx={{ backgroundColor: "#f8fafc", minWidth: 450, minHeight: 100 }}
        >
          <Box
            sx={{ backgroundColor: "#f8fafc", display: "flex" }}
            className="content"
          >
            <FormControl
              required
              error={error}
              component="fieldset"
              sx={{ m: 3 }}
              variant="standard"
            >
              <FormLabel component="legend">Pick Two</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={creative}
                      onChange={handleChange}
                      onClick={handleClick}
                      name="creative"
                    />
                  }
                  label="Creative"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={techincal}
                      onChange={handleChange}
                      onClick={handleClick}
                      name="techincal"
                    />
                  }
                  label="Technical"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={hardWorking}
                      onChange={handleChange}
                      onClick={handleClick}
                      name="hardWorking"
                    />
                  }
                  label="Hard-Working"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={practical}
                      onChange={handleChange}
                      onClick={handleClick}
                      name="practical"
                    />
                  }
                  label="Practical"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={intelligent}
                      onChange={handleChange}
                      onClick={handleClick}
                      name="intelligent"
                    />
                  }
                  label="Intelligent"
                />
              </FormGroup>
            </FormControl>
          </Box>
          <div></div>
        </Card>
      </div>
      <Button
        sx={{
          marginTop: "2%",
          marginLeft: "47.5%",
        }}
        size="large"
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
}
