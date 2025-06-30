import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { productContext } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {

 const [products] =useContext(productContext)
 
  return  products ? ( 
    <>
      <Navbar/>
      <div className="h-full w-[85%] flex flex-wrap overflow-x-hidden overflow-y-auto">

        {products.map((p,i)=><Link to={"/details/1"} className=" m-5 h-[45vh] w-[20%] card p-2 pt-0 border shadow rounded flex flex-col justify-center">
          <div className="w-full h-[80%] bg-contain bg-no-repeat bg-center" style={{
            backgroundImage:`url(${p.image})`
          }}>
            
          </div>
          <h1>{p.title}</h1>
        </Link>)}
      </div>
    </>
  ) :(<Loading/>);
};

export default Home;
