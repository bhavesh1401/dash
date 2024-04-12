import React, { useState } from 'react'
import './Practice.css'

import { json } from 'react-router-dom';



const SignUp = () => {
    const INITIAL_STATE = {
        FirstName: "",
        LastName: "",
        password: "",
        emailid: "",
    };
    const [action, setAction] = useState("Sign Up");
    const [data, setData] = useState(INITIAL_STATE)
    

    const storeData = (e) => {
        const { name, value } = e.target
        setData((prev) => (
            { ...prev, [name]: value }
        ))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form data is  : ", data);
        const pastUsers = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUser = [...pastUsers, data];
        localStorage.setItem("users", JSON.stringify(updatedUser))
        setData(INITIAL_STATE);
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="header">
                    <div className="text">{action}</div>

                </div>
                <div className="inputs">
                    {action === "Sign Up" &&
                        <div className="input">

                            <input type="text" placeholder='FirstName' name='FirstName' value={data.FirstName} onChange={(e) => storeData(e)} />


                        </div>

                    }
                    <div className="input">
                        <input type="text" placeholder='LastName' name='LastName' value={data.LastName} onChange={(e) => storeData(e)} />


                    </div>
                    <div className="input">

                        <input type="email" placeholder='EmailId' name='emailid' value={data.emailid} onChange={(e) => storeData(e)} />
                    </div>
                    <div className="input">

                        <input type="password" placeholder='Password' name='password' value={data.password} onChange={(e) => storeData(e)} />
                    </div>
                </div>
                <div className="forgot-password">Lost Password? <span>Click Here</span>
                    <div className="submit-container">
                        <button type='handleSubmit'>Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}


export default SignUp

