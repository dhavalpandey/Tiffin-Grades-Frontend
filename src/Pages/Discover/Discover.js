import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LoadingButton from "@mui/lab/LoadingButton";
import Tooltip from "@mui/material/Tooltip";
import { Helmet } from "react-helmet";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Discover() {
  let data;
  let obj;
  let actual;

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
    await fetch(link + "/subject-ranking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        data = res.data;
        obj = {
          [data[0]]: data[1],
          [data[2]]: data[3],
          [data[4]]: data[5],
          [data[6]]: data[7],
          [data[8]]: data[9],
          [data[10]]: data[11],
          [data[12]]: data[13],
          [data[14]]: data[15],
          [data[16]]: data[17],
          [data[18]]: data[19],
        };

        let origonalEntries = Object.entries(obj);
        let sorted = origonalEntries.sort((a, b) => b[1] - a[1]);
        let results = Object.fromEntries(sorted);

        let entries = Object.entries(results);
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
        alert("Failed to get popular subjects");
        window.location.reload();
      });
    console.log(actual);
  };

  if (fetched) {
    return (
      <div className="table">
        <Helmet>
          <title>Popular Subjects</title>
        </Helmet>
        <TableContainer
          component={Paper}
          sx={{ minWidth: 600, maxWidth: 1000, marginTop: "13%" }}
        >
          <Table sx={{ minWidth: 600, maxWidth: 1000 }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <h1>Subject</h1>
                </TableCell>
                <TableCell align="right">
                  <Tooltip
                    title="The more points a subject has, the more popularity it has"
                    placement="right"
                  >
                    <h1>Total Points</h1>
                  </Tooltip>
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
                <TableCell align="right">{item1[1]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {item2[0].toUpperCase()}
                </TableCell>
                <TableCell align="right">{item2[1]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {item3[0].toUpperCase()}
                </TableCell>
                <TableCell align="right">{item3[1]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {item4[0].toUpperCase()}
                </TableCell>
                <TableCell align="right">{item4[1]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {item5[0].toUpperCase()}
                </TableCell>
                <TableCell align="right">{item5[1]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {item6[0].toUpperCase()}
                </TableCell>
                <TableCell align="right">{item6[1]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {item7[0].toUpperCase()}
                </TableCell>
                <TableCell align="right">{item7[1]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {item8[0].toUpperCase()}
                </TableCell>
                <TableCell align="right">{item8[1]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {item9[0].toUpperCase()}
                </TableCell>
                <TableCell align="right">{item9[1]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {item10[0].toUpperCase()}
                </TableCell>
                <TableCell align="right">{item10[1]}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <div className="backButton">
            <Button variant="contained">Back to Home</Button>
          </div>
        </Link>
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
          View popular subjects
        </LoadingButton>
      </div>
    );
  }
}
