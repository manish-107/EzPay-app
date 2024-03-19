import React, { useState } from 'react'
import InputBox from '../components/InputBox'
import HeadingPage from '../components/HeadingPage'
import Button from '../components/Button'
import img from "../assets/loginimg2.png"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({ setisAuth }) => {
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    const loginForm = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/v1/user/signin", {
                userName,
                password
            })
            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                setuserName("");
                setpassword("");
                setisAuth(true)
                navigate("/dashboard");
            } else {
                console.log(res)
            }
        } catch (error) {

        }
    }


    return (
        <section className="h-screen text-gray-100 bg-slate-200 body-font">
            <div className="container flex flex-wrap items-center justify-center px-5 py-6 pb-0 mx-auto md:py-16">
                <div className="w-5/6 h-6/12 md:h-3/6 lg:max-w-lg lg:w-full md:w-1/2">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={img}
                    />
                </div>
                <div className="flex flex-col w-full p-8 mt-6 rounded-lg lg:ml-6 lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                    <HeadingPage text="Sign In" />
                    <InputBox onChange={(e) => setuserName(e.target.value)} label="Email" placeholder="Enter the Email" type="email" />
                    <InputBox onChange={(e) => setpassword(e.target.value)} label="Password" placeholder="Enter the Password" type="password" />
                    <Button onClick={() => loginForm()} text="Sign in" />
                    <p className="mt-3 text-xs text-gray-500">Experience the seamless convenience of secure online transactions with our app</p>
                </div>
            </div>
        </section>
    )
}

export default LoginPage