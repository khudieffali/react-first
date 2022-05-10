import { useEffect, useState } from "react";
import { BASE_URL } from "../components/Api/ApiConfig";
import HeroSlide from "../components/hero-slider/HeroSlide";
import ProductList from "../components/product-list/ProductList";
import { useLanguage } from "../contexts/LanguageContext";
         
const Home = () => {
 

  return (
    <> 
    <ProductList/>
    </>
 
    );
};
export default Home;
