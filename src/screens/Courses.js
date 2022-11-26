import React,{useState} from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import FileIcon from '@mui/icons-material/InsertDriveFile';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { TouchableOpacity } from '../components/global.js';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { collection, doc } from 'firebase/firestore';
import { db,storage } from '../config/firebase.js';
import { getStorage, ref, getDownloadURL } from "firebase/storage";


import "../styles/Courses.css"
import Ref, { Refs } from '../config/Ref.js';
export default function Courses() {



  return (
    <div className='courses-container'>
      <Tabs />
    </div> 
  )
}


function Path({data}){
  return (
      <Breadcrumbs>
        {data.filter((i,k)=>k!==data.length-1).map((i,k)=><Typography key={k} sx={{fontSize:15}}>{i}</Typography>)}
        <Typography sx={{fontSize:15,color:'black'}}>{data.at(-1)}</Typography>
      </Breadcrumbs>
  )
}



function FolderList(){
  const [url, setUrl] = useState(["repository"])
  const [path, setpaths] = useState(["repository"])

  return (
    <div className='Folder-list-container'>
      <div className='Folder-list-header'>
        Courses
      </div>
      <Path data={path}/>
      <List dense={true}>
      <Refs docRef={collection(db,...url)} url={url}>
       {data=>{
        if (data?.at(0).type=="file") return <FileList data={data}/>
        return data.map((i,k)=>(
          <div key={k} onClick={()=>{setUrl(uri=>[...uri,i.id,"children"]);setpaths(uri=>[...uri,i.name])}}>
            <Folder data={i}/>
            {k!==(data.length-1)&&<Divider variant="inset" component="li" />}
          </div>
        ))
       }}
      </Refs>
      </List>
    </div>
  )
}


function FileList({data}){
  return (
    <div>
        {data.map((i,k)=>(
          <div key={k}>
            <File data={i}/>
            {k!==(data.length-1)&&<Divider variant="inset" component="li" />}
          </div>
        ))}
    </div>
  )
}


function Folder({data}) {
  return ( 
    <TouchableOpacity>              
      <ListItem>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText
          primary={data.name}
          // secondary={data.subfolders+' folders ,'+"5 fichiers"}
        />
      </ListItem>
    </TouchableOpacity>
   );
}

function File({data}) {
    const [absurl, setUrl] = useState(null)
    React.useEffect(()=>{
        const func = async()=>{
            const someref = ref(storage, data.path);
            await getDownloadURL(someref).then(x=>setUrl(x))
            .catch((e)=>console.log(e))
        }
        func();
    },[])
  return ( 
    <TouchableOpacity>  
      <a href={absurl}>       
      <ListItem>
        <ListItemIcon>
          <FileIcon />
        </ListItemIcon>
        <ListItemText
          primary={data.name}
        />
      </ListItem>
      </a>     
    </TouchableOpacity>
   );
}



function Tabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' ,backgroundColor:'white'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="School Folders" value="1" />
            <Tab label="Students Folders" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><FolderList/></TabPanel>
        <TabPanel value="2"><FolderList/></TabPanel>
      </TabContext>
    </Box>
  );
}