import React from 'react'
import '../styles/Home.css'
import Button from '@mui/material/Button';
import Register from '@mui/icons-material/Person';
import Login from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';
import '../styles/Home.css'
import useWindowDimensions from '../hooks/useWindowDimensions';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Header=()=>{
    const { height, width } = useWindowDimensions();
    return(
        <nav>
            <div className='title'>
                <img src={require("../static/icon.png")} height={70}/>
                <label>EdShare</label>
            </div>
            {width < 700?
            <BasicMenu />:
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<Register />} onClick={()=>console.log(width)}>
                    Register
                </Button>
                <Button variant="contained" endIcon={<Login />}>
                    Login
                </Button>
            </Stack>}
        </nav>
    )
}


export default function Home() {
  return (
    <div className="container">
        <Header />
        <div className='qoute-container'>
            <p>EdShare is a modern plateform for students made by Club Emicatronic</p>
            <p>As an engineering students we know your needs and the problems you face. So we provide a plateform where you can find courses exams and valuable informations</p>
        </div>
    </div>
  )
}







function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
        <div className='basicMenu'>
          <MoreVertIcon onClick={handleClick}/>
        </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Register</MenuItem>
        <MenuItem onClick={handleClose}>Login</MenuItem>
      </Menu>
    </div>
  );
}