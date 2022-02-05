import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import WorkSvg from "./work.svg";
import DisoverSvg from "./discover.svg";
import Results from "./search.svg";
import Meet from "./meet.svg";
import { CardActionArea } from "@mui/material";
import "./Dashboard.css";
import Tooltip from "@mui/material/Tooltip";
import { Helmet } from "react-helmet";

export default function Dashboard() {
  const hasOptions = localStorage.getItem("top3");
  const title = hasOptions
    ? ""
    : "Please submit your options first to view this page";

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className="body-div">Hello, {localStorage.getItem("name")}</h1>
      <div className="cards">
        <div className="card1">
          <Card color="black" sx={{ minHeight: 360, width: "25vw" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="optionsSelector"
                height="230"
                width="100"
                image={WorkSvg}
              />
            </CardActionArea>
            <h2 className="h2">Find your Options</h2>
            <CardActions>
              <div className="btn">
                <Button
                  onClick={() => {
                    window.location.replace("/options");
                  }}
                  variant="contained"
                  color="primary"
                >
                  Take me there
                </Button>
              </div>
            </CardActions>
          </Card>
        </div>
        <div className="card2">
          <Card color="black" sx={{ minHeight: 360, width: "25vw" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="optionsSelector"
                height="230"
                width="100"
                image={DisoverSvg}
              />
            </CardActionArea>
            <h2 className="h2">Popular Subjects</h2>
            <CardActions>
              <div className="btn">
                <Button
                  onClick={() => {
                    window.location.replace("/discover");
                  }}
                  variant="contained"
                  color="primary"
                >
                  Take me there
                </Button>
              </div>
            </CardActions>
          </Card>
        </div>
        <div className="card3">
          <Card color="black" sx={{ minHeight: 360, width: "25vw" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="optionsSelector"
                height="230"
                width="100"
                image={Results}
              />
            </CardActionArea>
            <h2 className="h2">Your Results</h2>
            <CardActions>
              <Tooltip title={title} placement="bottom">
                <div className="btn">
                  <Button
                    disabled={!hasOptions}
                    onClick={() => {
                      window.location.replace("/results");
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Take me there
                  </Button>
                </div>
              </Tooltip>
            </CardActions>
          </Card>
        </div>
      </div>
      <div className="card4">
        <Card color="black" sx={{ minHeight: 360, width: "25vw" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="optionsSelector"
              height="230"
              width="100"
              image={Meet}
            />
          </CardActionArea>
          <h2 className="h2">Study Sessions</h2>
          <CardActions>
            <div className="btn">
              <Button
                onClick={() => {
                  window.location.replace("/meet");
                }}
                variant="contained"
                color="primary"
              >
                Take me there
              </Button>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
