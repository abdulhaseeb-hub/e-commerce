import React , {useRef} from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {IconButton , Badge, InputBase} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {ShoppingCart } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../assets/commerce.png'
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import { ThemeProvider } from '@material-ui/styles';
import {Link} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    MuiButtonBase:{
        spaceBetween:"10%"

    },
    menuButton: {
      marginRight: theme.spacing(2),
      padding: "5px 15px 7px 15px",
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
      },
    image: {
        marginRight: '10px',
      },


      
      
  }));

  const theme = createMuiTheme({
    palette: {
      primary: {
        
        main: '#4e342e',
       
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

const Navbar = ({totalItems}) => {




    const classes = useStyles();

    return (
      <div className={classes.root}>
          <ThemeProvider theme={theme}>
            <AppBar position="static" color="primary">
          <Toolbar>
            
          <Typography variant="h6" className={classes.title} color="inherit"  to="/">
           <img src={logo} alt="sherkoh" className={classes.image} height="25px" />
            SherKoh
            </Typography>

            <IconButton component={Link} to="/"  color="inherit">

            <HomeIcon/>

            </IconButton>
            
                    <IconButton  component={Link} to="/cart" color="inherit">
                    <ShoppingCart/>

                        <Badge badgeContent={totalItems} color="secondary" />

                    </IconButton>


           

                   
            
          </Toolbar>
        </AppBar>
        </ThemeProvider>

      </div>
    );
  
}

export default Navbar
