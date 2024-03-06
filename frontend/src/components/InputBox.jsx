import React from 'react'

const InputBox = ({ label, placeholder }) => {
    return (
        <div>
            <div>{label}</div>
            <input type='text' className='' placeholder={placeholder} />
        </div>
    )
}

export default InputBox