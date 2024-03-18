import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center mt-48 gap-9'>
            <Button onClick={() => navigate('/signup')} text="Signup" />
            <Button onClick={() => navigate('/signin')} text="Signin" />
        </div>
    )
}

export default LandingPage