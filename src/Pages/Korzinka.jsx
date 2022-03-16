import { useState } from "react";
import "./stlylePage/Korzinka.css";
import { Link } from "react-router-dom";
import useData from "../Hooks/useData";
import KorzinkaDelete from "../assets/images/korzinka-delete-img.svg";
import PlusKorzinka from "../assets/images/korzinka-plus-item.png";
import MinusKorzinka from "../assets/images/korzinka-minus-item.png";
import DeliveryCar from "../assets/images/delivery-car.svg";
import EmptyKorzinkaImg from "../assets/images/empty-korzinka.png";

// BU YERGA KORZINKA QILGAN NARSALARIMIZ CHIQADI "/card"

const Korzinka = () => {
  const { data } = useData();

  const [productCount, setProductCount] = useState(0);

  const cardData = [];

  cardData.push(data[0]);

  const [totalPrice, setTotalPrice] = useState(0);

  let kuryerPrice = 100000;

  const handleMinusClick = function (item) {
    if (productCount > 0) {
      cardData[0].count--;
      setProductCount(cardData[0].count);
      if (productCount - 1 === 0) {
        kuryerPrice = 0;
      } else {
        kuryerPrice = 100000;
      }
      setTotalPrice(cardData[0].price * (productCount - 1) + kuryerPrice);
    }
  };
  const handlePlusClick = function (item) {
    cardData[0].count++;
    setProductCount(cardData[0].count);
    setTotalPrice(cardData[0].price * (productCount + 1) + kuryerPrice);
  };

  if (0) {
    return (
      <main className="main">
        <section className="empty-korzinka">
          <div className="container">
            <div className="empty-korzinka__body">
              <img
                className="empty-korzinka__img"
                src={EmptyKorzinkaImg}
                alt="empty korzinka"
                width={410}
                height={315}
              />
              <h2 className="empty-korzinka__title">Корзина пуста</h2>
              <p className="empty-korzinka__desc">
                Но это никогда не поздно исправить :)
              </p>
              <Link className="empty-korzinka__btn" to="/">
                В каталог товаров
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="korzinka">
        <div className="container">
          <h3 className="korzinka__title">Корзина</h3>
          <div className="korzinka__body">
            <div className="korzinka__left">
              <ul className="korzinka__left-list">
                {cardData?.map((item) => {
                  return (
                    <li key={item?.id} className="korzinka__left-item">
                      <button className="korzinka__left-item-delete">
                        <img
                          src={KorzinkaDelete}
                          alt="delete button"
                          width={20}
                          height={19}
                        />
                      </button>
                      <div className="korzinka__left-item-main">
                        <img
                          className="korzinka__left-item-pic"
                          src={item?.picture}
                          alt="iphone 11"
                        />
                        <div>
                          <h4 className="korzinka__left-item-title">
                            {item?.title}
                          </h4>
                          <p className="korzinka__left-item-price">{`${item?.price} so'm`}</p>
                        </div>
                      </div>
                      <div className="korzinka__left-item-bottom">
                        <div className="korzinka__left-item-plusminus-wrapper">
                          <button
                            onClick={() => handleMinusClick(item)}
                            className="korzinka__left-item-minus-btn"
                          >
                            <img
                              src={MinusKorzinka}
                              alt="plus pruduct"
                              width={35}
                              height={30}
                            />
                          </button>
                          <p className="korzinka__left-item-product-count">
                            {productCount}
                          </p>
                          <button
                            onClick={() => handlePlusClick(item)}
                            className="korzinka__left-item-plus-btn"
                          >
                            <img
                              src={PlusKorzinka}
                              alt="minus product"
                              width={35}
                              height={30}
                            />
                          </button>
                        </div>
                        <p className="korzinka__left-item-total-price">
                          {`${item?.price * productCount} so'm`}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="korzinka__delivery">
                <h3 className="korzinka__delivery-title">Доставка</h3>
                <div className="korzinka__delivery-map">
                  <iframe
                    className="korzinka__delivery-iframe"
                    title="toshkent map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50264145568!2d69.13928145938864!3d41.28251254449985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1647319765418!5m2!1sru!2s"
                    width="600"
                    height="450"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="korzinka__delivery-bottom">
                  <div className="korzinka__delivery-kuryer">
                    <img
                      className="korzinka__delivery-kuryer-car"
                      src={DeliveryCar}
                      alt="delivery car"
                      width={21}
                      height={13}
                    />
                    <p className="korzinka__delivery-kuryer-select">
                      Доставка курьером
                    </p>
                  </div>
                  <p className="korzinka__delivery-price">{`${kuryerPrice} so'm`}</p>
                </div>
              </div>
            </div>
            <div className="korzinka__right">
              <div className="korzinka__right-head">
                <h4 className="korzinka__right-title">ИТОГО</h4>
                <p className="korzinka__right-price">{totalPrice}</p>
              </div>
              <Link className="korzinka__right-checkout" to="/order">
                Перейти к оформлению
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Korzinka;
