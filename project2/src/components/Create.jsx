import React, { useContext } from "react";
import { useState } from "react";
import { productContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [products, setProducts] = useContext(productContext);

  const addProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      image.trim().length <5 ||
      category.trim().length <5  ||
      price.trim().length <1 ||
      description.trim().length <5
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
    setProducts([...products, product]);
    localStorage.setItem("products",JSON.stringify([...products, product]))
    navigate("/")
  };

  return (
    <form
      onSubmit={addProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="text-3xl mb-5 w-1/2">Add new product</h1>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        className="text-xl bg-zinc-100 rounded p-4 w-1/2 mb-2"
        value={title}
      />

      <input
        onChange={(e) => setImage(e.target.value)}
        type="url"
        placeholder="Image Link"
        className="text-xl bg-zinc-100 rounded p-4 w-1/2 mb-2"
        value={image}
      />

      <div className="flex justify-between gap-4 w-1/2">
        <input
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Category"
          className="text-xl bg-zinc-100 rounded p-4 w-[45%] mb-2"
          value={category}
        />

        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Price"
          className="text-xl bg-zinc-100 rounded p-4 w-[45%] mb-2"
          value={price}
        />
      </div>
      <textarea
        rows="10"
        placeholder="description" 
        onChange={(e) => setDescription(e.target.value)}
        className="text-xl bg-zinc-100 rounded p-4 w-1/2 mb-2"
        value={description}
      />
      <div className="w-1/2">
        <button className="px-5 py-2 text-blue-300 border rounded border-blue-200 ">
          Add new product
        </button>
      </div>
    </form>
  );
};

export default Create;
