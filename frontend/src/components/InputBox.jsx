import React from 'react'

const InputBox = ({ label, placeholder, type }) => {
    return (

        <div className="relative mb-4">
            <label htmlFor="full-name" className="text-sm leading-7 text-gray-600">{label}</label>
            <input placeholder={placeholder} type={type} id="full-name" name="full-name" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
        </div>
    )
}

export default InputBox