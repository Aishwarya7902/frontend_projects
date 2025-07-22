import React, { useEffect, useState } from "react";
import Sidenav from "../partials/Sidenav";
import Topnav from "../partials/Topnav";
import axios from "../utils/Axios";
import Header from "../partials/Header";

const Home = () => {
  document.title = "CuddleScreen | Homepage";
  const [wallpaper, setWallpaper] = useState(null);

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
     let random= data.results[Math.floor(Math.random() * data.results.length)]
      setWallpaper(random);
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log(wallpaper);
  useEffect(() => {
   !wallpaper && getHeaderWallpaper()
  }, []);

  return wallpaper ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full ">
        <Topnav />
        <Header data={wallpaper}/>
      </div>
    </>
  ) : <h1>Loading...</h1>;
};

export default Home;
