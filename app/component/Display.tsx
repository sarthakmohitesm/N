"use client"
import React, { useEffect, useState } from 'react'



const Display = () => {

    const [users, setusers] = useState([]);

    useEffect(() => {
        fetch("/api/user")
            .then(res => res.json())
            .then(data => setusers(data));
    }, []);

    return (
        <div >
            <div className='bg-white text-black h-100 w-200 m-14  border-2 border-cyan-500 rounded-4xl flex justify-center items-center'>

                {users.map((user: any, i) => (
                    <div key={i}>
                        <p>{user.name}</p>
                        <p>{user.number}</p>
                        <p>{user.email}</p>

                    </div>
                ))}

            </div>


        </div>


    )
}

export default Display