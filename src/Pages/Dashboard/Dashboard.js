import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import WorkSvg from "./work.svg";
import DisoverSvg from "./discover.svg";
import Results from "./search.svg";
import { CardActionArea } from "@mui/material";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <h1 className="body-div">Hello, {localStorage.getItem("name")}</h1>
      <div className="cards">
        <div className="card1">
          <Card color="black" sx={{ height: 360, width: 500 }}>
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
          <Card color="black" sx={{ height: 360, width: 500 }}>
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
        <div className="card3">
          <Card color="black" sx={{ width: 500, height: 360 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="optionsSelector"
                height="230"
                width="100"
                image={Results}
              />
            </CardActionArea>
            <h2 className="h2">Go back to your results</h2>
            <CardActions>
              <div className="btn">
                <Button
                  onClick={() => {
                    window.location.replace("/results");
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
