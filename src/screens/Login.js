import React,{useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { MyInput, FileInput } from "../components/Input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {collection, doc, getDoc,getDocs, getDocsFromServer, query,where} from "firebase/firestore";
import { db } from '../config/firebase';
import { Typography } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

// Abderafiechairi@gmail.com

export default function Login({ open, setOpen,setLogin }) {
  const [err, setErr] = useState(false)
  let navigate = useNavigate()

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit=(values)=>{
    console.log(values);
    getDocs(query(collection(db,"managers"),where("email", "==", values.email),where("password", "==", values.password)))
    .then(ref=>{
      if (ref.docs.length>0){
        console.log("user found")
        setLogin(true);
        handleClose();
        navigate("/courses/jhgjhgj");
        setErr(false);
      }else{
        console.log("user not found")
        setErr(true);
      }
    })



  }

  const login=(values)=>{
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string().required("Required"),
              password: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values);
            }}
          >
            {(formProps) => (
              <Form>
                <div className="form-container">
                  <MyInput
                    formProps={formProps}
                    field="email"
                    header="Email / Username"
                  />
                  <MyInput
                    formProps={formProps}
                    field="password"
                    header="Password"
                  />
                  <Button onClick={()=>formProps.handleSubmit()}>Login</Button>
                  {err&&<Typography sx={{color:'red'}}>User not found</Typography>}
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
