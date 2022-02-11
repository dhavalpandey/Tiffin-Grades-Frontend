import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import WorkSvg from "./work.svg";
import DisoverSvg from "./discover.svg";
import Meet from "./meet.svg";
import { CardActionArea } from "@mui/material";
import "./Dashboard.css";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const history = useHistory();

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="cards">
        <div className="card1">
          <Card
            style={{ backgroundColor: "#14283b" }}
            sx={{ minHeight: 360, width: "25vw" }}
          >
            <CardActionArea style={{ backgroundColor: "#f8fafc" }}>
              <CardMedia
                component="img"
                alt="optionsSelector"
                height="230"
                width="100"
                image={WorkSvg}
              />
            </CardActionArea>
            <h2 className="h2" style={{ color: "#f8fafc" }}>
              GCSE Options
            </h2>
            <CardActions>
              <div className="btn">
                <Button
                  onClick={() => {
                    history.push("/options");
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
          <Card
            style={{ backgroundColor: "#14283b" }}
            color="black"
            sx={{ minHeight: 360, width: "25vw" }}
          >
            <CardActionArea style={{ backgroundColor: "#f8fafc" }}>
              <CardMedia
                component="img"
                alt="optionsSelector"
                height="230"
                width="100"
                image={Meet}
              />
            </CardActionArea>
            <h2 className="h2" style={{ color: "#f8fafc" }}>
              Study Sessions
            </h2>
            <CardActions>
              <div className="btn">
                <Button
                  onClick={() => {
                    history.push("/meet");
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
          <Card
            color="black"
            style={{ backgroundColor: "#14283b" }}
            sx={{ minHeight: 360, width: "25vw" }}
          >
            <CardActionArea style={{ backgroundColor: "#f8fafc" }}>
              <CardMedia
                component="img"
                alt="optionsSelector"
                height="230"
                width="100"
                image={DisoverSvg}
              />
            </CardActionArea>
            <h2 className="h2" style={{ color: "#f8fafc" }}>
              Popular Subjects
            </h2>
            <CardActions>
              <div className="btn">
                <Button
                  onClick={() => {
                    history.push("/discover");
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
      {/* <div className="card4">
        <Card
          style={{ backgroundColor: "#14283b" }}
          color="black"
          sx={{ minHeight: 360, width: "25vw" }}
        >
          <CardActionArea style={{ backgroundColor: "#f8fafc" }}>
            <CardMedia
              component="img"
              alt="optionsSelector"
              height="230"
              width="100"
              image={Results}
            />
          </CardActionArea>
          <h2 className="h2" style={{ color: "#f8fafc" }}>
            Your Results
          </h2>
          <CardActions>
            <Tooltip title={title} placement="bottom">
              <div className="btn">
                <Button
                  disabled={!hasOptions}
                  onClick={() => {
                    history.push("/results");
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
      </div> */}
    </div>
  );
}
