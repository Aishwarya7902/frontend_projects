import axios from "../utils/axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { productContext } from "../utils/Context";

const Details = () => {
   
   const [products, setProducts] = useContext(productContext);
   const {id} = useParams();
   const [product,setProduct]=useState(null)
   const navigate = useNavigate();
   
  // const getSingleProduct = async () => {
   
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
  if (products && products.length && id) {
    const found = products.find((p) => String(p.id) === String(id));
    setProduct(found || null);
  }
}, [products, id]);

 const handleDelete = () =>{
    setProducts(products.filter(p => p.id !=id))
    localStorage.setItem("products", JSON.stringify(products.filter(p => p.id !=id)));
    navigate("/")
 }

  return product ? (
    <div className="w-[80%] h-[90vh]  m-auto   flex items-center justify-center">
      <div className="h-[90%] w-[50%] mr-10">
        <img
          className=" w-[100%] h-[100%] object-contain "
          src={product.image}
          alt=""
        />
      </div>
      <div className="content w-[50%] h-[80%]  p-[5%]">
        <h1 className="text-4xl ">{product.title}</h1>
        <h2 className="text-zinc-600 2xl mt-5 mb-5">{product.price}</h2>
        <h3 className="text-zinc-400 text-2xl mt-5 mb-5">{product.category}</h3>
        <p className=" text-xl mb-5">
         {product.description}
        </p>
        <button onClick={()=> navigate(`/edit/${id}`)} className="px-5 py-1 border rounded-full  mr-10 bg-zinc-100">
          Edit
        </button>
        <button onClick={handleDelete} className="px-5 py-1 border rounded-full  ml-10 bg-red-50">
          Delete
        </button>
      </div>
    </div>
  ):(<Loading/>);
};

export default Details;
