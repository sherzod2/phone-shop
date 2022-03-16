import { useContext } from "react";
import { Context } from "../Context/dataContext";

const useData = () => {
  const { data, setData } = useContext(Context);

  return { data, setData };
};

export default useData;
