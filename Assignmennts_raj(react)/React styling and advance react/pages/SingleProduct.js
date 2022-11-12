import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function SingleProduct() {
    const { id } = useParams()
    const [Product, SetProduct] = useState("")

    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((result) => result.json())
            .then((data) => {
                console.log(data)
                SetProduct(data)
            })
    }, [Product])
    return (
        <>
            <section className="product_section layout_padding">

                <div className="row">

                    {Product && <div className="container mt-5 mb-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="images p-3">
                                                <div className="text-center p-4"> <img id="main-image" src={Product.image} width={350} /> </div>
                                              
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="product p-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left" /> <span className="ml-1">Back</span> </div> <i className="fa fa-shopping-cart text-muted" />
                                                </div>
                                                <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">Orianz</span>
                                                    <h5 className="text-uppercase">{Product.title}</h5>
                                                    <div className="price d-flex flex-row align-items-center"> <span className="act-price">{Product.price} ₹</span>
                                                        <div className="ml-2"> <small className="dis-price"></small> <span>40% OFF</span> </div>
                                                    </div>
                                                </div>
                                                <p className="about">Shop from a wide range of t-shirt from orianz. Pefect for your everyday use, you could pair it with a stylish pair of jeans or trousers complete the look.</p>
                                                <div className="sizes mt-5">
                                                    <h6 className="text-uppercase">Size</h6> <label className="radio"> <input type="radio" name="size" defaultValue="S" defaultChecked /> <span>S</span> </label> <label className="radio"> <input type="radio" name="size" defaultValue="M" /> <span>M</span> </label> <label className="radio"> <input type="radio" name="size" defaultValue="L" /> <span>L</span> </label> <label className="radio"> <input type="radio" name="size" defaultValue="XL" /> <span>XL</span> </label> <label className="radio"> <input type="radio" name="size" defaultValue="XXL" /> <span>XXL</span> </label>
                                                </div>
                                                <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i className="fa fa-heart text-muted" /> <i className="fa fa-share-alt text-muted" /> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    }


                </div>
            </section>
        </>
    )
}
