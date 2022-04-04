import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import "./productList.scss";
const ProductList = ({loading,data}) => {

  return (
    <section className="product-list">
      {loading ? (
        <div className="container">
          <div className="row">
            {data.map((pro) => (
              <div className="col-lg-3" key={pro.id}>
                <div className="product-item">
                  <Link to={`/products/${pro.id}`}>
                    <img
                      style={{ height: "250px", objectFit: "contain" }}
                      className="img-fluid"
                      alt=""
                      src={pro.image}
                    />
                    <h6 className="my-3">{pro.title}</h6>
                    <p className="price">{pro.price} Azn</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Skeleton count={5} />
            </div>
            <div className="col-lg-3">
              <Skeleton count={5} />
            </div>
            <div className="col-lg-3">
              <Skeleton count={5} />
            </div>
            <div className="col-lg-3">
              <Skeleton count={5} />
            </div>
            <div className="col-lg-3">
              <Skeleton count={5} />
            </div>
            <div className="col-lg-3">
              <Skeleton count={5} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductList;
