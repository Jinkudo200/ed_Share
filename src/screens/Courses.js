import React,{useState} from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import FileIcon from '@mui/icons-material/InsertDriveFile';
import Divider from '@mui/material/Divider';
import { TouchableOpacity } from '../components/global.js';
import "../styles/Courses.css"
export default function Courses() {
  return (
    <div className='courses-container'>
      <p>Courses</p>
      <FolderList />
    </div>
  )
}



function FolderList(){
  const [data, setData] = useState([
    {name:'gestion de projets',subfolders:7,type:'folder'},
    {name:"Systeme d'exploitation",subfolders:7,type:'folder'},
    {name:'Design patterns',type:'file',uri:''},
  ])
  return (
    <div className='Folder-list-container'>
      <div className='Folder-list-header'>
        header
      </div>
      <List dense={true}>
        {data.filter(i=>i.type=='folder').map((i,k)=>(
          <div key={k}>
            <Folder data={i}/>
            {k!==(data.length-1)&&<Divider variant="inset" component="li" />}
          </div>
        ))}
        {data.filter(i=>i.type=='file').map((i,k)=>(
          <div key={k}>
            <File data={i}/>
            {k!==(data.length-1)&&<Divider variant="inset" component="li" />}
          </div>
        ))}
      </List>
    </div>
  )
}


{/*  */}

function Folder({data}) {
  return ( 
    <TouchableOpacity>              
      <ListItem>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText
          primary={data.name}
          secondary={data.subfolders+' folders'}
        />
      </ListItem>
    </TouchableOpacity>
   );
}

function File({data}) {
  return ( 
    <TouchableOpacity>              
      <ListItem>
        <ListItemIcon>
          <FileIcon />
        </ListItemIcon>
        <ListItemText
          primary={data.name}
        />
      </ListItem>
    </TouchableOpacity>
   );
}

