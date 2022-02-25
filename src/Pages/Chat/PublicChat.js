import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Chat.css";

export default function PublicChat() {
  const [Discussions, setDiscussions] = React.useState([]);
  // eslint-disable-next-line
  const [Skip, setSkip] = React.useState(0);
  // eslint-disable-next-line
  const [Limit, setLimit] = React.useState(4);
  // eslint-disable-next-line
  let dataReturn = [];

  const [noDiscussions, setNoDiscussions] = React.useState(false);

  const link = global.config.development.status
    ? "http://localhost:5000"
    : "https://tiffingrades-api.herokuapp.com";

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };
    getDiscussions(variables);
    // eslint-disable-next-line
  }, []);

  const renderCards = Discussions.map((discussion, index) => {
    return (
      <div key={index} className="item">
        <>
          <Box>
            <Card
              style={{ backgroundColor: "#14283b" }}
              sx={{
                paddingTop: "0%",
                paddingLeft: "2.5%",
                borderRadius: "35px",
              }}
              variant="outlined"
            >
              <div>
                <h2 style={{ color: "#f8fafc" }}>
                  Discussion Name: {discussion.discussionName}
                </h2>
              </div>
              <div style={{ paddingTop: 0, paddingBottom: "1.5%" }}>
                <a
                  href={"../chat/" + discussion.discussionName}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <Button
                    style={{ marginBottom: "1.5%" }}
                    variant="contained"
                    color="secondary"
                  >
                    Join discussion
                  </Button>
                </a>
              </div>
            </Card>
          </Box>
        </>
      </div>
    );
  });

  const getDiscussions = async (variables) => {
    await fetch(
      link + "/get-discussions",
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
          setNoDiscussions(true);
        }
        setDiscussions(res.data);
      })
      .catch((error) => {
        alert(error);
        window.location.reload();
      });
  };

  if (noDiscussions === false) {
    return (
      <div>
        <Helmet>
          <title>Public Discussions</title>
        </Helmet>
        <h1 className="body-div" style={{ marginTop: "11%" }}>
          {localStorage.getItem("name")}, here are all the public Discussions
        </h1>

        {Discussions.length === 0 ? (
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
            <div className="chat-container">
              {
                // eslint-disable-next-line
                (discussion, index) => {}
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
          There are no active discussions
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
