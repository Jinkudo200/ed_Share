import React , {useState} from 'react'
import {ref , uploadBytes} from 'firebase/storage'
import { db, storage } from '../config/firebase'
import "../styles/Input.css"
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import PermMediaIcon from '@mui/icons-material/PermMedia';
export const MyInput=({formProps,field,header,...rest})=>(
    <Box sx={{marginBottom:2,minWidth:200}}>

      <TextField id="standard-basic" label={header} variant="standard"
      onChange={formProps.handleChange(field)}
      value={formProps.values[field]}
      onBlur={formProps.handleBlur(field)} 
      sx={{width:'100%'}} 
      helperText={formProps.touched[field]?formProps.errors[field]:null}
      error={formProps.touched[field]&&(formProps.errors[field]!=null)}
      {...rest}
      />
      
    </Box>
  )

  
  
export const FileInput=(props)=>{
  const initValue="Aucun fichier choisi"
  const [loading, setLoading] = useState(false)
  // const [value, setvalue] = useState(initValue)
    const handlechange=(e)=>{
      setLoading(true)
      const defaultChange = props.formProps.handleChange(props.field);
      const d = e.target.files[0];
      if(d===null) return;
      // if(!d.name.match("")) return;
      defaultChange(d.name)
      if (props.formProps.errors[props.field]!=null) return ;
      // setvalue(d.name)
      // uploadBytes(ref(storage,`/images/${d.name}`),d)
      // .then(e=>{console.log(e);setLoading(false)})
      setLoading(false)
    }
    return(
      (
        <div>
          <p>{props.header}</p>
            {loading?<p>loading ....</p>:
            <div>
              <input type='file' id='file' onChange={e=>handlechange(e)}/>
              <label htmlFor='file' id='file-container'>
                <PermMediaIcon />
                <div>{props.formProps.values[props.field]==""?initValue:props.formProps.values[props.field]}</div>
              </label>
              <p style={{color:"red"}}>{props.formProps.touched[props.field]&&props.formProps.errors[props.field]}</p>
            </div> 
            }
        </div>
      )
    )
  }