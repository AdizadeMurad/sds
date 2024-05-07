import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { MainContext } from '../context/MainProvider';


function Home() {

const {AddBasket} =useContext(MainContext)


    const [data, setdata] = useState([])
    useEffect(() => {
        getAllproduct()
    }
        , [])

    async function getAllproduct() {
        const res = await fetch("https://663a14d21ae792804bedfc73.mockapi.io/products");
        const data = await res.json();
        setdata(data)
    }




    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Murad</title>
            </Helmet>

            <div className='cards'>
                {data.map((x) => {
                    return <><div className='card'>
                        <img className='imgs' src={x.image} alt="" />
                        <h2>{x.title}</h2>
                        <p>{x.description}</p>
                        <button onClick={()=>AddBasket(x)}>Add Basket</button>
                    </div>
                    </>

                })}

            </div>

        </>
    )
}

export default Home