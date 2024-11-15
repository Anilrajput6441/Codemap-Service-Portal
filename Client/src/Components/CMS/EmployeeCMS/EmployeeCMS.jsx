import React, { useEffect } from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { useAdminAuth } from '../Utils/useAdminAuth'
import { useNavigate } from 'react-router-dom'
const EmployeeCMS = () => {
  const navigate=useNavigate();
  const verifyUser=()=>{
    const dataObj = {
      token: localStorage.getItem("token"),
    };

    console.log(dataObj.token);
    const response = useAdminAuth(dataObj, "verify");
    if (response.status === 200) {
      console.log("User is verified");
    } else {
      navigate("/cms");
    }
  }

  useEffect(()=>{
    verifyUser()
  },[])
  return (
    <>
    <Header />

    <div className="mainHolder h-[85vh] w-[100vw]">

    </div>

    <Footer />
    </>
  )
}

export default EmployeeCMS
