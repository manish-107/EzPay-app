import React from 'react'
import Button from './Button'

const Searchresult = ({ user }) => {
    return (
        <div className='flex justify-center '>
            <div className='flex justify-between w-9/12 p-2 md:justify-around md:p-3 md:5/12'>
                <div className="flex ">
                    <div className="flex justify-center w-6 h-6 pb-1 mt-1 mr-2 rounded-full md:h-10 md:w-10 bg-slate-200">
                        <div className="flex flex-col justify-center h-full text-lg font-semibold">
                            {user.firstname[0]}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full h-full font-semibold md:w-28">
                        <div>
                            {user.firstname} {user.lastname}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <Button text={"Send Money"} />
                </div>
            </div>
        </div>

    )
}

export default Searchresult