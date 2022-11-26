import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../styles/global.css'


function Notifications({data,remove}) {
  return (
    <Card sx={{ maxWidth: 1000, margin: 3}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'left'}}>
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:'left'}}>
            {data.detail}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            width:"100%"
          }}
        >
          <Typography gutterBottom variant="p" component="div" sx={{color:"GrayText"}}>
            {data.path}
          </Typography>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button color='success' onClick={()=>{remove(data.id)}}>Approve</Button>
            <Button color='error' onClick={()=>{remove(data.id)}}>Decline</Button>
            <Button color='warning' onClick={()=>{remove(data.id)}}>Report</Button>
          </ButtonGroup>
        </Box>
      </CardActions>
    </Card>
  );
}

function NotificationList(props) {
  const [data, setData] = useState([
    {id:'1',name:'Resumé cours java' , detail:'Par abderafie chairi', path:'emi/2eme année/S3'},
    {id:'2',name:'cours python' , detail:'cours python pour genie informatique', path:'emi/2eme année/S3'},
    {id:'3',name:'xml Tps' , detail:'xml Tps avec corrigé', path:'emi/2eme année/S3'},
    {id:'4',name:'Corrigé Exam' , detail:'Exam avec corrigé', path:'emi/2eme année/S3'}
  ])
  const remove=(id)=>{
    setData(i=>{
      const j = i;
      return j.filter(i=>i.id!=id)
    })
  }
  return (
    <div className='notifications-container'>
      {data.map((i, k)=> <Notifications key = {k} data = {i} remove={remove}/>)}
    </div>
  );
}

export default NotificationList;