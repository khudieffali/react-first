import { useEffect, useState } from "react";
import HeroSlide from "../components/hero-slider/HeroSlide";
import ProductList from "../components/product-list/ProductList";

const Home = () => {
  const [products,setProducts]=useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const getProductList = () => {
      fetch("https://fakestoreapi.com/products/")
        .then((c) => c.json())
        .then((c) => {
          setProducts(c);
          setLoading(true);
        });
    };
    getProductList();
  }, []);
  return (
    <ProductList loading={loading} data={products}/>
  );
};
export default Home;
