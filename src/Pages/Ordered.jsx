import React from "react";
import "./stlylePage/Ordered.css";

// orderingdan keyinggi page "/ordered"

const Ordered = () => {
  return (
    <main className="main">
      <section className="ordered">
        <div className="container">
          <p className="ordered__text">
            Номер вашего заказа №123123, с Вами свяжется наш менеджер.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Ordered;
