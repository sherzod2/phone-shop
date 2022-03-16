import React from "react";
import { Link } from "react-router-dom";
import "./stlylePage/Ordering.css";
import LocationImg from "../assets/images/location.svg";
// import OrderingPensilImg from "../assets/images/ordering-pensil.svg";
import OrderingKarta from "../assets/images/ordering-visa.svg";
import OrderingPass from "../assets/images/ordering-password.svg";

// orforleniya zakazy "/ordering"

const Ordering = () => {
  return (
    <main className="main">
      <section className="ordering">
        <div className="container">
          <h3 className="ordering__title">Оформление заказа</h3>
          <div className="ordering__body">
            <div className="ordering__left">
              <div className="ordering__left-head">
                <h4 className="ordering__left-title">Доставка курьером</h4>
                <p className="ordering__left-price">499T</p>
              </div>
              <iframe
                className="ordering__left-iframe"
                title="toshkent map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50264145568!2d69.13928145938864!3d41.28251254449985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1647319765418!5m2!1sru!2s"
                width="375"
                height="146"
                loading="lazy"
              ></iframe>
              <div className="ordering__left-address-wrapper">
                <img
                  className="ordering__left-address-logo"
                  src={LocationImg}
                  alt="location img"
                  width={21}
                  height={22}
                />
                <p className="ordering__left-address">Адрес доставки</p>
              </div>
              <form className="ordering__left-form">
                <div>
                  <input
                    className="ordering__input"
                    placeholder="Город "
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="ordering__input"
                    placeholder="Улица / Район "
                    type="text"
                  />
                </div>
                <div className="ordering__left-bottom-inputs-wrapper">
                  <input
                    className="ordering__left-home ordering__input"
                    placeholder="Дом "
                    type="text"
                  />
                  <input
                    className="ordering__left-podez ordering__input"
                    placeholder="Подъезд "
                    type="text"
                  />
                  <input
                    className="ordering__left-kv ordering__input"
                    placeholder="Квартира "
                    type="text"
                  />
                </div>
              </form>
            </div>
            <div className="ordering__right">
              <div className="your-order">
                <h4 className="your-order__title">Ваш заказ</h4>
                <div className="your-order__sec">
                  <span>1x</span>
                  <p className="your-order__sec-title">
                    Наушники Apple BYZ S852I
                  </p>
                  <p className="your-order__sec-price">2313T</p>
                </div>
                <div className="your-order__sec">
                  <span></span>
                  <p className="your-order__sec-title">Доставка</p>
                  <p className="your-order__sec-price">2313T</p>
                </div>
                <div className="your-order__sec">
                  <span></span>
                  <p className="your-order__sec-title">К оплате</p>
                  <p className="your-order__sec-price">2313T</p>
                </div>
                <div></div>
                <div></div>
              </div>
              <div className="payment">
                <h4 className="payment__title">Способ оплаты</h4>
                <div className="payment__kartas">
                  <img
                    className="payment__kartas-img"
                    src={OrderingKarta}
                    alt="kartas"
                    width={18}
                    height={16}
                  />
                  <p className="payment__kartas-name">Счет на kaspi.kz</p>
                </div>
                <div className="payment__password">
                  <img
                    className="payment__password-img"
                    src={OrderingPass}
                    alt="karta password"
                    width={18}
                    height={16}
                  />
                  <input
                    className="payment__password-input"
                    type="text"
                    placeholder="Есть промокод?"
                  />
                </div>
              </div>
              <div className="phone-number">
                <h3 className="phone-number__title">Номер получателя</h3>
                <input
                  className="phone-number__input ordering__input"
                  type="text"
                  placeholder="+7 ___ ___ __ __"
                />
              </div>
              <Link className="ordering__right-btn" to="/ordered">
                Закончить оформление
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ordering;
