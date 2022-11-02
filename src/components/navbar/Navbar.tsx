import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';


export default function ButtonAppBar() {

 

   
 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
            News
            Competences
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}