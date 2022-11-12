import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'

export default function Product() {

  const [Product, SetProduct] = useState("")

  useEffect(() => {
    getproduct()
  }, [Product])

  const getproduct = () => {

    fetch('https://fakestoreapi.com/products')
      .then((result) => result.json())
      .then((data) => {
        console.log(data)
        SetProduct(data)
      })

  }

  return (
    <>
      <div>
        <section className="inner_page_head">
          <div className="container_fuild">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <h3>Product Grid</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="product_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Our <span>products</span>
              </h2>
            </div>
            <div className="row">
              {Product && Product.map((item) =>


                <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box">
                    <div className="option_container">
                      <div className="options">
                        <LinkContainer to = {`/SingleProduct/${item.id}`}>
                        <a href className="option1">
                          Men's Shirt
                        </a>
                        </LinkContainer>
                        <a href className="option2">
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className="img-box">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>
                        {item.title}
                      </h5>
                      <h6>
                        {item.price}
                      </h6>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="btn-box">
              <a href>
                View All products
              </a>
            </div>
          </div>
        </section>

      </div>

    </>
  )
}
