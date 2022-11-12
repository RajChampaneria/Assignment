import React, { useEffect, useState } from 'react'
import styles from './raj.module.css'

export default function Raj_bootstrapCard() {
    const [product, setProduct] = useState()
    const rajData = [
        { name: 'Nokia', price: 50000, description: "VeryGood Product", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMEFXIrTjzCNKylc03IJxQW4YX6E8eFcd1AJ3ueRv54QX3CG6e-UvnnWGTUe1zOKCNOk&usqp=CAU"},
        { name: 'Oneplus', price: 500000, description: "VeryGood Product",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMEFXIrTjzCNKylc03IJxQW4YX6E8eFcd1AJ3ueRv54QX3CG6e-UvnnWGTUe1zOKCNOk&usqp=CAU" },
        { name: 'Samsung', price: 20000, description: "VeryGood Producaat" },
        { name: 'Samsung', price: 20000, description: "VeryGood Producaat" },   


    ]

    useEffect(
        () => {
            setProduct(rajData)
        }, [product]
    )
    return (

        <>
            <div className='container'>
                <div className='row mt-4 mb-4'>
                    {product && product.map((item) =>
                        <div className='col-md-4 mb-4'>
                            <div className="card "style={{ width: '18rem'  }}>
                                <img className="card-img-top" src={item.image} alt="Card image cap" />
                                <div className="card-body">
                                    <p className={`card-text ${styles.fc} `} >{item.name}</p>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}
