import React, { useState , useEffect} from 'react'
import './Login.css'

import { json, useNavigate } from 'react-router-dom';


const Login = () => {
    const INITIAL_STATE = {

        emailid: "",
        password: "",
    };
    const [action, setAction] = useState("Login");
    const [data, setData] = useState(INITIAL_STATE)
    const [userData , setUserData] = useState([]);
    const navigate = useNavigate();

    
    const storeData = (e) => {
        const { name, value } = e.target
        setData((prev) => (
            { ...prev, [name]: value }
        ))
    }

    useEffect(()=>{
        setUserData(JSON.parse(localStorage.getItem("users")))
    },[])

    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form data is  : ", data);
        const result = userData.find((item) => item.emailid === data.emailid && item.password === data.password)
        setData(INITIAL_STATE);
        if(result){
            navigate('/admin')         // direct to home page
        }else{
            alert("Invalid email or password")
        }


    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action === "Login" &&
                        <div className="input">
                            <img src="" alt="" />
                            <input type="text" placeholder='Emailid' name='emailid' value={data.emailid} onChange={(e) => storeData(e)} />
                        </div>
                    }
                    <div className="input">
                        <img src="" alt="" />
                        <input type="password" placeholder='password' name='password' value={data.password} onChange={(e) => storeData(e)} />
                    </div>

                
                
                   <div className="submit-container">
                        {/* <div className={action==="Sign Up"?"submit submit":"submit gray"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Login"?"submit submit":"submit gray"} onClick={()=>{setAction("Login")}}>Login</div> */}

                        

                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}


export default Login

