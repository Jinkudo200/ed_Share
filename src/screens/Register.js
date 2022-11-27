import React,{useState} from 'react'
import { MyInput, FileInput } from '../components/Input';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/register.css'
import { Button, Typography } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { LoadingButton } from '@mui/lab';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import Quill from '../components/Quill';

export default function Register() {
    let navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [alert, setAlert] = useState(false);
    const [open, setOpen] = useState(false)
  const handleSubmit = (values,formikActions) => {
    addDoc(collection(db,'managers'),{
      email:values.email,
      name:values.firstName+' '+values.lastName,
      phoneNumber:values.phoneNumber,
      universityName:values.universityName,
      adresse:values.adresse,
      message:values.message,
      imgUrl:values.imgUrl,
      nbrstudents:0,
      detail:values.detail,
      password:values.password
    })
    .then(docRef => {
      formikActions.resetForm();
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(e=>{setErr(true);setLoading(false)})
    .finally(()=>{
      formikActions.setSubmitting(false);
      // navigate("/");
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 4000);
    })
    console.log(values)
  }
  // const handle
  return (
      <Formik
        initialValues={{ 
          firstName: '',  
          lastName: '', 
          phoneNumber: '', 
          password: '', 
          confirmPassword: '', 
          email: '' , 
          universityName: '', 
          adresse: '', 
          message: '',
          imgUrl:'',
          detail:''
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          phoneNumber: Yup.string().required('Required').matches(/^0[0-9]{9}/g,"Numéro de téléphone non valide"),
          password: Yup.string().required('Required').matches(/^.{8,}/g,"password must be at least 8 charachters"),
          confirmPassword: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
          universityName: Yup.string().required('Required'),
          adresse: Yup.string().required('Required'),
          imgUrl: Yup.string().required('Required').matches(/.+\.(jpg|png|jpeg)$/g,"svp sélectionner un image (.jpg .png .jpeg)"),
          message: Yup.string(),
        })}
        onSubmit={handleSubmit}
      >
        {(formProps) => (
          <Form>
            {alert&&(
              err?
              <Alert severity="error">failed to register</Alert>
              :
              <Alert severity="success">Register seccus please login</Alert>
            )}
            <div className='register-form-container'>
              <Typography className='register-title'>Register As University Manager</Typography>
              <div className='register-inputs-container'>
                <MyInput formProps={formProps} field="firstName" header='First Name' />
                <MyInput formProps={formProps} field="lastName" header='Last Name' />
                <MyInput formProps={formProps} field="phoneNumber" header='Phone Number' />
                <MyInput formProps={formProps} field="email" header='Email' />
                <MyInput formProps={formProps} field="universityName" header='University Name' />
                <MyInput formProps={formProps} field="adresse" header='Adresse' />
                <MyInput formProps={formProps} field="password" header='password' />
                <MyInput formProps={formProps} field="confirmPassword" header='Confirm password' />
                <MyInput formProps={formProps} field="message" header='Message' multiline maxRows={4}/>                
              </div>
              <FileInput formProps={formProps} field="imgUrl" header="Organization image"/>
              <Quill open={open} setOpen={setOpen} setData={formProps.handleChange("detail")}/>
              <Button onClick={()=>setOpen(true)}>Add Detail</Button>
              <LoadingButton 
                onClick={()=>formProps.handleSubmit()} 
                loading={formProps.isSubmitting}
                // disabled={formProps.isSubmitting}
              >
                  Submit
              </LoadingButton>
  
            </div>
          </Form>
        )
        }
      </Formik >
    );

}
