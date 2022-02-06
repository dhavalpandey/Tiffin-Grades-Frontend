import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Meet.css";

export default function ActiveMeets() {
  const [Meets, setMeets] = React.useState([]);
  // eslint-disable-next-line
  const [Skip, setSkip] = React.useState(0);
  // eslint-disable-next-line
  const [Limit, setLimit] = React.useState(4);
  // eslint-disable-next-line
  let dataReturn = [];

  const link = global.config.development.status
    ? "http://localhost:5000"
    : "https://tiffingrades-api.herokuapp.com";

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };
    getMeets(variables);
    // eslint-disable-next-line
  }, []);

  const renderCards = Meets.map((meet, index) => {
    let DateRightNow = Date.now();
    let DateNow = new Date(meet.expiringAt - DateRightNow);
    return (
      <div key={index} className="item">
        <>
          <Box
            sx={{
              marginLeft: "17.5%",
              maxWidth: "50vw",
              maxHeight: "10vh",
              paddingTop: "4%",
              paddingBottom: "75px",
            }}
          >
            <Card
              sx={{
                marginLeft: "30%",
                maxWidth: "50vw",
                maxHeight: "60vh",
                paddingTop: "0%",
                paddingLeft: "2.5%",
              }}
              variant="outlined"
            >
              <h2>Host: {meet.creatorName}</h2>
              <div>
                <h2>Subject: {meet.subject}</h2>
              </div>
              <h2>
                Ending in:{" "}
                {DateNow.getMinutes() < 60
                  ? DateNow.getMinutes() + " minutes"
                  : DateNow.getHours() + "hours"}
              </h2>
              <div style={{ paddingTop: 0, paddingBottom: "1.5%" }}>
                <a
                  target={"_blank"}
                  href={meet.link}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  rel="noreferrer"
                >
                  <Button variant="contained" color="secondary">
                    Join Meet
                  </Button>
                </a>
              </div>
            </Card>
          </Box>
        </>
      </div>
    );
  });

  const getMeets = async (variables) => {
    await fetch(
      link + "/get-meets",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          googleId: localStorage.getItem("google_id"),
        }),
      },
      variables,
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dataReturn = res.data;
        setMeets(res.data);
      })
      .catch((error) => {
        window.location.replace("/");
        window.location.reload();
      });
  };

  return (
    <div>
      <Helmet>
        <title>Active Study Sessions</title>
      </Helmet>
      <h1 className="body-div">
        {localStorage.getItem("name")}, here are all the active Study Sessions
      </h1>
      {Meets.length === 0 ? (
        <Box sx={{ width: "85vw", marginLeft: "5%" }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={true} />
          <br></br>
          <Skeleton animation="wave" />
          <Skeleton animation={true} />
          <br></br>
          <Skeleton animation="wave" />
          <Skeleton animation={true} />
          <br></br>
          <Skeleton animation="wave" />
          <Skeleton animation={true} />
          <br></br>
          <CircularProgress />
        </Box>
      ) : (
        <div>
          <div className="container">
            {
              // eslint-disable-next-line
              (meet, index) => {}
            }
            {renderCards}
          </div>
        </div>
      )}
      <div className="backButton1">
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <Button variant="contained">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
