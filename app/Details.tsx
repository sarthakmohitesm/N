"use client"
import { METHODS } from 'http';
import React, { useState } from 'react'



export const Details = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async() => {


        if (name === "") {
            alert("Dont keep it blank  ")

        }
        else if (number.length !== 10) {
            alert("Number should be of  10 digit  ")
        }

        else if (!email.includes("@")) {
            alert("email should be valid")
        }
        else {
            try{
                const res = await fetch("/api/user",{
                    method:'POST',
                    headers:{"content-Type" : "application/json"},
                    body : JSON.stringify({name,number,email}),
                });


                const data = await res.json();
                if (res.ok ){
                    alert("details added successfully");
                    setName("");
                    setNumber("");
                    setEmail("");

                }else
                {
                    alert("failed "+data.message)
                }

            }
            catch(err){
                console.log("Error",err)
                alert ("something went wrong");
            }
        }
    }



    return (
        <div className='h-screen border-2 border-cyan-500 flex justify-center items-center'  >
            <div className='flex flex-col gap-4 h-70 w-110 border-2 border-white justify-center items-center  rounded-4xl'>
                <div className=''>
                    <label htmlFor="">Enter the name : </label>

                    <input type="text"
                        className='bg-white rounded-full text-black p-1'
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="">  Enter the Number :</label>

                    <input type="text" className='bg-white rounded-full text-black p-1'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />

                </div>
                <div>
                    <label htmlFor="">Enter the Email :</label>

                    <input type="text"
                        className='bg-white rounded-full text-black p-1'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button className='bg-cyan-400 w-50 rounded-full text-black h-10' onClick={handleSubmit} > Submit</button>
            </div>
        </div>
    )
}
