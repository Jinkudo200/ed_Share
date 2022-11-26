import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';



function Notifications({data}) {
  return (
    <Card sx={{ maxWidth: 1000, margin: 3}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
            <Button color='success'>Approve</Button>
            <Button color='error'>Decline</Button>
            <Button color='warning'>Report</Button>
          </ButtonGroup>
        </Box>
      </CardActions>
    </Card>
  );
}

function NotificationList(props) {
  const [data, setData] = useState([
    {name:'Lizard' , detail:'Lizard details', path:'emi/gestionProject/course1.pdf'},
    {name:'Lizard2' , detail:'Lizard details', path:'emi/gestionProject/course1.pdf'},
    {name:'Lizard3' , detail:'Lizard details', path:'emi/gestionProject/course1.pdf'},
    {name:'Lizard4' , detail:'Lizard details', path:'emi/gestionProject/course1.pdf'}
  ])
  return (
    <div>
      {data.map((i, k)=> <Notifications key = {k} data = {i}/>)}
    </div>
  );
}

export default NotificationList;