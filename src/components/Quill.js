import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../styles/Quill.css"
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
export default function Quill({onSave,setData}) {
    const [value, setValue] = useState('');
    React.useEffect(()=>setData(value),[value])
  return (
    <div>
        <ReactQuill theme="snow" value={value} modules={{toolbar:TOOLBAR_OPTIONS}} onChange={setValue} />
        <button onClick={onSave} className="save-button">save</button>
    </div>
    );
}

function QuillReader({value}){
    return <ReactQuill
    modules={{toolbar:false}}
    value={value}
    readOnly={true}
    theme={"snow"}
    />
}

