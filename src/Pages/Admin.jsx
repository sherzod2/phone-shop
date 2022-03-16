import React from "react";
import "./stlylePage/Admin.css";

const Admin = () => {
  return (
    <main className="main main--admin">
      <section className="admin">
        <div className="container">
          <div className="admin__body">
            <table>
              <tr>
                <th>Город </th>
                <th>Улица / Район</th>
                <th>Дом</th>
                <th>Подъезд</th>
                <th>Квартира</th>
                <th>Номер</th>
              </tr>
              <tr>
                <td>Emil</td>
                <td>Tobias</td>
                <td>Linus</td>
                <td>Linus</td>
                <td>Linus</td>
                <td>Linus</td>
              </tr>
              <tr>
                <td>16</td>
                <td>14</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admin;
