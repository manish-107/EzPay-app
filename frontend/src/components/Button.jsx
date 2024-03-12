import React from 'react'

const Button = ({ text }) => {
    return (
        <div><button className="px-8 py-2 pl-4 pr-4 text-sm font-bold text-white bg-indigo-500 border-0 rounded md:text-lg md:pl-16 md:pr-16 focus:outline-none hover:bg-indigo-600">{text}</button></div>
    )
}

export default Button