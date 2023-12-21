import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  
  const data = [
    {
      name: "New & Popular",
      link: "/",
      id: 1,
    },
    {
      name: "Movies",
      link: "/movies",
      id: 2,
    },
    {
      name: "TV Shows",
      link: "/tv",
      id: 3,
    },
    {
      name: "Search",
      link: "/search",
      id: 4,
    },
    {
      name: "By Aslam Khan",
      link: "mailto:7teenseconds@gmail.com",
      id: 5,
    },
  ];

  return (

      <div className="container-fluid">
        <div className="row">
          <div className="d-flex fixed-top justify-content-left align-items-center w-100 p-3 header">
            <img src="/Huble logo White.png" width="100" alt="Huble logo"/>
            <h2 className="px-3">movie catalogue</h2>
            {data.map((Val) => {
                return (
                    <NavLink to={`${Val.link}`} key={Val.id} className="bg-transparent text-uppercase fw-bold">
                        <span className="pt-1 fs-6">{Val.name}</span>
                    </NavLink>
                );
              })}
          </div>
        </div>
      </div>
  );
};

export default Header;
