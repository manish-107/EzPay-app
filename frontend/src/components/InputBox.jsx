import React from 'react'

const InputBox = ({ onChange, label, placeholder, type }) => {
    return (

        <div className="relative mb-4">
            <label className="text-sm font-semibold leading-7 text-gray-600">{label}</label>
            <input onChange={onChange} placeholder={placeholder} type={type} className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-700 focus:ring-2 focus:ring-indigo-200" />
        </div>
    )
}

export default InputBox