import React from 'react'
import Footer from './Footer'
import { useState } from 'react'
import Header from './Header'
import TitleComponent from './TitleComponent'
import axios from 'axios'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom'

toast.configure();




const {API_TEST_URL} = process.env;

const ApplyPortal = () => {
    
    const [state, setState] = useState({
        selectedFile: null,
        filename: null,
    })


    const navigate=useNavigate();
    const fileSelectedHandler = (event) => {
        let file = event.target.files[0].name;
        setState({
          selectedFile: event.target.files[0],
          filename: document.getElementById("file").value,
        });
        console.log(file);
      };

      const fileUploadHandler = (event) => {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let category = document.getElementById("category").value;
        let role = document.getElementById("role").value;

        if(category==="None") {
            toast.error("Please select a category...",{
                position: toast.POSITION.TOP_RIGHT,
            });
            return;
        }
   
      
   
        let formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("category", category);
        formData.append("role", role);
        formData.append("filename", state.filename);
        formData.append("file", state.selectedFile);
    
        const config = {
          headers: { "content-type": "multipart/form-data" },
        };
    
        axios
          .post(API_TEST_URL+"api/v1/apply", formData, config)
          .then((res) => {
            if(res.status===201){
                toast("Upload Successful... ", {
                    position: toast.POSITION.TOP_RIGHT,
                });
                document.getElementById("name").value= "";
               document.getElementById("email").value="";
                 document.getElementById("phone").value="";
                 
                 
                 document.getElementById("role").value="";
            }
            else{

                toast.error("Something Went wrong...",{
                    position: toast.POSITION.TOP_RIGHT,
                });

            }
          })
          .catch((err)=>{
            console.log(err);
          })
      };
    
  return (
   <>
   <div className='pb-10'>
    <Header />
    <TitleComponent title="Apply Portal" slogan="Join our team by applying for your dream role below!!!" />
    <div className="formArea mt-10 flex justify-center items-center ">
        <div className="formArea w-[95vw] pb-5  md:w-[70vmin]  border-headerUnderline border-[1px]">
        <form className='flex flex-col justify-center items-center'>
           <div className="logoHolder flex gap-x-7 items-center mt-4">
            <div className="flex imageHolder h-[12vmin] w-[12vmin] max-w-full max-h-full object-contain">
                <img src={require("../../assets/codemapIcon.png")}/>
              
            </div>

            <p className='text-[6vmin] lg:text-[4.5vmin] text-mainText font-bold'>Apply Now</p>
           
           </div>

           <div className="HorizontalLine flex justify-center items-center mt-4 ">
            <div className="line w-[90vw] md:w-[60vmin] border-headerUnderline border-t-[1px]"></div>
            </div> 
            <div className='flex flex-col gap-y-7 mt-5'>
            <input type="text" name="name" id="name" placeholder="Enter your name" className='bg-lightGrey text-[2.35vmin] w-[55vmin] p-2' />
            <input type="email" name="email" id="email"  placeholder="Enter your email"  className='bg-lightGrey text-[2.35vmin] w-[55vmin] p-2' />
            <input type="phone" name="phone" id="phone" placeholder='Enter your phone'  className='bg-lightGrey text-[2.35vmin] w-[55vmin] p-2' />
         
            <select className="bg-lightGrey  p-2 text-[2.35vmin]" id="category">
                    <option value="None">Which Category are you applying for?</option>
                    <option value="Technical">Technical</option>
                    <option value="Non Technical">Non Technical</option>
                </select>
                <input type="text" name="role" id="role"  placeholder="Enter your role"  className='bg-lightGrey text-[2.35vmin] w-[55vmin] p-2' />
            <div className="resumeHolder flex justify-center items-center border-dashed border-[2px] h-[20vmin]">
       
            <input  
            type="file"
            name="file"
            id="file" 
            onChange={fileSelectedHandler}
            />
                </div>
            </div>


            <div className="buttonHolder mt-5">
                <button className='bg-deepViolet text-white p-2 rounded-md'  onClick={fileUploadHandler}>Apply Now</button>
            </div>
        </form>
        </div>
    </div>

    </div>
    <Footer />
   </>
  )
}

export default ApplyPortal
