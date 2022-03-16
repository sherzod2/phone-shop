import React from "react";
import { Link } from "react-router-dom";
import "./styles/renderCards.css";
// import Iphone11 from "../assets/images/iphone11.png";
import trueSelected from "../assets/images/true-selected.svg";
import falseSelected from "../assets/images/false-selected.svg";
import Kategoriya from "../assets/images/kategoriya-img.svg";

const Rendercards = (data) => {
  console.log(data.item.selected);
  return (
    <>
      <li className="phone__item">
        <Link
          className="phone__item-link"
          to={`/singleproduct/${data.item.id}`}
        >
          <img
            className="phone__item-isselected"
            src={data.item.selected ? trueSelected : falseSelected}
            alt="transition to selected product"
            width={20}
            height={19}
          />
          <img
            className="phone__item-img"
            src={data.item.picture}
            alt={`${data.item.title}`}
            width={151}
            height={291}
          />
          <div className="phone__item-bottom">
            <div className="phone__item-text">
              <h3 className="phone__item-title">{data.item.title}</h3>
              <div>
                <p className="phone__item-price">{data.item.price} so'm</p>
                <p className="phone__item-del-price">
                  {data.item.oldPrice} so'm
                </p>
              </div>
            </div>
            <div className="phone__item-kategoriya">
              <img
                className="phone__item-kategoriya-img"
                src={Kategoriya}
                alt="product's kategoriya"
                width={23}
                height={22}
              />
              <p className="phone__item-kategoriya-degree">
                {data.item.katigoriya}
              </p>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default Rendercards;
