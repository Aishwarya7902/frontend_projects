import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "../utils/Axios";
import Topnav from '../partials/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from '../partials/Cards';
import Loading from './Loading';
import Dropdown from '../partials/Dropdown';

const Tvshows = () => {

  document.title = "CuddleScreen | TV Shows";
  const navigate = useNavigate();
  const [tvShows, setTvShows] = useState([]);
  const [category, setCategory] = useState("popular");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTvShows = async () => {
    try {
      const { data } = await axios.get(
        `/tv/${category}?page=${page}`
      );
      // setTrending(data.results);
      if (data.results.length > 0) {
        setTvShows((prevData) => [...prevData, ...data.results]);
        setPage((prev) => prev + 1);
        
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
      setTvShows([]); // clear out the old list
      setPage(1);
      getTvShows();
    },[category]);

 return tvShows.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className=" w-full flex items-center justify-between">
        <h3 className=" text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          TV Shows
        </h3>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["airing_today", "popular","on_the_air","top_rated"]}
            func={(e) => setCategory(e.target.value)}
          />
           
        </div>
      </div>
      <InfiniteScroll
        dataLength={tvShows.length}
        loader={<h1>Loading...</h1>}   
        next={getTvShows}
        hasMore={hasMore}
      >
        <Cards data={tvShows}  title={category}/>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading/>
  );
};

export default Tvshows;
