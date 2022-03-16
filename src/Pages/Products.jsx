import React from "react";
// import { Link } from "react-router-dom";
import "./stlylePage/Products.css";
import useData from "../Hooks/useData";
import productHeroIphone13 from "../assets/images/product-hero-iphone-13.png";
// import Iphone11 from "../assets/images/iphone11.png";
// import trueSelected from "../assets/images/true-selected.svg";
// import falseSelected from "../assets/images/false-selected.svg";
// import Kategoriya from "../assets/images/kategoriya-img.svg";
import Rendercards from "../components/renderCards";
// Eng asosiy glavniy page "/products"
const Products = () => {
  const { data } = useData();

  return (
    <main className="main">
      <section className="hero">
        <div className="container">
          <div className="hero__body">
            <h1 className="hero__title">Аксессуары для Iphone 13 Pro Max</h1>
            <img
              className="hero__img"
              src={productHeroIphone13}
              alt="iphone 13 pro max"
              width={321}
              height={226}
            />
          </div>
        </div>
      </section>

      <section className="phone">
        <div className="container">
          <h2 className="phone__title">Телефон</h2>
          <ul className="phone__list">
            {data.map((item) => {
              return <Rendercards key={item.id} item={item} />;
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Products;
