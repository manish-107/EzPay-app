import React from 'react'
import Button from './Button'

const Searchresult = ({ user }) => {
    return (
        <div className='flex justify-center '>
            <div className='flex justify-between w-11/12 p-2 mt-5 border rounded-xl bg-slate-300 md:justify-around md:p-3 md:4/12'>
                <div className="flex ">
                    <div className="flex justify-center w-8 h-8 pb-1 mt-1 mr-2 rounded-full md:h-12 md:w-12 bg-slate-200">
                        <div className="flex flex-col justify-center h-full text-xl font-semibold">
                            {user.firstName[0]}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center h-full font-semibold">
                        <div>
                            {user.firstName} {user.lastName}
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