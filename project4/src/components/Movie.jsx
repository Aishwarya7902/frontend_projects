import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "../utils/Axios";
import Topnav from '../partials/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from '../partials/Cards';
import Loading from './Loading';
import Dropdown from '../partials/Dropdown';

const Movie = () => {

  document.title = "CuddleScreen | Movies";
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const [category, setCategory] = useState("now_playing");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getMovie = async () => {
    try {
      const { data } = await axios.get(
        `/movie/${category}?page=${page}`
      );
      // setTrending(data.results);
      if (data.results.length > 0) {
        setMovie((prevData) => [...prevData, ...data.results]);
        setPage((prev) => prev + 1);
        
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
      setMovie([]); // clear out the old list
      setPage(1);
      getMovie();
    },[category]);

 return movie.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className=" w-full flex items-center justify-between">
        <h3 className=" text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Movie
        </h3>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["now_playing", "popular","top_rated","upcoming"]}
            func={(e) => setCategory(e.target.value)}
          />
           
        </div>
      </div>
      <InfiniteScroll
        dataLength={movie.length}
        loader={<h1>Loading...</h1>}   
        next={getMovie}
        hasMore={hasMore}
      >
        <Cards data={movie}  title={category}/>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading/>
  );
};

export default Movie;
