import React from "react";
import { useLocation } from "react-router-dom";
import useData from "../Hooks/useData";
import "./stlylePage/singleProduct.css";
import trueSelected from "../assets/images/true-selected.svg";
import falseSelected from "../assets/images/false-selected.svg";
import korzinkaLogo from "../assets/images/korzinka-logo.svg";
// BU YERGA GLAVNIY PAGEDAGI BIRONTA PRODUCTNI BOSGANDAGI TO`LIQ MA`LUMOTLAR CHIQADI "/singleproduct/${id}"
const Singleproduct = () => {
  const { pathname } = useLocation();
  const itemId = pathname[pathname.length - 1];
  const { data } = useData();

  const item = data.find((i) => i.id === itemId - 0);

  return (
    <main className="main">
      <section className="product-appearance">
        <div className="container">
          <h2 className="product-appearance__title">phone</h2>
          <div className="product-appearance__body">
            <img
              className="product-appearance__isselected"
              src={item?.selected ? trueSelected : falseSelected}
              alt="select"
              width={22}
              height={22}
            />

            <div className="product-appearance__fotos">
              <img
                className="product-appearance__foto"
                src={item?.picture}
                alt="phone foto"
              />
            </div>
            <div className="product-appearance__text">
              <p className="product-appearance__name">{item?.title}</p>

              <div>
                <p className="product-appearance__price">{`${item?.price} so'm`}</p>
                <p className="product-appearance__del-price">{`${item?.oldPrice} so'm`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <div className="features__body">
            <div className="features__left">
              <div className="features__left-top">
                <h2 className="features__title">Описание и характеристики</h2>
              </div>
              <div className="features__left-bottom">
                <ul className="features__list">
                  <li className="features__item">
                    отпечаток пальца: {item?.fingerprint}
                  </li>
                  <li className="features__item">Вес: {item?.weight} гр</li>
                  <li className="features__item">
                    Версия операционной системы: {item?.OperatingSystemVersion}
                  </li>
                  <li className="features__item">цвет: {item?.color}</li>
                  <li className="features__item">
                    номер сим-карты: {item?.simCardNumber}
                  </li>
                  <li className="features__item">Память: {item?.memory}</li>
                  <li className="features__item">озу: {item?.fastMemory}</li>
                  <li className="features__item">
                    частота процессора: {item?.processorFrequency}
                  </li>
                  <li className="features__item">
                    количество процессорных ядер: {item?.numberOfProcessorCores}
                  </li>
                  <li className="features__item">
                    емкость батареи: {item?.batteryCapacity}
                  </li>
                  <li className="features__item">Регулятор громкости: Да</li>
                  <li className="features__item">
                    задняя камера: {item?.rearCamera}
                  </li>
                  <li className="features__item">
                    передняя камера: {item?.frontCamera}
                  </li>
                  <li className="features__item">
                    Размер дисплея: {item?.displaySize}
                  </li>
                </ul>
              </div>
            </div>
            <div className="features__right">
              <button className="features__right-buy">Купить!</button>
              <button className="features__right-save">
                <span className="features__right-save-img">
                  <img
                    src={korzinkaLogo}
                    alt="korzinka's logo"
                    width={25}
                    height={25}
                  />
                </span>
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Singleproduct;
