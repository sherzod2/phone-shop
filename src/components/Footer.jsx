import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.css";
import footerLogo from "../assets/images/site-logo.svg";
import footerSocialImg2 from "../assets/images/footer-social2.svg";
import footerSocialImg3 from "../assets/images/footer-social3.svg";
import footerSocialImg4 from "../assets/images/footer-social4.svg";
import langGlobus from "../assets/images/globus-for-lang.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__body">
            <Link to="/">
              <img
                src={footerLogo}
                alt="footer logosi"
                width={85}
                height={30}
              />
            </Link>
            <ul className="footer__list">
              <li className="footer__item">
                <Link className="footer__item-link" to="/selected">
                  Избранное
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__item-link" to="/card">
                  Корзина
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__item-link" to="/contacts">
                  Контакты
                </Link>
              </li>
            </ul>
            <div className="footer__service-lang-wrapper">
              <h3 className="footer__service">Условия сервиса</h3>

              <div className="footer__lang" l>
                <img
                  className="footer__lang-globus"
                  src={langGlobus}
                  alt="globus's logo"
                  width={20}
                  height={20}
                />
                <ul className="footer__lang-list">
                  <li className="footer__lang-item lang">Uzb</li>
                  <li className="footer__lang-item">Pyc</li>
                  <li className="footer__lang-item">Eng</li>
                </ul>
              </div>
            </div>

            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a href="https://www.wk.com/">
                  <img
                    className="footer__social-img"
                    alt="VK"
                    width={30}
                    height={21}
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="https://www.instagram.com/">
                  <img
                    className="footer__social-img"
                    src={footerSocialImg2}
                    alt="VK"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="https://www.telegram.com/">
                  <img
                    className="footer__social-img"
                    src={footerSocialImg3}
                    alt="VK"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="https://www.whatsapp.com/">
                  <img
                    className="footer__social-img"
                    src={footerSocialImg4}
                    alt="VK"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
