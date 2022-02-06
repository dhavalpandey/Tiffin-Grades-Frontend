import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Results.css";

export default function Results() {
  const [item1, setitem1] = useState([]);
  const [item2, setitem2] = useState([]);
  const [item3, setitem3] = useState([]);
  const [item4, setitem4] = useState([]);
  const [item5, setitem5] = useState([]);
  const [item6, setitem6] = useState([]);
  const [item7, setitem7] = useState([]);
  const [item8, setitem8] = useState([]);
  const [item9, setitem9] = useState([]);
  const [item10, setitem10] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);

  const link = global.config.development.status
    ? "http://localhost:5000"
    : "https://tiffingrades-api.herokuapp.com";

  const fetchData = async () => {
    setLoading(true);
    await fetch(link + "/results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        googleId: localStorage.getItem("google_id"),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let entries = Object.entries(res.data);
        setitem1(entries[0]);
        setitem2(entries[1]);
        setitem3(entries[2]);
        setitem4(entries[3]);
        setitem5(entries[4]);
        setitem6(entries[5]);
        setitem7(entries[6]);
        setitem8(entries[7]);
        setitem9(entries[8]);
        setitem10(entries[9]);

        setTimeout(() => {
          setFetched(true);
        }, 1500);
      })
      .catch((error) => {
        alert("Failed to fetch your options.");
        window.location.reload();
      });
  };

  if (localStorage.getItem("top3")) {
    if (fetched) {
      return (
        <div className="table">
          <Helmet>
            <title>Results</title>
          </Helmet>
          <TableContainer
            component={Paper}
            sx={{ minWidth: 600, maxWidth: 1000 }}
          >
            <Table sx={{ minWidth: 600, maxWidth: 1000 }}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h1>Subject</h1>
                  </TableCell>
                  <TableCell align="right">
                    <h1>Our Recommendation</h1>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item1[0].toUpperCase()}
                  </TableCell>
                  <TableCell align="right">{item1[1]}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item2[0].toUpperCase()}
                  </TableCell>
                  <TableCell align="right">{item2[1]}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item3[0].toUpperCase()}
                  </TableCell>
                  <TableCell align="right">{item3[1]}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item4[0].toUpperCase()}
                  </TableCell>
                  <TableCell align="right">{item4[1]}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item5[0].toUpperCase()}
                  </TableCell>
                  <TableCell align="right">{item5[1]}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item6[0].toUpperCase()}
                  </TableCell>
                  <TableCell align="right">{item6[1]}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item7[0].toUpperCase()}
                  </TableCell>
                  <TableCell align="right">{item7[1]}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item8[0].toUpperCase()}
                  </TableCell>
                  <TableCell align="right">{item8[1]}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item9[0].toUpperCase()}
                  </TableCell>
                  <TableCell align="right">{item9[1]}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item10[0].toUpperCase()}
                  </TableCell>
                  <TableCell align="right">{item10[1]}%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className="backButton">
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Button variant="contained">Back to Home</Button>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="fetchBtn">
          <LoadingButton
            variant="contained"
            onClick={fetchData}
            size="large"
            loading={loading}
          >
            Get your Options
          </LoadingButton>
        </div>
      );
    }
  } else {
    window.location.replace("/");
  }
}
