import React, {useContext} from 'react';
import { useHistory} from "react-router-dom"
import {UserContext} from "./context/UserContext.js"
import {Redirect} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Account from "./Account.js"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const { userData, setUserData} = useContext(UserContext);
  const history = useHistory();
  const classes = useStyles();

  const register= () => history.push("/register");
  const login= () => history.push("/login");
  const home= () => history.push("/home");
  const logout = ()=> {
    setUserData({
      token: undefined,
      user: undefined,
      
    });
    localStorage.setItem("auth-token", "")
    localStorage.clear()
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {userData.user ? (
            <>
            
            <Button color="inherit" onClick={logout}>Log Out</Button>
            
            </>
          ) : (
         <>
          <Button color="inherit" onClick={register}>Register</Button>
          <Button color="inherit" onClick={login}>Login</Button>
          </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}