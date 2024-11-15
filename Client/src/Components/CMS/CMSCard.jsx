import React from 'react'
import { Link } from 'react-router-dom'

const CMSCard = () => {
  return (
   <>
     <div className="cardHolder bg-white border-gray border-[1px] w-[88vw] md:w-[60vmin] lg:w-[55vmin] pl-2 pb-4 flex flex-col justify-center items-center p-2 pl-4">
        <div className="imageHolder mt-[5vmin]">
            <img src={require("../../../assets/employee.png")} height={140} width={140}/>
        </div>
        <div className="cardHolderContainer text-[6vmin] md:text-[4vmin]  w-[88vw]  lg:w-[50vmin]">
            <p className="cardTitle font-extrabold text-center mt-5">
                Employee Management    
            </p> 
        <div className="flex justify-center items-center mt-4">
            <buttton className="bg-deepViolet text-white text-[3.45vmin] md:text-[2.15vmin] p-2">
                <Link to="/EmployeeCMS">Click Here!!!</Link></buttton>  
            </div> 
        </div>        
     </div>
   </>
  )
}

export default CMSCard
