import React, { useEffect, useState } from 'react'
import { HeaderDash } from '../components/HeaderDash'
import SearchBar from '../components/SearchBar'
import Searchresult from '../components/Searchresult'
import axios from 'axios'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [filter, setFilter] = useState("");
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    const navigate = useNavigate();
    const [userId, setUserId] = useState(""); // Changed variable name to userId

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: { authorization: `Bearer ${token}` }
        })
            .then(res => {
                setUserDetails(res.data);
                setUserId(res.data.userid); // Set userId after setting userDetails
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`, {
                headers: { userid: userId }
            })
                .then(response => {
                    setUsers(response.data.users);
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                });
        }, 1000);

        return () => clearTimeout(timeout);
    }, [filter, userId]); // Added userId as a dependency


    console.log(users)
    const balance = userDetails ? userDetails.balance : null;
    const trimmedAmt = balance ? parseFloat(balance).toFixed(3) : null;

    return (
        <div className='h-screen bg-slate-400'>
            <HeaderDash firstname={userDetails ? userDetails.firstname : null} lastname={userDetails ? userDetails.lastname : null} />

            {balance !== null ? (
                <div className='m-5'>
                    <h2 className='p-5 ml-0 text-xl font-bold md:ml-48 md:text-2xl'> Your Balance : {trimmedAmt !== null ? trimmedAmt : <Button onClick={(e) => navigate("/signin")} text="Login" />}</h2>
                    <SearchBar setfilter={setFilter} />
                    {users?.map(user => <Searchresult key={user._id} user={user} />)}
                </div>
            ) : (
                <div className='flex justify-center '><Button onClick={(e) => navigate("/signin")} text="Login" /></div>
            )}
        </div>
    );
};

export default Dashboard;
