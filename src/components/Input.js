import React , {useState} from 'react'
import {ref , uploadBytes} from 'firebase/storage'
import { db, storage } from '../config/firebase'
// import "../styles/Input.css"


export const MyInput=({formProps,field,header})=>(
    <div >
      <p >{header}</p>
      <input 
      // style={{borderBottomColor:formProps.isSubmitting&&formProps.errors[field]?"red":"black"}}
      onChange={formProps.handleChange(field)}
      value={formProps.values[field]}
      onBlur={formProps.handleBlur(field)}
      // {...props}
      />
      <p style={{color:"red"}}>{formProps.touched[field]&&formProps.errors[field]}</p>
    </div>
  )
  
  
  
  
  export const FileInput=(props)=>{
    const [data, setData] = useState(null)
    const handlechange=(e)=>{
      const defaultChange = props.formProps.handleChange(props.field);
      setData(e.target.files[0])
    //   if(data===null) return;
    //   console.log("uploading image")
    //   const d = e.target.files[0];
    //   console.log(d)
    //   uploadBytes(ref(storage,`/images/${d.name}`),d)
    //   .then(e=>{console.log(e);
        // })
        defaultChange(e)
    }
    return(
      (
        <div>
          <p>{props.header}</p>
          <input type='file'onChange={e=>handlechange(e)}/>
        </div>
      )
    )
  }