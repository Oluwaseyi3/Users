import React, {useState, useContext, useEffect} from "react";
import {Image} from "cloudinary-react"
import Account from "./Account.js"
import {useHistory, useLocation, Link, Redirect} from "react-router-dom";
import {UserContext} from "./context/UserContext.js"
import Button from "@material-ui/core/Button";



export default function Home() {
  const { userData, setUserData} = useContext(UserContext);
  // const [imageIds, setImageIds]= useState();

  // const loadImages = async() => {
  //   try {
  //     const res= await fetch ("http://localhost:5000/users/")
  //     const data= await res.json();
  //     console.log(data);
  //     setImageIds(data)
  //   } catch (error) {
      
  //   }
  // }

  // useEffect(() => {
  //   loadImages()
  // }, [])

  const account= () => history.push("/Account");

  let history = useHistory();
    return (
      <div>
     { userData.user ? (
        <>
        <h1>Home</h1>
       
        <Button onClick={account}>Create profile picture</Button>
       
        </>
    ) : (
      <Redirect to="/Login"/>
    )}
    </div>
)}