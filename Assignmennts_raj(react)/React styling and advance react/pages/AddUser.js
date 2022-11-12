import React, { useEffect, useState } from 'react'
import { json, useNavigate, useParams } from 'react-router'

export default function AddUser() {
    const [username, Setusername] = useState()
    const [password, SetPassword] = useState()
    const [Email, SetEmail] = useState()
    const [role_id, Setrole_id] = useState(2)
    const [users,Setusers]=useState()
    const navigate = useNavigate()

    const { id } = useParams()
    // console.log(id)

    useEffect(()=>{
            if(id!=undefined)
            {
                fetch(`http://localhost:3009/users/${id}`)
                .then((result)=>result.json())
                .then((data)=>{
                    Setusername(data.username)
                    SetEmail(data.Email)
                    SetPassword(data.password)
                })
            }
    },[users])
            
    

    const HandleSignUp = (e) => {
        e.preventDefault()
        const data = { username, password, Email, role_id }

        fetch("http://localhost:3009/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
        })
            .then((Response) => Response.json())
            .then((json) => {

                navigate('/Crud')

            })
    }

    const HandleUpdate = (e) => {
        e.preventDefault()
        const data = { username, Email, password}
        fetch(`http://localhost:3009/users/${id}`,
            {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                },
            })
            .then((Response) => Response.json())
            .then((json) => {
                console.log(json)
                alert("Your Data has been changed ")
                navigate('/Crud')    
                // console.log(data.username)

            })
    }

    return (



        <>
            <div className="container">
                <form onSubmit={(id == undefined) ? HandleSignUp : HandleUpdate} >
                    <label>Username : </label>

                    <input type="text" placeholder="Enter Username" name="username" onChange={(e) => Setusername(e.target.value)} value={username} required />
                    <label>Email : </label>
                    <input type="text" placeholder="Enter email" name="Email" onChange={(e) => SetEmail(e.target.value)}
                      value={Email}  required />
                    <label>Password : </label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={(e) => SetPassword(e.target.value) } value={password}
                        required />

                    <input type="submit" value={id == undefined ? 'Add User' : 'Edit User'} />

                </form>
            </div>
        </>
    )
}
