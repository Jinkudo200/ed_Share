import React from 'react'
import { MyInput , FileInput } from '../Components.js/Input';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';


export default function Contact (){


  const handleSubmit=(values)=>{
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
        initialValues={{ firstName: '', lastName: '', email: '',imgUrl:''}}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {handleSubmit(values)
        }}
      >
        {(formProps)=>(
          <Form>
        <div className='form-container'>
          <MyInput formProps={formProps} field="firstName" header='First Name'/>
          <MyInput formProps={formProps} field="lastName" header='Last Name'/>
          <MyInput formProps={formProps} field="email" header='Email'/>
          <FileInput formProps={formProps} field="imgUrl" header="Image"/>

          <button type="submit">Submit</button>
          </div>
          </Form>
        )}
      </Formik>
    );
  };