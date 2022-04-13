import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
const ProductDetail = () => {
    const {id}=useParams()
    const [singlePro,setSinglePro]=useState(null);
    useEffect(() => {
        fetch(`/api/products/${id}/AZ`)
        .then(c=>c.json())
        .then(c=>setSinglePro(c))
    }, [id])
  return (
    <section className='product-detail py-5'>
        <div className="container">
            {singlePro!=null?(
                <div className="row align-items-center justify-content-between">
                <div className="col-lg-5">
                    <div className="pro-img">
                        <img className='img-fluid' src={singlePro.image} alt={singlePro.title} />
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="pro-info">
                        <span>{singlePro.category}</span>
                        <h2>{singlePro.title}</h2>
                        <p>{singlePro.description}</p>
                        <p>Rating:{singlePro.rating.rate}</p>
                        <button className='btn btn-outline-success'>Add To Cart</button>
                    </div>
                </div>
            </div>
            ):(
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <Skeleton count={5}/>
                    </div>
                    <div className="col-lg-7">
                        <Skeleton count={1} width={"40%"}/>
                        <Skeleton count={2} width={"80%"}/>
                        <Skeleton count={3} width={"60%"}/>
                        <Skeleton count={1} width={"20%"}/>
                    </div>
                </div>
            )}
            
        </div>
    </section>
  )
}

export default ProductDetail