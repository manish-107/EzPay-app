import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import NotificationToast from './NotificationToast';

const SendMoney = ({ toast, settoast }) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amt, setamt] = useState(0);
    const [desc, setdesc] = useState("");
    return (
        <div className='flex items-center justify-center h-screen bg-slate-900'>

            {toast.color && <NotificationToast color={toast.color} text={toast.text} />}
            <div className='flex items-center justify-center p-3 border border-gray-300 rounded'>


                <div className="w-full max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow h-fit dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center p-10">
                        <div className="flex justify-center w-24 h-24 pt-5 mb-3 text-5xl font-extrabold text-white border
                        ] border-white rounded-full shadow-lg "  >{name[0]}</div>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Amount (in Rs)</span>

                        <input type="number" onChange={e => setamt(e.target.value)} placeholder='Enter amount...' min="0" className="block w-full p-2 mt-3 text-sm font-bold text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        <input type="text" onChange={e => setdesc(e.target.value)} placeholder='Enter description..' className="block w-full p-2 mt-3 text-sm font-bold text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                        <div className="flex mt-4 md:mt-6">
                            <button onClick={() => {
                                axios.post("http://localhost:3000/api/v1/account/localtransfer", {
                                    to: id,
                                    amount: Number(amt),
                                    desc
                                }, {
                                    headers: {
                                        authorization: "Bearer " + localStorage.getItem("token")
                                    }
                                })
                                    .then(response => {
                                        if (response.status === 200) {
                                            settoast({
                                                color: "bg-green-600",
                                                text: "Amount transferred successfully",
                                                display: true
                                            });
                                            setTimeout(() => {
                                                navigate("/dashboard");
                                                settoast({
                                                    color: "",
                                                    text: "",
                                                    display: false
                                                });
                                            }, 2000);
                                        } else {
                                            settoast({
                                                color: "bg-red-600",
                                                text: "Unable to send money",
                                                display: true
                                            });
                                            setTimeout(() => {
                                                navigate("/dashboard");
                                                settoast({
                                                    color: "",
                                                    text: "",
                                                    display: false
                                                });
                                            }, 2000);
                                        }
                                    })
                                    .catch(error => {
                                        settoast({
                                            color: "bg-red-600",
                                            text: "Unable to send money",
                                            display: true
                                        });
                                        setTimeout(() => {
                                            navigate("/dashboard");
                                            settoast({
                                                color: "",
                                                text: "",
                                                display: false
                                            });
                                        }, 2000);
                                        console.error('Error:', error);
                                    });

                            }} className="inline-flex items-center justify-center px-4 py-2 mr-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg w-23 focus:ring-4 focus:outline-none ">Send Money</button>
                            <button onClick={() => {
                                navigate("/dashboard")
                            }} className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg w-23 focus:ring-4 focus:outline-none ">Back</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default SendMoney;
