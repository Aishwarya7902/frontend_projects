import axios from "./axios.js";
import React, { createContext, useEffect, useState } from "react";
export const productContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(null);

  const getData = async () => {
    try {
      const { data } = await axios.get("/products");

      
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  
  return (
    <productContext.Provider value={[products, setProducts]}>
      {props.children}
    </productContext.Provider>
  );
};

export default Context;
