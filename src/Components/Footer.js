import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const data = [
    {
      name: "NEW & POPULAR",
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
  ];
  
  return (
    
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center footer p-4">
            
              {data.map((Val) => {
                return (
                  <NavLink to={`${Val.link}`} key={Val.id} className="bg-transparent text-uppercase fw-bold">
                    <span className="pt-1 fs-6">{Val.name}</span>
                  </NavLink>
                );
              })}
            <div className="text-white footer1 p-4">
              <p>Aslam Khan - 083 735 8559 - 7teenseconds@gmail.com</p>
              <img alt="Huble Logo" src="/favicon.png" width="70"></img>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
