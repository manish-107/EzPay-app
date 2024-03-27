import React, { useEffect, useState } from 'react'
import { HeaderDash } from '../components/HeaderDash'
import SearchBar from '../components/SearchBar'
import Searchresult from '../components/Searchresult'
import axios from 'axios'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const [filter, setfilter] = useState("");
    const [users, setuser] = useState([])
    const [userdetails, setuserdetails] = useState(null) // Initialize as null
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            const token = localStorage.getItem("token");
            console.log(token)
            axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter,
                {
                    headers: {
                        authorization: 'Bearer ' + token
                    }
                })
                .then(response => {
                    setuser(response.data.user);
                    console.log(response)
                })
                .catch((err) => {
                    console.log(err);
                })
        }, 1000)
        return () => {
            clearTimeout(timeout);
        }
    }, [filter])

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get("http://localhost:3000/api/v1/account/balance",
            {
                headers: {
                    authorization: 'Bearer ' + token
                }
            })
            .then((res) => {
                setuserdetails(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    let balance = userdetails ? userdetails.balance : null;
    let trimmedAmt = balance ? parseFloat(balance).toFixed(3) : null;

    return (
        <div className='h-screen bg-slate-400' >
            <HeaderDash firstname={userdetails ? userdetails.firstname : null} lastname={userdetails ? userdetails.lastname : null} />

            {balance !== null ? (
                <div className='m-5'>
                    <h2 className='p-5 ml-0 text-xl font-bold md:ml-48 md:text-2xl'> Your Balance : {trimmedAmt !== null ? trimmedAmt : <Button onClick={(e) => navigate("/signin")} text="Login" />}</h2>
                    <SearchBar setfilter={setfilter} />
                    {users.map((user) => <Searchresult key={user._id} user={user} />)}
                </div>
            ) : (
                <div className='flex justify-center '><Button onClick={(e) => navigate("/signin")} text="Login" /></div>
            )}
        </div>
    )
}

export default Dashboard
