import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useBasket } from "../contexts/BasketContext";
import { BASE_URL } from "../components/Api/ApiConfig";
import { useLanguage } from "../contexts/LanguageContext";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "./Redux/Actions/CartActions";
const ProductDetail = () => {
  const {id} = useParams();
  const {langCode}=useLanguage()
  const [singlePro, setSinglePro] = useState();
  const [loading, setLoading] = useState(true);
  const[quantity,setQuantity]=useState(1)
 const cartItems=useSelector(state=>state.cart.cartItems)
   const addToCartHandle=(id)=>{
       let qty =1;
       let item=cartItems.find(c=>c.id==id)
       if(item){
         qty+=item.qty
       }
  dispatch(AddToCart(id,qty,langCode))
   }

  const dispatch=useDispatch();
  useEffect(() => {
    fetch(`${BASE_URL}/api/products/${id}/${langCode}`)
      .then((c) => c.json())
      .then((c) => setSinglePro(c));
    setLoading(false);
  }, [id,langCode]);
  return (
    <section className="product-detail py-5">
      <div className="container">
        {loading && <p>loading...</p>}
        {singlePro != null ? (
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="pro-img">
                {/* <img className='img-fluid' src={singlePro.image} alt={singlePro.title} /> */}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="pro-info">
                {/* <span>{singlePro.category}</span> */}
                {singlePro.productRecords.map((rec) => (
                  <div key={rec.name}>
                    <h2>{rec.name}</h2>
                    <p>{rec.description}</p>
                  </div>
                ))}
                <p>Price:{singlePro.price} AZN</p>
                <button className={`btn outline-success btn-success`}
                  onClick={() =>{
                    addToCartHandle(Number(id))
                    }}
                >
                {/* {findBasketItem? "Remove From Cart":"Add To Cart"} */}
                Add To Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="row align-items-center">
            <div className="col-lg-5">
              <Skeleton count={5} />
            </div>
            <div className="col-lg-7">
              <Skeleton count={1} width={"40%"} />
              <Skeleton count={2} width={"80%"} />
              <Skeleton count={3} width={"60%"} />
              <Skeleton count={1} width={"20%"} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
