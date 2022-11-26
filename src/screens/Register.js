import React from 'react'
import { MyInput, FileInput } from '../components/Input';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';


export default function Register() {
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
        initialValues={{ firstName: '',  lastName: '', phoneNumber: '', email: '' , universityName: '', adresse: '', message: '' }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          phoneNumber: Yup.string().required('Required').matches(/^0[0-9]{9}/g,"Numéro de téléphone non valide"),
          universityName: Yup.string().required('Required'),
          adresse: Yup.string().required('Required'),
          message: Yup.string()
        })}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values)
        }}
      >
        {(formProps) => (
          <Form>
            <div className='form-container'>
              <MyInput formProps={formProps} field="firstName" header='First Name' />
              <MyInput formProps={formProps} field="lastName" header='Last Name' />
              <MyInput formProps={formProps} field="phoneNumber" header='Phone Number' />
              <MyInput formProps={formProps} field="email" header='Email' />
              <MyInput formProps={formProps} field="universityName" header='University Name' />
              <MyInput formProps={formProps} field="adresse" header='Adresse' />
              <MyInput formProps={formProps} field="message" header='Message' />
  
              <button>Submit</button>
  
            </div>
          </Form>
        )
        }
      </Formik >
    );

}
