import React, { useEffect, useState } from 'react'
import { HeaderDash } from '../components/HeaderDash'
import SearchBar from '../components/SearchBar'
import Searchresult from '../components/Searchresult'
import axios from 'axios'

const Dashboard = () => {

    const [filter, setfilter] = useState("");
    const [users, setuser] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setuser(response.data.user);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [filter])

    return (
        <div className='h-screen bg-slate-400' >
            <HeaderDash />
            <div className='m-5'>
                <h2 className='p-5 ml-0 text-xl font-bold md:ml-48 md:text-2xl'> Your Balance : 5000rs</h2>
                <SearchBar setfilter={setfilter} />
                {users.map((user) => <Searchresult key={user._id} user={user} />)}
            </div>
        </div >
    )
}

export default Dashboard