import React from 'react';
import logoImg from "../assets/Designer.png";
import { useNavigate } from 'react-router-dom';

export const HeaderDash = ({ firstname }) => {
    const navigate = useNavigate();
    const firstLetter = firstname ? firstname.charAt(0).toUpperCase() : '';
    const logoout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    }
    return (
        <div className='p-3'>
            <header className="text-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-gray-900 rounded-2xl body-font">
                <div className="container flex flex-row items-center justify-between p-5 mx-auto md:flex-row gap-y-6">
                    <a className="flex items-center font-semibold text-gray-900 md:font-bold title-font md:mb-0">
                        <img src={logoImg} className="w-8 h-8 p-1 text-white bg-indigo-500 rounded-full shadow-xl md:w-10 md:h-10 shadow-cyan-500/50" />
                        <span className="ml-3 text-xl text-white">EzPay</span>
                    </a>
                    <nav className="items-center justify-center hidden text-base md:block md:hi md:ml-auto md:mr-auto">
                        <div className="mr-5 font-semibold hover:text-teal-300">Secure. Seamless. Swift.</div>
                    </nav>
                    <div className='flex flex-row '>
                        <div className='pt-1 mt-2 mr-2 text-sm font-semibold md:text-bold md:font-bold pe-2'>
                            <div>{firstname}</div>

                        </div>
                        <div className="justify-center hidden w-10 h-10 mt-1 mr-2 border-4 border-indigo-600 rounded-full shadow-xl md:flex md: md:w-10 md:h-10 hover:shadow-cyan-500/50 bg-slate-200">
                            <div className="flex flex-col justify-center h-full pb-1 text-lg font-bold text-black md:text-xl">
                                {firstLetter}
                            </div>
                        </div>
                        <button type="button" onClick={() => logoout()} className="px-4 py-2 mt-2 mb-2 ml-6 text-xs font-medium text-red-600 bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 md:text-sm me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Log out</button>

                    </div>
                </div>
            </header>
        </div>
    );
};
