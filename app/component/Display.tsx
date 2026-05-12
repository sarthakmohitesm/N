
import React, { useEffect, useState } from 'react'

const Display = () => {

    const [users, setusers] = useState([]);

    useEffect(() => {
        fetch("/api/user")
            .then(res => res.json())
            .then(data => setusers(data));
    }, []);

    return (
        <div>
            <div className='bg-white text-black m-14 border-2 border-cyan-500 rounded-4xl overflow-hidden'>

                <table className='w-full border-collapse'>
                    <thead>
                        <tr className='bg-cyan-500 text-white text-left'>
                            <th className='px-6 py-3'>#</th>
                            <th className='px-6 py-3'>Name</th>
                            <th className='px-6 py-3'>Number</th>
                            <th className='px-6 py-3'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: any, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-cyan-50'}>
                                <td className='px-6 py-3 border-b border-cyan-100'>{i + 1}</td>
                                <td className='px-6 py-3 border-b border-cyan-100 font-medium'>{user.name}</td>
                                <td className='px-6 py-3 border-b border-cyan-100'>{user.number}</td>
                                <td className='px-6 py-3 border-b border-cyan-100'>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Display