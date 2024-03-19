import React from 'react';
import logoImg from "../assets/Designer.png";

export const HeaderDash = ({ firstname, lastname }) => {
    console.log(firstname)
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
                        <div className='pt-1 mr-2 text-sm font-semibold md:text-bold md:font-bold pe-2'>
                            <div>{firstname} s</div>
                            <div>{lastname}</div>
                        </div>
                        <div className="flex justify-center w-10 h-10 mt-1 mr-2 border-4 border-indigo-600 rounded-full shadow-xl md:w-10 md:h-10 hover:shadow-cyan-500/50 bg-slate-200">
                            <div className="flex flex-col justify-center h-full text-lg font-bold text-black md:text-xl">
                                U
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
