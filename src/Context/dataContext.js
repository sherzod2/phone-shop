import { createContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://phoness.herokuapp.com/phones")
      .then((res) => res.json())
      .then((datas) => setData(datas));
  }, []);

  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  );
}

export { Context, Provider };
