import React, { useState, useEffect } from "react";
import Pagination from "../Components/Pagination";
import { img_300, unavailable } from "../Components/config";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchSearch = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=751792751a1d3a03ea79eff9c66b4c18&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    const { results } = await data.json();
    setContent(results);
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  const Search = () => {
    fetchSearch();
  };

  const Trigger = (e) => {
    setSearchText(e.target.value);
  };
  return (
      <div className="container">
        <div className="row pt-3 mb-5 pb-5">
          <div className="col-12 pt-5 pb-3 mt-5 d-flex justify-content-center align-items-center">
            <input
              type="text"
              placeholder="search..."
              onChange={Trigger}
              className="form-control-lg col-6 search bg-dark text-white border border-0"
            />
            <button
              className="btn btn-primary text-white mx-2 col-md-1 col-sm-2 py-2"
              onClick={Search}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
          {content &&
            content.map((Val) => {
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
          {page > 1 && <Pagination page={page} setPage={setPage} />}
        </div>
      </div>
  );
};

export default Search;
