import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProductList = () => {
      fetch("https://fakestoreapi.com/products")
        .then((c) => c.json())
        .then((c) =>{ 
            setProducts(c);
            setLoading(true)
        });
    };
    getProductList();
  }, []);

  return (
    <section className="product-list">
      {loading ? (
      <div className="container">
        <div className="row">
          {products.map((pro) => (
            <div className="col-lg-3">
              <img
                style={{ height: "250px", objectFit: "contain" }}
                className="img-fluid"
                alt=""
                src={pro.image}
              />
              <h4>{pro.title}</h4>
              <p>{pro.price}</p>
            </div>
          ))}
        </div>
      </div>
      ):<div className="container">
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
      </div>}
    </section>
  );
};

export default ProductList;
