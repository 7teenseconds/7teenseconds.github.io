import React, { useState, useEffect } from "react";
import { img_300, unavailable } from "../Components/config";
import Pagination from "../Components/Pagination";
import Genre from "../Components/Genre";
import useGenre from "../useGenre";
import { Link } from "react-router-dom";
const TV = () => {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState([]);
  const [value, setValue] = useState([]);
  const genreURL = useGenre(value);

  const fetchHot = async () => {
    const data = await fetch(`
    https://api.themoviedb.org/3/discover/tv?api_key=751792751a1d3a03ea79eff9c66b4c18&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`);
    const dataJ = await data.json();
    setState(dataJ.results);
  };
  useEffect(() => {
    fetchHot();
  }, [page, genreURL]);

  return (
    


      <div className="container">
        <div className="row py-5 my-5">
          <div className="col-12 mt-2 mb-4 fs-1 fw-bold text-decoration-none head d-flex justify-content-center align-items-center">
            <h4 className="fs-1 text-white heading align-left">TV Shows</h4>
          </div>
          <Genre
            genre={genre}
            setGenre={setGenre}
            setPage={setPage}
            type="tv"
            value={value}
            setValue={setValue}
          />
          {state.map((Val) => {
            const {
              name,
              title,
              poster_path,
              first_air_date,
              release_date,
              media_type,
              id,
            } = Val;
            return (
                <div
                  key={id}
                  className="col-md-3 col-sm-4 py-3 d-flex justify-content-center g-4"
                  id="card"
                >
                  <Link to={'/detail/'+id}>
                    <div className="card bg-transparent">
                      
                    
                      <h5 className="card-title text-center fs-5 text-decoration-none">
                        {title || name}
                      </h5>
                    

                    <img
                      src={
                        poster_path ? `${img_300}/${poster_path}` : unavailable
                      }
                      className="card-img-top pt-3 pb-0 px-3"
                      alt={title}
                    />
                  </div></Link>
                </div>
            );
          })}
          <Pagination page={page} setPage={setPage} />
        </div>
      </div>
    
  );
};

export default TV;
