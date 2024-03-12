import React, { useState } from 'react'
import { HeaderDash } from '../components/HeaderDash'
import SearchBar from '../components/SearchBar'
import Searchresult from '../components/Searchresult'

const Dashboard = () => {
    const [users, setuser] = useState([{
        firstName: "manish",
        lastName: "s",
        _id: 1
    }])
    return (
        <div className='h-screen bg-slate-300' >
            <HeaderDash />
            <div className='m-5'>
                <h2 className='p-5 ml-0 text-xl font-bold md:ml-48 md:text-2xl'> Your Balance : 5000rs</h2>
                <SearchBar />
                {users.map((user) => <Searchresult user={user} />)}
            </div>
        </div >
    )
}

export default Dashboard