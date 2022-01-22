import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Switch from "@mui/material/Switch";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "./Option.css";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Options() {
  //Art
  const [artAbility, setArtAbility] = useState(0);
  const [artInterest, setArtInterest] = useState(0);
  const [artTeachers, setArtTeachers] = useState(0);
  const [artTrips, setArtTrips] = useState(0);
  const [artFriends, setArtFriends] = useState(0);
  const [artChecked, setArtChecked] = useState(false);

  //DT
  const [dtAbility, setDtAbility] = useState(0);
  const [dtInterest, setDtInterest] = useState(0);
  const [dtTeachers, setDtTeachers] = useState(0);
  const [dtTrips, setDtTrips] = useState(0);
  const [dtFriends, setDtFriends] = useState(0);
  const [dtChecked, setDtChecked] = useState(false);

  //Drama
  const [dramaAbility, setdramaAbility] = useState(0);
  const [dramaInterest, setdramaInterest] = useState(0);
  const [dramaTeachers, setdramaTeachers] = useState(0);
  const [dramaTrips, setdramaTrips] = useState(0);
  const [dramaFriends, setdramaFriends] = useState(0);
  const [dramaChecked, setdramaChecked] = useState(false);

  //Geography
  const [geoAbility, setgeoAbility] = useState(0);
  const [geoInterest, setgeoInterest] = useState(0);
  const [geoTeachers, setgeoTeachers] = useState(0);
  const [geoTrips, setgeoTrips] = useState(0);
  const [geoFriends, setgeoFriends] = useState(0);
  const [geoChecked, setgeoChecked] = useState(false);

  //latin
  const [latinAbility, setlatinAbility] = useState(0);
  const [latinInterest, setlatinInterest] = useState(0);
  const [latinTeachers, setlatinTeachers] = useState(0);
  const [latinTrips, setlatinTrips] = useState(0);
  const [latinFriends, setlatinFriends] = useState(0);
  const [latinChecked, setlatinChecked] = useState(false);

  //History
  const [historyAbility, sethistoryAbility] = useState(0);
  const [historyInterest, sethistoryInterest] = useState(0);
  const [historyTeachers, sethistoryTeachers] = useState(0);
  const [historyTrips, sethistoryTrips] = useState(0);
  const [historyFriends, sethistoryFriends] = useState(0);
  const [historyChecked, sethistoryChecked] = useState(false);

  //Music
  const [musicAbility, setmusicAbility] = useState(0);
  const [musicInterest, setmusicInterest] = useState(0);
  const [musicTeachers, setmusicTeachers] = useState(0);
  const [musicTrips, setmusicTrips] = useState(0);
  const [musicFriends, setmusicFriends] = useState(0);
  const [musicChecked, setmusicChecked] = useState(false);

  //PE
  const [peAbility, setpeAbility] = useState(0);
  const [peInterest, setpeInterest] = useState(0);
  const [peTeachers, setpeTeachers] = useState(0);
  const [peTrips, setpeTrips] = useState(0);
  const [peFriends, setpeFriends] = useState(0);
  const [peChecked, setpeChecked] = useState(false);

  //Spanish
  const [spanishAbility, setspanishAbility] = useState(0);
  const [spanishInterest, setspanishInterest] = useState(0);
  const [spanishTeachers, setspanishTeachers] = useState(0);
  const [spanishTrips, setspanishTrips] = useState(0);
  const [spanishFriends, setspanishFriends] = useState(0);
  const [spanishChecked, setspanishChecked] = useState(false);

  //RP
  const [rpAbility, setrpAbility] = useState(0);
  const [rpInterest, setrpInterest] = useState(0);
  const [rpTeachers, setrpTeachers] = useState(0);
  const [rpTrips, setrpTrips] = useState(0);
  const [rpFriends, setrpFriends] = useState(0);
  const [rpChecked, setrpChecked] = useState(false);

  let artPercentage =
    ((artAbility / 5) * 0.4 +
      (artInterest / 5) * 0.4 +
      (artTeachers / 5) * 0.05 +
      (artTrips / 5) * 0.1 +
      (artFriends / 2) * 0.05) *
    100;

  let dtPercentage =
    ((dtAbility / 5) * 0.4 +
      (dtInterest / 5) * 0.4 +
      (dtTeachers / 5) * 0.05 +
      (dtTrips / 5) * 0.1 +
      (dtFriends / 2) * 0.05) *
    100;

  let dramaPercentage =
    ((dramaAbility / 5) * 0.4 +
      (dramaInterest / 5) * 0.4 +
      (dramaTeachers / 5) * 0.05 +
      (dramaTrips / 5) * 0.1 +
      (dramaFriends / 2) * 0.05) *
    100;

  let geoPercentage =
    ((geoAbility / 5) * 0.4 +
      (geoInterest / 5) * 0.4 +
      (geoTeachers / 5) * 0.05 +
      (geoTrips / 5) * 0.1 +
      (geoFriends / 2) * 0.05) *
    100;

  let latinPercentage =
    ((latinAbility / 5) * 0.4 +
      (latinInterest / 5) * 0.4 +
      (latinTeachers / 5) * 0.05 +
      (latinTrips / 5) * 0.1 +
      (latinFriends / 2) * 0.05) *
    100;

  let historyPercentage =
    ((historyAbility / 5) * 0.4 +
      (historyInterest / 5) * 0.4 +
      (historyTeachers / 5) * 0.05 +
      (historyTrips / 5) * 0.1 +
      (historyFriends / 2) * 0.05) *
    100;

  let musicPercentage =
    ((musicAbility / 5) * 0.4 +
      (musicInterest / 5) * 0.4 +
      (musicTeachers / 5) * 0.05 +
      (musicTrips / 5) * 0.1 +
      (musicFriends / 2) * 0.05) *
    100;

  let pePercentage =
    ((peAbility / 5) * 0.4 +
      (peInterest / 5) * 0.4 +
      (peTeachers / 5) * 0.05 +
      (peTrips / 5) * 0.1 +
      (peFriends / 2) * 0.05) *
    100;

  let spanishPercentage =
    ((spanishAbility / 5) * 0.4 +
      (spanishInterest / 5) * 0.4 +
      (spanishTeachers / 5) * 0.05 +
      (spanishTrips / 5) * 0.1 +
      (spanishFriends / 2) * 0.05) *
    100;

  let rpPercentage =
    ((rpAbility / 5) * 0.4 +
      (rpInterest / 5) * 0.4 +
      (rpTeachers / 5) * 0.05 +
      (rpTrips / 5) * 0.1 +
      (rpFriends / 2) * 0.05) *
    100;

  return (
    <div>
      <div className="heading1">
        <h1>
          {localStorage.getItem("name")}, please fill out this information to
          discover your options.
        </h1>
      </div>
      <div className="view">
        <Card className="card" sx={{ width: 400 }}>
          <CardContent>
            <div className="titles">
              <h1>Art and Design</h1>
              <div className="progress">
                <CircularProgressWithLabel
                  size={60}
                  thickness={5}
                  value={
                    Math.round((artPercentage + Number.EPSILON) * 100) / 100
                  }
                />
              </div>
            </div>
            <div>
              <h3>Rate your interest in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={artInterest}
                onChange={(event, newValue) => {
                  setArtInterest(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate your ability in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={artAbility}
                onChange={(event, newValue) => {
                  setArtAbility(newValue);
                }}
              />
            </div>
            <div>
              <h3>How are the teachers for this subject?</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={artTeachers}
                onChange={(event, newValue) => {
                  setArtTeachers(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate the trips in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={artTrips}
                onChange={(event, newValue) => {
                  setArtTrips(newValue);
                }}
              />
              <div>
                <h3>Are your friends doing this subject?</h3>
                <Switch
                  checked={artChecked}
                  onChange={(event) => {
                    setArtChecked(event.target.checked);
                    if (!artChecked) {
                      setArtFriends(2);
                    } else {
                      setArtFriends(0);
                    }
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card" sx={{ width: 400 }}>
          <CardContent>
            <div className="titles">
              <h1>Design & Tech</h1>
              <div className="progress">
                <CircularProgressWithLabel
                  size={60}
                  thickness={5}
                  value={
                    Math.round((dtPercentage + Number.EPSILON) * 100) / 100
                  }
                />
              </div>
            </div>
            <div>
              <h3>Rate your interest in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={dtInterest}
                onChange={(event, newValue) => {
                  setDtInterest(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate your ability in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={dtAbility}
                onChange={(event, newValue) => {
                  setDtAbility(newValue);
                }}
              />
            </div>
            <div>
              <h3>How are the teachers for this subject?</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={dtTeachers}
                onChange={(event, newValue) => {
                  setDtTeachers(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate the trips in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={dtTrips}
                onChange={(event, newValue) => {
                  setDtTrips(newValue);
                }}
              />
              <div>
                <h3>Are your friends doing this subject?</h3>
                <Switch
                  checked={dtChecked}
                  onChange={(event) => {
                    setDtChecked(event.target.checked);
                    if (!dtChecked) {
                      setDtFriends(2);
                    } else {
                      setDtFriends(0);
                    }
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card" sx={{ width: 400 }}>
          <CardContent>
            <div className="titles">
              <h1>Drama</h1>
              <div className="progress">
                <CircularProgressWithLabel
                  size={60}
                  thickness={5}
                  value={
                    Math.round((dramaPercentage + Number.EPSILON) * 100) / 100
                  }
                />
              </div>
            </div>
            <div>
              <h3>Rate your interest in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={dramaInterest}
                onChange={(event, newValue) => {
                  setdramaInterest(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate your ability in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={dramaAbility}
                onChange={(event, newValue) => {
                  setdramaAbility(newValue);
                }}
              />
            </div>
            <div>
              <h3>How are the teachers for this subject?</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={dramaTeachers}
                onChange={(event, newValue) => {
                  setdramaTeachers(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate the trips in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={dramaTrips}
                onChange={(event, newValue) => {
                  setdramaTrips(newValue);
                }}
              />
              <div>
                <h3>Are your friends doing this subject?</h3>
                <Switch
                  checked={dramaChecked}
                  onChange={(event) => {
                    setdramaChecked(event.target.checked);
                    if (!dramaChecked) {
                      setdramaFriends(2);
                    } else {
                      setdramaFriends(0);
                    }
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card" sx={{ width: 400 }}>
          <CardContent>
            <div className="titles">
              <h1>Geography</h1>
              <div className="progress">
                <CircularProgressWithLabel
                  size={60}
                  thickness={5}
                  value={
                    Math.round((geoPercentage + Number.EPSILON) * 100) / 100
                  }
                />
              </div>
            </div>
            <div>
              <h3>Rate your interest in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={geoInterest}
                onChange={(event, newValue) => {
                  setgeoInterest(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate your ability in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={geoAbility}
                onChange={(event, newValue) => {
                  setgeoAbility(newValue);
                }}
              />
            </div>
            <div>
              <h3>How are the teachers for this subject?</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={geoTeachers}
                onChange={(event, newValue) => {
                  setgeoTeachers(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate the trips in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={geoTrips}
                onChange={(event, newValue) => {
                  setgeoTrips(newValue);
                }}
              />
              <div>
                <h3>Are your friends doing this subject?</h3>
                <Switch
                  checked={geoChecked}
                  onChange={(event) => {
                    setgeoChecked(event.target.checked);
                    if (!geoChecked) {
                      setgeoFriends(2);
                    } else {
                      setgeoFriends(0);
                    }
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card" sx={{ width: 400 }}>
          <CardContent>
            <div className="titles">
              <h1>Latin</h1>
              <div className="progress">
                <CircularProgressWithLabel
                  size={60}
                  thickness={5}
                  value={
                    Math.round((latinPercentage + Number.EPSILON) * 100) / 100
                  }
                />
              </div>
            </div>
            <div>
              <h3>Rate your interest in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={latinInterest}
                onChange={(event, newValue) => {
                  setlatinInterest(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate your ability in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={latinAbility}
                onChange={(event, newValue) => {
                  setlatinAbility(newValue);
                }}
              />
            </div>
            <div>
              <h3>How are the teachers for this subject?</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={latinTeachers}
                onChange={(event, newValue) => {
                  setlatinTeachers(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate the trips in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={latinTrips}
                onChange={(event, newValue) => {
                  setlatinTrips(newValue);
                }}
              />
              <div>
                <h3>Are your friends doing this subject?</h3>
                <Switch
                  checked={latinChecked}
                  onChange={(event) => {
                    setlatinChecked(event.target.checked);
                    if (!latinChecked) {
                      setlatinFriends(2);
                    } else {
                      setlatinFriends(0);
                    }
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card" sx={{ width: 400 }}>
          <CardContent>
            <div className="titles">
              <h1>History</h1>
              <div className="progress">
                <CircularProgressWithLabel
                  size={60}
                  thickness={5}
                  value={
                    Math.round((historyPercentage + Number.EPSILON) * 100) / 100
                  }
                />
              </div>
            </div>
            <div>
              <h3>Rate your interest in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={historyInterest}
                onChange={(event, newValue) => {
                  sethistoryInterest(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate your ability in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={historyAbility}
                onChange={(event, newValue) => {
                  sethistoryAbility(newValue);
                }}
              />
            </div>
            <div>
              <h3>How are the teachers for this subject?</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={historyTeachers}
                onChange={(event, newValue) => {
                  sethistoryTeachers(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate the trips in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={historyTrips}
                onChange={(event, newValue) => {
                  sethistoryTrips(newValue);
                }}
              />
              <div>
                <h3>Are your friends doing this subject?</h3>
                <Switch
                  checked={historyChecked}
                  onChange={(event) => {
                    sethistoryChecked(event.target.checked);
                    if (!historyChecked) {
                      sethistoryFriends(2);
                    } else {
                      sethistoryFriends(0);
                    }
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card" sx={{ width: 400 }}>
          <CardContent>
            <div className="titles">
              <h1>Music</h1>
              <div className="progress">
                <CircularProgressWithLabel
                  size={60}
                  thickness={5}
                  value={
                    Math.round((musicPercentage + Number.EPSILON) * 100) / 100
                  }
                />
              </div>
            </div>
            <div>
              <h3>Rate your interest in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={musicInterest}
                onChange={(event, newValue) => {
                  setmusicInterest(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate your ability in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={musicAbility}
                onChange={(event, newValue) => {
                  setmusicAbility(newValue);
                }}
              />
            </div>
            <div>
              <h3>How are the teachers for this subject?</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={musicTeachers}
                onChange={(event, newValue) => {
                  setmusicTeachers(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate the trips in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={musicTrips}
                onChange={(event, newValue) => {
                  setmusicTrips(newValue);
                }}
              />
              <div>
                <h3>Are your friends doing this subject?</h3>
                <Switch
                  checked={musicChecked}
                  onChange={(event) => {
                    setmusicChecked(event.target.checked);
                    if (!musicChecked) {
                      setmusicFriends(2);
                    } else {
                      setmusicFriends(0);
                    }
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card" sx={{ width: 400 }}>
          <CardContent>
            <div className="titles">
              <h1>PE</h1>
              <div className="progress">
                <CircularProgressWithLabel
                  size={60}
                  thickness={5}
                  value={
                    Math.round((pePercentage + Number.EPSILON) * 100) / 100
                  }
                />
              </div>
            </div>
            <div>
              <h3>Rate your interest in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={peInterest}
                onChange={(event, newValue) => {
                  setpeInterest(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate your ability in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={peAbility}
                onChange={(event, newValue) => {
                  setpeAbility(newValue);
                }}
              />
            </div>
            <div>
              <h3>How are the teachers for this subject?</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={peTeachers}
                onChange={(event, newValue) => {
                  setpeTeachers(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate the trips in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={peTrips}
                onChange={(event, newValue) => {
                  setpeTrips(newValue);
                }}
              />
              <div>
                <h3>Are your friends doing this subject?</h3>
                <Switch
                  checked={peChecked}
                  onChange={(event) => {
                    setpeChecked(event.target.checked);
                    if (!peChecked) {
                      setpeFriends(2);
                    } else {
                      setpeFriends(0);
                    }
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card" sx={{ width: 400 }}>
          <CardContent>
            <div className="titles">
              <h1>Spanish</h1>
              <div className="progress">
                <CircularProgressWithLabel
                  size={60}
                  thickness={5}
                  value={
                    Math.round((spanishPercentage + Number.EPSILON) * 100) / 100
                  }
                />
              </div>
            </div>
            <div>
              <h3>Rate your interest in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={spanishInterest}
                onChange={(event, newValue) => {
                  setspanishInterest(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate your ability in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={spanishAbility}
                onChange={(event, newValue) => {
                  setspanishAbility(newValue);
                }}
              />
            </div>
            <div>
              <h3>How are the teachers for this subject?</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={spanishTeachers}
                onChange={(event, newValue) => {
                  setspanishTeachers(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate the trips in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={spanishTrips}
                onChange={(event, newValue) => {
                  setspanishTrips(newValue);
                }}
              />
              <div>
                <h3>Are your friends doing this subject?</h3>
                <Switch
                  checked={spanishChecked}
                  onChange={(event) => {
                    setspanishChecked(event.target.checked);
                    if (!spanishChecked) {
                      setspanishFriends(2);
                    } else {
                      setspanishFriends(0);
                    }
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card" sx={{ width: 400 }}>
          <CardContent>
            <div className="titles">
              <h1>RP</h1>
              <div className="progress">
                <CircularProgressWithLabel
                  size={60}
                  thickness={5}
                  value={
                    Math.round((rpPercentage + Number.EPSILON) * 100) / 100
                  }
                />
              </div>
            </div>
            <div>
              <h3>Rate your interest in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={rpInterest}
                onChange={(event, newValue) => {
                  setrpInterest(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate your ability in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={rpAbility}
                onChange={(event, newValue) => {
                  setrpAbility(newValue);
                }}
              />
            </div>
            <div>
              <h3>How are the teachers for this subject?</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={rpTeachers}
                onChange={(event, newValue) => {
                  setrpTeachers(newValue);
                }}
              />
            </div>
            <div>
              <h3>Rate the trips in the subject:</h3>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={rpTrips}
                onChange={(event, newValue) => {
                  setrpTrips(newValue);
                }}
              />
              <div>
                <h3>Are your friends doing this subject?</h3>
                <Switch
                  checked={rpChecked}
                  onChange={(event) => {
                    setrpChecked(event.target.checked);
                    if (!rpChecked) {
                      setrpFriends(2);
                    } else {
                      setrpFriends(0);
                    }
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}