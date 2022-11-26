import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { MyInput, FileInput } from "../components/Input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
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



export default function Login({ open, setOpen,setLogin }) {
    let navigate = useNavigate()

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit=(values)=>{
    console.log(values);
    setLogin(true);
    handleClose();
    navigate("/courses/jhgjhgj");
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
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
