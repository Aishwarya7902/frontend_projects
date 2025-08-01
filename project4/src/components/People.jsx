import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "../utils/Axios";
import Topnav from '../partials/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from '../partials/Cards';
import Loading from './Loading';



const People = () => {
  document.title = "CuddleScreen | People";
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);
  const [category, setCategory] = useState("popular");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPeople= async () => {
    try {
      const { data } = await axios.get(
        `/person/${category}?page=${page}`
      );
      // setTrending(data.results);
      if (data.results.length > 0) {
        setPeople((prevData) => [...prevData, ...data.results]);
        setPage((prev) => prev + 1);
        
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
      setPeople([]); // clear out the old list
      setPage(1);
      getPeople();
    },[]);

  return people.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className=" w-full flex items-center justify-between">
        <h3 className=" text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          People
        </h3>
        <div className="flex items-center w-[80%]">
          <Topnav />
         
           
        </div>
      </div>
      <InfiniteScroll
        dataLength={people.length}
        loader={<h1>Loading...</h1>}   
        next={getPeople}
        hasMore={hasMore}
      >
        <Cards data={people}  title={category}/>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading/>
  );
};

export default People;
