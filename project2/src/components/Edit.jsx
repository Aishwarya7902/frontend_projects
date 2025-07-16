
import React, { useContext } from "react";
import { useState,useEffect } from "react";
import { productContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";
const Edit = () => {
  const navigate = useNavigate()
  const {id} =useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [products, setProducts] = useContext(productContext);
  const [product,setProduct] = useState(null);

  const changeHandler=(e)=>{
    
    setProduct({...product,[e.target.name]:e.target.value})
  }


  useEffect(()=>{
    setProduct(products.filter(p=>p.id==id)[0]);
  },[id])

  const addProductHandler = (e) => {
    e.preventDefault();
    if (
      product.title.trim().length < 5 ||
      product.image.trim().length <5 ||
      product.category.trim().length <5  ||
      product.price.trim().length <1 ||
      product.description.trim().length <5
    ) {
      alert("Each field must have atleast 4 characters");
    }
    const product = {
      id: nanoid(),
      title,
      image,  
      category,
      price,
      description,
    };
    // setProducts([...products, product]);
    // localStorage.setItem("products",JSON.stringify([...products, product]))
    // navigate("/")
  };
  return (
     <form
      onSubmit={addProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="text-3xl mb-5 w-1/2">Edit your product</h1>
      <input
        name="title"
        onChange={changeHandler}
        type="text"
        placeholder="Title"
        className="text-xl bg-zinc-100 rounded p-4 w-1/2 mb-2"
        value={product && product.title}
      />

      <input
        name="image"
        onChange={changeHandler}
        type="url"
        placeholder="Image Link"
        className="text-xl bg-zinc-100 rounded p-4 w-1/2 mb-2"
        value={product && product.image}
      />

      <div className="flex justify-between gap-4 w-1/2">
        <input
          name="category"
          onChange={changeHandler}
          type="text"
          placeholder="Category"
          className="text-xl bg-zinc-100 rounded p-4 w-[45%] mb-2"
          value={product && product.category}
        />

        <input
          name="price"
          onChange={changeHandler}
          type="number"
          placeholder="Price"
          className="text-xl bg-zinc-100 rounded p-4 w-[45%] mb-2"
          value={product && product.price}
        />
      </div>
      <textarea
        rows="10"
        placeholder="description" 
        name="description"
        onChange={changeHandler}
        className="text-xl bg-zinc-100 rounded p-4 w-1/2 mb-2"
        value={product && product.description}
      />
      <div className="w-1/2">
        <button className="px-5 py-2 text-blue-300 border rounded border-blue-200 ">
          Add new product
        </button>
      </div>
    </form>
  )
}

export default Edit