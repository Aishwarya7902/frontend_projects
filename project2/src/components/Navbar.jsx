import React, { useContext } from 'react'
import { productContext } from '../utils/Context'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [products] =useContext(productContext)

  let distinctCat= products && products.reduce((acc,cv) => [...acc,cv.category],[])
  distinctCat = [... new Set(distinctCat)]
   
  const color = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r},${g},${b},0.4)`;
};
  

  return (
    <nav className="h-full w-[15%] bg-zinc-100 flex flex-col items-center p-5">
        <a
          className="py-2 rounded px-5 border border-blue-200 text-blue-300"
          href="/create"
        >
          Add new products
        </a>
        <hr className="w-[80%] my-3" />
        <h1 className="text-2xl w-[80%] mb-3">Category</h1>
        <div className=" w-[80%]">
          {distinctCat.map((cat,i)=><Link key={i} to={`/?category=${cat}`} className=" mb-3 flex items-center">
            <span style={{backgroundColor:color()}} className="h-[15px] w-[15px] rounded-full   mr-2"></span>
              {cat}
          </Link>)}

          
        </div>
      </nav>
  )
}

export default Navbar