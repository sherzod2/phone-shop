import React from "react";
import "./stlylePage/Contacts.css";
import LocationImg from "../assets/images/location.svg";
import ContactPhoneImg from "../assets/images/contact-phone.svg";
import ContactsSocial1 from "../assets/images/footer-social4.svg";
import ContactsSocial2 from "../assets/images/footer-social1.svg";
import ContactsSocial3 from "../assets/images/footer-social2.svg";
import ContactsSocial4 from "../assets/images/footer-social3.svg";

// contactlar page "/contacts"

const Contacts = () => {
  return (
    <main className="main">
      <section className="contacts">
        <div className="container">
          <div className="contacts__body">
            <div className="contacts__left">
              <div className="contacts__left-location">
                <h3 className="contacts__left-title">Наш офис</h3>
                <iframe
                  className="contacts__left-iframe"
                  title="toshkent map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50264145568!2d69.13928145938864!3d41.28251254449985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1647319765418!5m2!1sru!2s"
                  width="722"
                  height="424"
                  loading="lazy"
                ></iframe>
                <div className="contacts__left-location-bottom">
                  <img
                    className="contacts__left-location-bottom-logo"
                    src={LocationImg}
                    alt="location's logo"
                    width={21}
                    height={22}
                  />
                  <div>
                    <h4 className="contacts__left-location-bottom-title">
                      Аксай-3а, 62ф, Алматы, Казахстан
                    </h4>
                    <p className="contacts__left-location-bottom-desc">
                      3 этаж 35 кабинет
                    </p>
                  </div>
                </div>
              </div>
              <div className="contacts__left-bottom">
                <img
                  className="contacts__left-bottom-img"
                  src={ContactPhoneImg}
                  alt="Contacts phone"
                  width={30}
                  height={30}
                />
                <p className="contacts__left-bottom-tel">+7 777 777 77 77</p>
              </div>
            </div>
            <div className="contacts__right">
              <ul className="contacts__right-list">
                <li className="contacts__right-item">
                  <img
                    src={ContactsSocial1}
                    alt="whatsap"
                    className="contacts__right-item-img"
                    width={39}
                    height={39}
                  />
                </li>
                <li className="contacts__right-item contacts__right-item--wk">
                  <img
                    src={ContactsSocial2}
                    alt="WK"
                    className="contacts__right-item-img"
                    width={54}
                    height={36}
                  />
                </li>
                <li className="contacts__right-item">
                  <img
                    src={ContactsSocial3}
                    alt="instagram"
                    className="contacts__right-item-img"
                    width={39}
                    height={39}
                  />
                </li>
                <li className="contacts__right-item">
                  <img
                    src={ContactsSocial4}
                    alt="telegram"
                    className="contacts__right-item-img"
                    width={48}
                    height={48}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
