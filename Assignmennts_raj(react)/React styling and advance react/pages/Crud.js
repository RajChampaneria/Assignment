import { dblClick } from '@testing-library/user-event/dist/click'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

export default function Crud() {
  const [users, Setusers] = useState()
  const [filterval, Setfilterval] = useState('');
  const [SearchApiData, SetSearchApiData] = useState([])
  const Navigate=useNavigate()
  
  useEffect(() => {
    getusers()
  }, [])

  const getusers = () => {
    fetch("http://localhost:3009/users")
      .then((result) => result.json())
      .then((item) => {
        Setusers(item)
        SetSearchApiData(item)
      })
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:3009/users/${id}`,
      {
        method: "DELETE",
      }
    );
    
  }

  const filter = (e) => {
    if (e.target.value == '') {
      Setusers(SearchApiData)
    }
    else {
      const filteResult = SearchApiData.filter(item => item.username.toLowerCase().includes(e.target.value.toLowerCase()) );
      if(filteResult.length > 0){
        Setusers(filteResult)
      }
      else{
        Setusers([{"username" : "No Data"}])
        Setusers([{"Email" : "No Data"}])
      }
    }

    Setfilterval(e.target.value)

  }

  return (
    <>
      <input type="text" placeholder='search.....' value={filterval} class="search-product-box" onInput={(e) => filter(e)} />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>

            <th className="text-center">ID</th>
            <th className="text-center">First Name</th>
            <th className="text-center">Last Name</th>
            <th className="text-center"> Edit And Delete </th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.map((item) =>
              item.role_id == 1 ? ''
                :
                <tr>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.Email}</td>
                  <td>
                    <LinkContainer to={`/Edituser/${item.id}`}>
                      <a className='btn btn-info mx-2'>Edit</a>
                    </LinkContainer>
                    <a className='btn btn-danger mx-2' onClick={() => { 
                      if 
                      (window.confirm('Delete the item?') ) 
                      { handleDelete(item.id) 
                        Navigate('/Crud');
                      }
                      
                      else 
                      (window.alert('Your Data is Safe'));
                    }}>Delete</a>

                  </td>
                </tr>
            )}
        </tbody>
      </Table>
      <LinkContainer to="/AddUser">
        <a className='btn btn-primary btn-lg center ' >ADD User</a>
      </LinkContainer>

    </>
  )
}
