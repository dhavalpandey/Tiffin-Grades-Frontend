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

  const [noMeets, setNoMeets] = React.useState(false);

  const link = global.config.url;

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };
    getMeets(variables);
    // eslint-disable-next-line
  }, []);

  const timeSince = (timeStamp) => {
    let now = new Date(),
      secondsPast = (timeStamp - now.getTime()) / 1000;
    if (secondsPast < 60) {
      return parseInt(secondsPast) + " seconds";
    }
    if (secondsPast < 3600) {
      return parseInt(secondsPast / 60) + " minutes";
    }
    if (secondsPast <= 86400) {
      return parseInt(secondsPast / 3600) + " hours";
    }
  };

  const renderCards = Meets.map((meet, index) => {
    let DateRightNow = Date.now();
    if (meet.expiringAt - DateRightNow > 0) {
      return (
        <div key={index} className="item">
          <>
            <Box
              sx={{
                marginLeft: "17.5%",
                maxWidth: "50vw",
                maxHeight: "10vh",
                paddingBottom: "17%",
              }}
            >
              <Card
                style={{ backgroundColor: "#14283b" }}
                sx={{
                  marginLeft: "30%",
                  maxWidth: "50vw",
                  maxHeight: "60vh",
                  paddingTop: "0%",
                  paddingLeft: "2.5%",
                  borderRadius: "35px",
                }}
                variant="outlined"
              >
                <h2 style={{ color: "#f8fafc" }}>
                  Host:{" "}
                  {meet.creatorName === localStorage.getItem("name")
                    ? "You"
                    : meet.creatorName}
                </h2>
                <div>
                  <h2 style={{ color: "#f8fafc" }}>Subject: {meet.subject}</h2>
                </div>
                <h2 style={{ color: "#f8fafc" }}>
                  Ending in: {timeSince(meet.expiringAt)}
                </h2>
                <img
                  referrerPolicy="no-referrer"
                  style={{ float: "right", margin: "-18% 4% 15px 0px" }}
                  src={meet.profilePicture}
                  alt="Host PFP"
                />
                <div style={{ paddingTop: 0, paddingBottom: "1.5%" }}>
                  <a
                    target={"_blank"}
                    href={meet.link}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    rel="noreferrer"
                  >
                    <Button
                      style={{ marginBottom: "1.5%" }}
                      variant="contained"
                      color="secondary"
                    >
                      Join Meet
                    </Button>
                  </a>
                </div>
              </Card>
            </Box>
          </>
        </div>
      );
    } else {
      return (
        <h2
          style={{ marginTop: "10%", textAlign: "center", overflow: "hidden" }}
        >
          There are no active meets
        </h2>
      );
    }
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
        if (res.data.length === 0) {
          setNoMeets(true);
        }
        setMeets(res.data);
      })
      .catch((error) => {
        alert(error);
        window.location.reload();
      });
  };

  if (noMeets === false) {
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
      </div>
    );
  } else {
    return (
      <div>
        <Helmet>
          <title>Active Study Sessions</title>
        </Helmet>
        <h1 className="body-div">
          {localStorage.getItem("name")}, here are the results
        </h1>
        <h2
          style={{ marginTop: "2%", textAlign: "center", overflow: "hidden" }}
        >
          There are no active meets
        </h2>
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "47%",
            }}
            className="backButton1"
            variant="contained"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }
}
