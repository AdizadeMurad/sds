import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


function Admin() {

  const [admindata, setadmindata] = useState([])
  useEffect(() => {
    getAllproductAdmin()
  }
    , [])

  async function getAllproductAdmin() {
    const res = await fetch("https://663a14d21ae792804bedfc73.mockapi.io/products");
    const data = await res.json();
    setadmindata(data)
  }



  async function handleDelete(id) {
    const res = await fetch("https://663a14d21ae792804bedfc73.mockapi.io/products/"+id,{
      method:"delete"
    });
    const data = await res.json();
    return getAllproductAdmin();
  }







  return (
  
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Murad</title>
    </Helmet>

    {admindata.map((x) => 
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Option</th>
          </tr>
          <tr>
            <td><img src={x.image} alt="" /></td>
            <td>{x.title}</td>
            <td>{x.description}</td>
            <td>
              <td><button onClick={()=>AddProduct()}><Link to={"/AddProduct"}>Add</Link></button></td>
              <td><button onClick={()=>handleDelete(x.id)}>Delete</button></td>
              <td><button ><Link to={`/UptadeProduct/${x.id}`}>Edit</Link></button></td>
            </td>
          </tr>
        </table>

    )}
  
    </>
  )}

    export default Admin