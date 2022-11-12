import React, { useState } from 'react'
import { json, useNavigate } from 'react-router'

export default function LoginPage() {

  const [Username, SetUsername] = useState("")
  const [Password, SetPassword] = useState("")
  const navigate = useNavigate()
  const loginHandle = (e) => {
    e.preventDefault()

    
    fetch("http://localhost:3009/users")
      .then((response) => response.json())
      .then((result) => {

        result.filter((item) => {
          if (item.username === Username) {
            if (item.password === Password) {
              if (item.role_id == 1) 
              {
                localStorage.setItem('admin', JSON.stringify(item))
                navigate('/')
              }
              else {
                localStorage.setItem('user', JSON.stringify(item))
                navigate('/')
              }
            }
            else {
              console.log("Password incorrect")
            }
          }
          else {
            console.log("Username not match")
          }
        })
      })
  }

  return (
    <>

      <div className="container">
        <form onSubmit={loginHandle}>
          <label>Username : </label>
          <input type="text" placeholder="Enter Username" name="username"
            onChange={((e) => SetUsername(e.target.value))} required />
          <label>Password : </label>
          <input type="password" placeholder="Enter Password" name="password"
            onChange={((e) => SetPassword(e.target.value))} required />
          <input type="submit" value="Login" />

        </form>
      </div>


    </>
  )
}
