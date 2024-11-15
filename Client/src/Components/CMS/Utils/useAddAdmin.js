import React, { useEffect, useState } from'react';
import axios from "axios";
const {API_TEST_URL} = process.env;
export const useAddAdmin=(tigger,name,email,password,token)=>{
    const [admin, setAdmin] = useState(null);
     useEffect(()=>{

        if(tigger){

            axios
            .post(API_TEST_URL+"api/v1/auth/register",{
                username:name,
                email,
                password,
                secretKey: token
            })
            .then((res)=>{
                // console.log(res.status);
                if(res.status===201){
                    console.log("Hi")
                    setAdmin(true);
                }
                else{
                    setAdmin(null);
                }
            })
            .catch((err)=>{
                console.log(err);
            })

            
        }},[tigger,name,email,password,token])

  
    return admin;
     
}