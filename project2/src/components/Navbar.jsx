import React from 'react'

const Navbar = () => {
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
        <ul className=" w-[80%]">
          <li className=" mb-3 flex items-center">
            <span className="h-[15px] w-[15px] rounded-full  bg-blue-100 mr-5"></span>
            Category1
          </li>

          <li className=" mb-3 flex items-center">
            <span className="h-[15px] w-[15px] rounded-full  bg-red-100 mr-5"></span>
            Category2
          </li>

          <li className=" mb-3 flex items-center">
            <span className="h-[15px] w-[15px] rounded-full  bg-yellow-200 mr-5"></span>
            Category3
          </li>

          <li className=" mb-3 flex items-center">
            <span className="h-[15px] w-[15px] rounded-full  bg-purple-300 mr-5"></span>
            Category4
          </li>
        </ul>
      </nav>
  )
}

export default Navbar