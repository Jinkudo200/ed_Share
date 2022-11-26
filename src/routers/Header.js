import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Person from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Stack from '@mui/material/Stack';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom";
import Login from '../screens/Login';
import { userTypes } from './MainRouter';
import { useNavigate } from "react-router-dom";



const Header=({userType})=>{
    const [login, setLogin] = useState(false)
    const [open, setOpen] = useState(false)
    
    return(
        <nav>
            <Link to="/">
            <div className='title'>
                <img src={require("../static/icon.png")} height={70}/>
                <label>EdShare</label>
            </div> 
            </Link>
            <Login open={open} setOpen={setOpen} setLogin={setLogin}/>
            {userType===userTypes.guest?
                <GuestOptions open={open} setOpen={setOpen} login={login} setLogin={setLogin}/>:
            userType===userTypes.manager?
                <ManagerOptions open={open} setOpen={setOpen}  login={login} setLogin={setLogin}/>:
                null
            }
        </nav>
    )
}
export default Header;

function GuestOptions(props){
    let navigate = useNavigate()

    const { height, width } = useWindowDimensions();
    return (
        <div>
            
            {width < 700?
            <BasicMenu />:
            <Stack direction="row" spacing={2}>

                {!props.login?
                <>
                <Link to={"/register"}>
                    <Button  onClick={()=>{}}>
                        Register
                    </Button>
                </Link>
                <Button  onClick={()=>props.setOpen(true)} disabled={props.open}>
                    Login
                </Button>
                </>:
                <Button onClick={()=>{props.setLogin(false);navigate("/")}}>
                    Logout
                </Button>}
            </Stack>} 
        </div>
    )
}

function ManagerOptions(props){
    let navigate = useNavigate()
    return (
        <div>

            {props.login?<>
                <Link to={"/students"}><Button>Students</Button></Link>
                <Link to={"/demandes"}><Button>Demandes</Button></Link>
                <Link to={"/repository/kjhdsgkhg"}><Button>Repository</Button></Link>
                <Button onClick={()=>{props.setLogin(false);navigate("/")}}>Logout</Button>
            </>:
            <GuestOptions {...props}/>}         
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