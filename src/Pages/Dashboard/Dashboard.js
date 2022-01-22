import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import WorkSvg from "./work.svg";
import DisoverSvg from "./discover.svg";
import { CardActionArea } from "@mui/material";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <h1 className="body-div">Hello, {localStorage.getItem("name")}</h1>
      <div className="cards">
        <div className="card1">
          <Card color="black" sx={{ maxHeight: 400, maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="optionsSelector"
                height="230"
                width="100"
                image={WorkSvg}
              />
            </CardActionArea>
            <h2 className="h2">Find your options</h2>
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
        <div>
          <Card color="black" sx={{ maxHeight: 400, maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="optionsSelector"
                height="230"
                width="100"
                image={DisoverSvg}
              />
            </CardActionArea>
            <h2 className="h2">Discover the most popular subjects</h2>
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
      </div>
    </div>
  );
}
