import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import InputBox from '../components/InputBox'
import HeadingPage from '../components/HeadingPage'
import Button from '../components/Button'
import img from "../assets/loginPageimg.png"
import axios from "axios"

const Signup = ({ setisAuth, toast, settoast }) => {
    const navigate = useNavigate();
    const [userName, setuserName] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [password, setpassword] = useState("");
    const postFormData = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                userName,
                firstName,
                lastName,
                password
            })

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                setisAuth(true);
                setfirstName("");
                setlastName("");
                setpassword("");
                setuserName("");
                navigate('/dashboard');
            } else {
                settoast(true);


            }
        } catch (error) {
            settoast(true);
        }
    }


    return (
        <section className="h-screen text-gray-100 bg-slate-200 body-font">
            <div className="container flex flex-wrap items-center justify-center px-5 py-6 pb-0 mx-auto md:py-16">
                <div className="w-8/12 md:h-3/6 lg:max-w-lg lg:w-full md:w-1/2">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={img}
                    />
                </div>
                <div className="flex flex-col w-full p-8 mt-6 rounded-lg lg:ml-6 lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                    <HeadingPage text="Sign Up" />
                    <InputBox onChange={(e) => setuserName(e.target.value)} label="Email" placeholder="Enter the Email" type="email" />
                    <InputBox onChange={(e) => setfirstName(e.target.value)} label="First name" placeholder="Enter the first name" type="text" />
                    <InputBox onChange={(e) => setlastName(e.target.value)} label="Last name" placeholder="Enter the last name" type="text" />
                    <InputBox onChange={(e) => setpassword(e.target.value)} label="Password" placeholder="Enter the Password" type="password" />
                    <Button onClick={() => postFormData()} text="Sign in" />
                    <p className="mt-3 text-xs text-gray-500">Experience the seamless convenience of secure online transactions with our app</p>
                </div>
            </div>
        </section>
    )
}

export default Signup