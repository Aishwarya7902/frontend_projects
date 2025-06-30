import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-[80%] h-[100vh]  m-auto   flex items-center justify-center">
      <div className="h-[100%] w-[50%] mr-10">
        <img
        className=" w-[100%] h-[100%] object-contain "
        src="https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
      </div>
      <div className="content w-[50%] h-[80%]  p-[5%]">
        <h1 className="text-5xl ">Apple i6 Gen 10</h1>
        <h2 className="text-zinc-600 2xl mt-5 mb-5">$2000</h2>
        <h3 className="text-zinc-400 text-3xl mt-5 mb-5">Phone</h3>
        <p className=" text-xl mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          corporis libero commodi maiores voluptas et totam enim illum autem
          iste.
        </p>
        <Link className="px-5 py-1 border rounded-full  mr-10 bg-zinc-100">Edit</Link>
        <Link className="px-5 py-1 border rounded-full  ml-10 bg-red-50">Delete</Link>
      </div>
    </div>
  );
};

export default Details;
