import React from 'react'
import { MyInput, FileInput } from '../components/Input';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
// import "../styles/Contact.css"


export default function AddFile() {


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
      initialValues={{ title: '',  description: '', file: '' }}
      validationSchema={Yup.object({
        title: Yup.string().required('Required'),
        description: Yup.string(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values)
      }}
    >
      {(formProps) => (
        <Form>
          <div className='form-container'>
            <MyInput formProps={formProps} field="title" header='Title' />
            <MyInput formProps={formProps} field="description" header='Description' />
            <FileInput formProps={formProps} field="file" header="File"/>

            <button>Send</button>

          </div>
        </Form>
      )
      }
    </Formik >
  );
};