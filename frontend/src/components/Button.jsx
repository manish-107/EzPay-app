import React from 'react'

const Button = ({ text, onClick }) => {
    return (
        <div><button onClick={onClick} className="px-2 py-2 pl-2 pr-2 text-xs font-bold text-white bg-indigo-500 border-0 rounded md:text-sm md:pl-8 md:pr-8 focus:outline-none hover:bg-indigo-600">{text}</button></div>
    )
}

export default Button