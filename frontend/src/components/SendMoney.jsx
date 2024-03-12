import React from 'react'

const SendMoney = ({ user }) => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex items-center justify-center p-3 border border-gray-300 rounded'>


                <div className="w-full max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow h-fit dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center p-10">
                        <div className="flex justify-center w-24 h-24 pt-6 mb-3 text-3xl font-extrabold text-white rounded-full shadow-lg "  >A</div>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Friend's lastName</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Amouunt (in Rs)</span>
                        <div className="flex mt-4 md:mt-6">
                            <button className="inline-flex items-center justify-center w-48 px-4 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:outline-none ">Add</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SendMoney;
