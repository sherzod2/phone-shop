import "./styles/header.css";
import { Link } from "react-router-dom";
import siteLogo from "../assets/images/site-logo.svg";
import phoneLogo from "../assets/images/phone-log.svg";
import headerSelectedLogo from "../assets/images/selected-log.svg";
import headerKorzinkaLogo from "../assets/images/korzinka-logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__body">
            <div className="header__left">
              <Link to="/">
                <img
                  className="header__logo"
                  src={siteLogo}
                  alt="site's logo"
                  width={105}
                  height={50}
                />
              </Link>
              <div className="header__select">
                <img
                  className="header__select-logo"
                  src={phoneLogo}
                  alt="phone logo"
                  width={15}
                  height={21}
                />
                <p className="header__select-name">Выбрать модель телефона</p>
              </div>
            </div>
            <div>
              <NavLink className="header__selected-link" to="/selected">
                <span className="header__selected-link-span">2</span>
                <img
                  className="header__selected-logo"
                  src={headerSelectedLogo}
                  alt="logo for selected"
                  width={20}
                  height={20}
                />
              </NavLink>
              <NavLink className="header__korzinka-link" to="/card">
                <span className="header__korzinka-link-span">2</span>
                <img
                  className="header__korzinka-logo"
                  src={headerKorzinkaLogo}
                  alt="logo for site's korzinka"
                  width={20}
                  height={20}
                />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
