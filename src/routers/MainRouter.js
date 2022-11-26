import React,{useState} from 'react';
import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";
import Home from '../screens/Home'
import Register from '../screens/Register';
import Header from './Header';
import UniverityList from '../screens/UniverityList';
import Courses from '../screens/Courses';
import UniveristyDetails from '../screens/UniveristyDetails';
import Students from '../screens/Students';
import NotificationList from '../screens/Notifications';


export const userTypes={
    admin:'admin',
    manager:'manager',
    student:'student',
    guest:'guest'
}



export default function MainRouter(props) {
    
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RouterContainer/>}>
                    <Route index element={<Home />} />
                    
                    <Route path="/register" element={<Register/>} />
                    <Route path="/universities" element={<UniverityList/>} />
                    <Route path="/courses/:id" element={<Courses/>} />
                    <Route path="/univeristydetails/:id" element={<UniveristyDetails/>} />
                    <Route path="/students" element={<Students/>} />
                    <Route path="/demandes" element={<NotificationList/>} />
                    <Route path="/repository/:id" element={<Courses/>} />
                    {/* <Route path='/project/:id' element={<ProjectDetails id={id} />} /> */}

                </Route>   
            </Routes>
        </BrowserRouter>
     );
}


function RouterContainer({login}) {
    return (<div style={{flex:1}}>
        <Header userType={userTypes.manager}/>
        <Outlet />
    </div>);
}


