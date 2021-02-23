// import React, {useState, useContext, useEffect} from "react";
// import {UserContext} from "./context/UserContext.js"
// import { setAuthentication } from "./authStorage.js";
// import {Redirect} from "react-router-dom";
// import axios  from "axios"
// import {Image} from "cloudinary-react"
// import Account from "./Account.js"
// // import UseLocalStorageState from "./useLocalStorageState.js";

// export default function Check() {
    
//     const { userData} = useContext(UserContext);

//     const [image, setImage]= useState({})
   
     
 
//     useEffect(() =>  {
//         try {
         
//             async function getData(){
//                 const url = `http://localhost:5000/users/getLatest/${userData.user.id}`
//                 const response = await axios.get(url)
//                 console.log(response.data);
//                 setImage( response.data)
//                 console.log(setImage);
//             }
    
//             getData()
//         } catch (error) {
//             console.log(error)
//         }
       
//     },[])
  
//      return (
//         <div>
     
        
        
            
//          <h1>fdghjfklg'</h1>
//          <img src={image.imageUrl}/>
//        </div>
         
//      )
// }

