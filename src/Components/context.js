import React, { createContext, useState, useEffect, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children, media_type, id }) => {
  const [data, setData] = useState([]);
  const [video, setVideo] = useState([]);

  const fetchData = async () => {
    const Data = await fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=751792751a1d3a03ea79eff9c66b4c18&language=en-US`
    );
    const DataJ = await Data.json();
    // console.log(values);
    setData(DataJ.adult);
  };

  const fetchVideo = async () => {
    const ytvideo = await fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=751792751a1d3a03ea79eff9c66b4c18&language=en-US`
    );
    const YTvideo = await ytvideo.json();
    console.log(YTvideo.results[0]);
    setVideo(YTvideo.results[0]);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);

  // console.log(video);
  return (
    <AppContext.Provider value={{ video }}>{children}</AppContext.Provider>
  );
};
//Global Custom Hook
// const useGlobalContext = () => {
//   return useContext(AppContext);
// };

export { AppContext, AppProvider };
