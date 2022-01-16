import React from 'react'
import { Link,useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Badge } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';


import logo from '../../assets/logo.jpg'

const Navbar = () => {
    
    const location = useLocation();

    return (
        <div>
            <AppBar position='fixed'color='inherit'>
                <Toolbar>
                    <Typography component = {Link} to = "/" variant = 'h6' style = {{flexGrow:1, alignItems:'center', display:'flex', color:'inherit', textDecoration : 'none'}}>
                        <img src = {logo}  alt = "Spacebook.js" height="30px"/>
                        SpaceBook
                    </Typography>
                    <div flexGrow={1}/>
                    <IconButton href = "https://github.com/theebank/SpaceBook">
                        <GitHubIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar


