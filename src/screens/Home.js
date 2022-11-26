import React from "react";
import "../styles/Home.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="qoute-container">
        <p>
          EdShare is a modern plateform for students made by Club Emicatronic
        </p>
        <p>
          As an engineering students we know your needs and the problems you
          face. So we provide a plateform where you can find courses exams and
          valuable informations
        </p>
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 8,
        }}
      >
        <Link to="/universities">
          <Button variant="outlined" sx={{ padding: 5 }} color={"warning"}>
            Universities
          </Button>
        </Link>
      </Box>
    </div>
  );
}
