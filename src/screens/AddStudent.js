import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { MyInput, FileInput } from "../components/Input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
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



export default function AddStudent({ open, setOpen,addStudent }) {
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit=(values)=>{
    console.log(values);
    addStudent(values);
    setOpen(false)
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
            initialValues={{ email: "", name: "",password:'kygdhkgfsdf56' }}
            validationSchema={Yup.object({
              email: Yup.string().required("Required"),
              name: Yup.string().required("Required"),
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
                    header="Email"
                  />
                  <MyInput
                    formProps={formProps}
                    field="name"
                    header="username"
                  />
                  <Button onClick={()=>formProps.handleSubmit()}>Ajouter</Button>
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
