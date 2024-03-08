import React from 'react'
import InputBox from '../components/InputBox'
import HeadingPage from '../components/HeadingPage'
import Button from '../components/Button'
import img from "../assets/loginimg2.png"

const LoginPage = () => {
    return (
        <section className="text-gray-100 bg-slate-300 body-font">
            <div className="container flex flex-wrap items-center justify-center px-5 py-24 mx-auto">
                <div className="w-5/6 md:h-3/6 lg:max-w-lg lg:w-full md:w-1/2">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={img}
                    />

                    {/* D:\Projects\ezPay\EzPay-app\frontend\src\assets\loginimg2.jpg */}
                </div>
                <div className="flex flex-col w-full p-8 mt-10 rounded-lg lg:ml-6 lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                    <HeadingPage />
                    <InputBox label="Email" placeholder="Enter the Email" type="text" />
                    <InputBox label="Password" placeholder="Enter the Password" type="password" />
                    <Button text="Log in" />
                    <p className="mt-3 text-xs text-gray-500">Literally you probably haven't heard of them jean shorts.</p>
                </div>
            </div>
        </section>
    )
}

export default LoginPage