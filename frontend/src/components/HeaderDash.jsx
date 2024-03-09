import React from 'react'
import logoImg from "../assets/Designer.png"

export const HeaderDash = () => {
    return (
        <div className='m-3'>
            <header className="text-white shadow-[10px_-8px_32px_43px_#e2e8f0]  bg-gray-900 rounded-2xl body-font">
                <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row gap-y-6">
                    <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0 ">
                        <img src={logoImg} className="w-10 h-10 p-1 text-white bg-indigo-500 rounded-full shadow-xl shadow-cyan-500/50" />


                        <span className="ml-3 text-xl text-white">EzPay</span>
                    </a>
                    <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
                        <div className="mr-5 font-semibold hover:text-teal-300 ">Secure. Seamless. Swift.</div>
                    </nav>
                    <div className='flex flex-row '>
                        <div className='h-12 pt-1 mr-2 font-bold pe-2 '>
                            <div>user's</div>
                            <div> name</div>
                        </div>
                        <div className="flex justify-center w-12 h-12 mt-1 mr-2 border-4 border-indigo-600 rounded-full shadow-xl hover:shadow-cyan-500/50 bg-slate-200">
                            <div className="flex flex-col justify-center h-full text-xl font-bold text-black">
                                U
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
