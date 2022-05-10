import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getall } from "../../pages/Redux/Actions/ProductActions";
import "./productList.scss";
const ProductList = () => {
  const productList = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getall({lang: "AZ"}))
  }, [dispatch])
  for (let i = 0; i < productList.products.length; i++) {
    const element = productList.products[i];
    console.log(element)
  }
  return (
    <section className="product-list">
      {/* {data.length===0 && <p className="alert alert-warning">Mehsul tapilmadı</p>} */}
      <div className="container">
        <div className="row">
       
          {/* { 
            productList.products.map(products => (
              <div className="col-lg-3">
                <div className="product-item">
                <p>{products.price}</p>
                    {products.productRecords.map(prorec => (

                  <>
           <Link to='/'>
               <h6  className="my-3">
                 {prorec.name}
               </h6>
                </Link>
               <p>{prorec.description}</p>

                  </>
                    ))}


                </div>
              </div>
            ))
          } */}

        </div>
      </div>

    </section>
  );
};

export default ProductList;
