import React from 'react'

const Button = ({ text }) => {
    return (
        <div><button className="px-8 py-2 text-lg font-bold text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">{text}</button></div>
    )
}

export default Button