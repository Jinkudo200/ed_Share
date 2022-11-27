import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../styles/Quill.css"
import Modal from "@mui/material/Modal";
import { Button } from '@mui/material';

const TOOLBAR_OPTIONS=[
    [{header:[1,2,3,4,5,6,false]}],
    [{font: [] }],
    [{list:'ordered'},{list:"bullet"}],
    ["bold","italic",'underline'],
    [{color:[]},{background:[]}],
    [{script:"sub"},{script:"super"}],
    [{align:[]}],
    ["image","blockquote",'code-block'],
    ["clean"]
]
export default function Quill({open,setOpen,setData}) {
    const [value, setValue] = useState('');
    React.useEffect(()=>setData(value),[value])
  return (
    <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
    >
    <div style={{margin:"10px auto",display:"flex",alignItems:'center',justifyContent:'center',flexDirection:"column",flex:1}}>
        <ReactQuill theme="snow" value={value} modules={{toolbar:TOOLBAR_OPTIONS}} onChange={setValue} />
        <Button onClick={()=>setOpen(false)} variant='contained' style={{margin:"10px auto"}}>save changes</Button>
    </div>
    </Modal>
    );
}

export function QuillReader({value}){
    return <ReactQuill
    modules={{toolbar:false}}
    value={value}
    readOnly={true}
    theme={"snow"}
    />
}

