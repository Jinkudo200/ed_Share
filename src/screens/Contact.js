import React from 'react'
import { MyInput , FileInput } from '../components/Input';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
// import "../styles/Contact.css"


export default function Contact() {


  const handleSubmit = (values) => {
    // addDoc(collection(db,'users'),{
    //   email:values.email,
    //   name:values.firstName+' '+values.lastName,
    //   imgUrl:values.imgUrl,
    //   quote:"hello there",
    //   nbrprojects:0
    // })
    // .then(docRef => console.log("Document written with ID: ", docRef.id))
    // .catch(e=>console.log(e))
    console.log(values)
  }
  // const handle

  return (
    <Formik
      initialValues={{ name: '',  email: '', phoneNumber: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        phoneNumber: Yup.string().required('Required').matches(/^0[0-9]{9}/g,"Numéro de téléphone non valide"),
        message: Yup.string().required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values)
      }}
    >
      {(formProps) => (
        <Form>
          <div className='form-container'>
            <MyInput formProps={formProps} field="name" header='Name' />
            <MyInput formProps={formProps} field="email" header='Email' />
            <MyInput formProps={formProps} field="phoneNumber" header='Phone Number' />
            <MyInput formProps={formProps} field="message" header='Message' />

            <button>Send Message</button>

          </div>
        </Form>
      )
      }
    </Formik >
  );
};