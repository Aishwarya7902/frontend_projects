import React, { useEffect, useState } from "react";
import Sidenav from "../partials/Sidenav";
import Topnav from "../partials/Topnav";
import axios from "../utils/Axios";
import Header from "../partials/Header";
import HorizontalCards from "../partials/HorizontalCards";
import Dropdown from "../partials/Dropdown";
import Loading from "./Loading";

const Home = () => {
  document.title = "CuddleScreen | Homepage";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending,setTrending]=useState(null);
  const [category,setCategory] =useState('all');


  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const idx = Math.floor(Math.random() * data.results.length);
      const random = data.results[idx];
      setWallpaper(random);
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log(wallpaper);
  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    getTrending();
  }, [category]);
  console.log(trending)


  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  return wallpaper && trending ? (
    <>
      <Sidenav className="min-h-full"/>
      <div className="w-[80%] min-h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <div className="p-5 flex justify-between">
                <h1 className=" text-xl font-semibold mb-1">Trending</h1>
                <Dropdown title='Filter' options={['tv','movie','all']} func={(e)=>setCategory(e.target.value)}/>
              </div>
        <HorizontalCards data={trending} />
      </div>

    </>
  ) : (
    <Loading/>
  );
};

export default Home;
