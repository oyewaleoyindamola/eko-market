import React from 'react'
import { useState } from 'react';
import BackgroundImage from "../../Assets/Images/6666912.jpg"

const Login = () => {
    // request payload for our API
    const [loginRequest, setLoginRequest] = useState({
        username: null,
        password: null
    });
    // array to create different input fields types
    const InputDatas = [
        {
            type:"text",
            label: "Username"
        },
        {
            type:"password",
            label: "Password"
        },
    ];
    
    const setRequest = (value, key) => {
        setLoginRequest((previously) =>{
            return {
                ...previously,
                [key]:value
            }
        })
    }


    console.log(loginRequest)
  
  return (
    <div className=' h-[100vh] grid grid-cols-2'>
        <section className=' bg-red-600 flex items-center justify-center'> <img src= {BackgroundImage} alt="" /></section>
        <section className=' bg-green-700 flex items-center justify-center'>
            <form className=' flex  flex-col items-center justify-center gap-5'>
                {InputDatas.map((item, index) => (
                <div key ={index} className=' grid '>
                    <label htmlFor="">{item.label}</label>
                    <input type={item.type} onChange={(e) => } className=' outline-none border-2 py-2 px-2 border-[#000000]' />
                </div>
                ))}

                <div>
                    <button type = 'submit' className=' bg-black text-white w-full py-3 px-10 hover:transition-all'>Login</button>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Login