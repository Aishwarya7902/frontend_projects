import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(productContext);
  const [filteredProducts, setFilteredProducts] = useState(null);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const getProductsCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filteredProducts || category =='undefined') setFilteredProducts(products);
    if (category != "undefined") getProductsCategory();
  }, [category, products]);

  return products ? (
    <>
      <Navbar />

      <div className="h-full w-[85%] flex flex-wrap overflow-x-hidden overflow-y-auto mt-10">
       

        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <Link
              to={`/details/${p.id}`}
              className=" m-5 h-[45vh] w-[20%] card p-2 pt-0 border shadow rounded flex flex-col justify-center"
            >
              <div
                className="w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1>{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
