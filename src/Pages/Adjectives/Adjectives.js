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

  const handleSubmit = async (event) => {
    if (!error) {
      await fetch("https://tiffingrades-api.herokuapp.com/adjectives", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          googleId: localStorage.getItem("google_id"),
          state,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.status === "OK") {
            localStorage.setItem("adjectives_submitted", true);
            window.location.replace("/");
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
      alert("Please select 2 options.");
    }
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
      <h2 className="title2">Pick 2 words that best describe you:</h2>
      <div className="adj">
        <Card sx={{ minWidth: 550, minHeight: 350 }}>
          <Box sx={{ display: "flex" }} className="content">
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
                  label="Techincal"
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
          <div>
            <Button
              sx={{
                marginLeft: "40%",
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
