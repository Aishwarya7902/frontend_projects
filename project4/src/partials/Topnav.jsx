import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
  const [query, setQuery] = useState("")
  return (
    <div className='h-[12vh] w-full  relative flex justify-start items-center ml-[20%]'>
          <i className="text-3xl text-zinc-400 ri-search-2-line"></i>
          <input 
          className='w-[50%] text-xl mx-10 p-2 outline-none border-none bg-transparent text-zinc-200' type="text" 
          placeholder='search anything'
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          />
          {query.length>0 && <i  onClick={()=>setQuery("")} className="text-3xl text-zinc-400 ri-close-line cursor-pointer"></i>}

          <div className='w-[50%] max-h-[50vh] absolute bg-zinc-200 top-[90%] overflow-auto rounded'>
                  {/* <Link to="/" className='hover:!text-black font-semibold !text-zinc-600 flex justify-start items-center w-[100%] p-10  border-b-2 border-zinc-100' >
                    <img src="" alt="" />
                    <span>Hello</span>
                  </Link> */}
                 
                 
          </div>
    </div>
  )
}

export default Topnav