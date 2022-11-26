import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/university.css'
import { Row } from '../components/global';
import PublicIcon from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';
import MailIcon from '@mui/icons-material/Mail';
import GroupIcon from '@mui/icons-material/Group';

export function UniversityCard({data}) {
  return (
    <div className='UniversityCard-container'>
    <Card sx={{ maxWidth: 345,margin:2 }}>
      <CardMedia
      children={()=>{}}
      />
      <img src={require("../static/icon.png")}/>
      <CardContent>
        <Row>
          <Typography gutterBottom variant="h6" component="div" sx={{color:'black'}}>
            {data.name}
          </Typography>
        </Row>
        <Row>
          <PublicIcon fontSize='medium'/>
          <Typography gutterBottom variant="p" component="div" sx={{color:'GrayText',fontSize:16}}>
            {data.adresse}
          </Typography>
        </Row>
        <Row>
          <MailIcon fontSize='medium'/>
          <Typography gutterBottom variant="p" component="div" sx={{color:'GrayText',fontSize:16}}>
            {data.mail}
          </Typography>
        </Row>
        <Row>
          <GroupIcon fontSize='medium'/>
          <Typography gutterBottom variant="p" component="div" sx={{color:'GrayText',fontSize:16}}>
            {data.studentNbr} élèves
          </Typography>
        </Row>
      </CardContent>
      <CardActions>
        <Button size="small">Show Courses</Button>
        <Button size="small">More details</Button>
      </CardActions>
    </Card>
    </div>
  );
}





export default function UniverityList() {
  const [data, setData] = useState([
    {name:'EMI',adresse:'Rabat/ Agdal rue Ibn Sina',tel:'0765421231',mail:'Emi@emi.ac.ma',studentNbr:1532,imgUrl:'../static/icon.png'},
    {name:'EMI',adresse:'Rabat/ Agdal rue Ibn Sina',tel:'0765421231',mail:'Emi@emi.ac.ma',studentNbr:1532,imgUrl:'../static/icon.png'},
    {name:'EMI',adresse:'Rabat/ Agdal rue Ibn Sina',tel:'0765421231',mail:'Emi@emi.ac.ma',studentNbr:1532,imgUrl:'../static/icon.png'},
  ])
  return (
    <div className='Univerity-list'>
      {data.map((i,k)=><UniversityCard key={k} data={i}/>)}
    </div>
  )
}
