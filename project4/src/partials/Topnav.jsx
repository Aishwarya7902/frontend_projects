import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "../utils/Axios";
import noimage from '/noimage.jpg'

const Topnav = () => {
  const [query, setQuery] = useState("")
  const [searches,setSearches]=useState([]);

  const getSearches =async()=>{
      try {
  
        const {data}=await axios.get(`/search/multi?query=${query}`)
        setSearches(data.results);
        
      } catch (error) {
        console.log("error",error)
      }
    };
    useEffect(()=>{
      getSearches()
    },[query])
  return (
    <div className='h-[12vh] w-[80%]  relative flex  items-center mx-auto'>

          <i className="text-2xl text-zinc-400 ri-search-2-line"></i>
          <input 
          className=' w-[50%]  text-xl mx-10 p-2 outline-none border-none  text-zinc-200' type="text" 
          placeholder='search anything'
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          />

          {query.length>0 && <i  onClick={()=>setQuery("")} className=" text-3xl text-zinc-400 ri-close-line cursor-pointer "></i>}

          <div className='w-[60%]  max-h-[50vh] absolute bg-zinc-200 left-[5%] top-[90%] overflow-auto rounded'>
                  {searches.map((s,i)=>(<Link key={i} to="/" className='hover:!text-black font-semibold !text-zinc-600 flex justify-start items-center w-[100%] p-10  border-b-2 border-zinc-100' >
                    <img className='w-[10vh] h-[10vh] object-cover rounded mr-5' 
                    src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`:noimage} 
                    alt="" 
                    />

                    <span>
                      {s.name || s.original_name || s.title || s.original_title}
                    </span>
                  </Link>))}
                 
                 
          </div>
    </div>
  )
}

export default Topnav