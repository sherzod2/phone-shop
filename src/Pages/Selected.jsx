import React from "react";
import "./stlylePage/Selected.css";
import useData from "../Hooks/useData";
import Rendercards from "../components/renderCards";
// BU YERGA BIZ SELECTED QILGANLARIMIZ CHIQADI YANI YURAKCHA QORA BO`LGANLARI "/selected"
const Selected = () => {
  const { data } = useData();

  const selectedData = data.filter((item) => item.selected);

  return (
    <main className="main">
      <section className="favorites">
        <div className="container">
          <div className="favorites__body">
            <h2 className="favorites__title">Избранное</h2>
            <h3 className="favorites__sec-title">Наушники</h3>
            <ul className="phone__list">
              {selectedData.map((item) => {
                return <Rendercards key={item} item={item} />;
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Selected;
