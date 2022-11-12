import React, { useState } from 'react'
import { json, useNavigate } from 'react-router'

export default function SignUp() {
    const [username, Setusername] = useState()
    const [password, SetPassword] = useState()
    const [Email, SetEmail] = useState()
    const [role_id, Setrole_id] = useState(2)
    const navigate = useNavigate()

    
    const HandleSignUp = (e) => {
        
        e.preventDefault()
        const data = { username, password, Email, role_id }
        if(data.username.length <=4 ){
            alert("Username Not valid ..")
            console.log("username is not valid")
        }
        else{
            
        
        fetch("http://localhost:3009/users",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                'content-type' : 'application/json;charset=UTF-8',
            },
        })
        .then((Response) => Response.json())
        .then((json)=>{
            
            navigate('/LoginPage')
            
        })
    }
    }


    return (



        <>
            <div className="container">
                <form >
                    
                    <label>Username : </label>

                    <input type="text" placeholder="Enter Username" onChange={(e) => Setusername(e.target.value)} required />
                    <label>Email : </label>
                    <input type="text" placeholder="Enter email"  onChange={(e)=> SetEmail(e.target.value)}
                        required />
                    <label>Password : </label>
                    <input type="password" placeholder="Enter Password"  onChange={(e)=>SetPassword(e.target.value)}
                        required />

                    <input type="submit" value="SignIn" onClick={HandleSignUp} />

                </form>
            </div>
        </>
    )
}
