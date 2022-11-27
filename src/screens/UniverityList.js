import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/university.css";
import { Row } from "../components/global";
import PublicIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";
import MailIcon from "@mui/icons-material/Mail";
import GroupIcon from "@mui/icons-material/Group";
import { Link, useNavigate } from "react-router-dom";
import { collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { Refs } from "../config/Ref";
import Image from "../components/Image";
export function UniversityCard({ data }) {
  const navigate = useNavigate();
  return (
    <div className="UniversityCard-container">
      <Card sx={{ maxWidth: 345, margin: 2 }}>
        {/* <CardMedia children={() => {}} /> */}
        {/* <img src={require("../static/emi.png")} /> */}
        <Image url={data.imgUrl} height={100} width={150}/>
        <CardContent>
          <Row>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "black" }}
            >
              {data.name}
            </Typography>
          </Row>
          <Row>
            <PublicIcon fontSize="medium" />
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ color: "GrayText", fontSize: 16 }}
            >
              {data.adresse}
            </Typography>
          </Row>
          <Row>
            <MailIcon fontSize="medium" />
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ color: "GrayText", fontSize: 16 }}
            >
              {data.email}
            </Typography>
          </Row>
          <Row>
            <GroupIcon fontSize="medium" />
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ color: "GrayText", fontSize: 16 }}
            >
              {data.nbrstudents} élèves
            </Typography>
          </Row>
        </CardContent>
        <CardActions>
          <Link to={"/courses/"+data.id}>
            <Button size="small">Show Courses</Button>
          </Link>
            <Button size="small" onClick={()=>navigate('/univeristydetails', { state: { data : data.detail} })}>More details</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default function UniverityList() {

  return (
      <Refs docRef={collection(db,"managers")}>
    
      {(data)=>(
        <div className="Univerity-list">
          {
            data.map((i, k) => (
              <UniversityCard key={k} data={i} />
            ))
          }
        </div>
      )}
      </Refs>

  );
}
