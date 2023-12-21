import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Pages/Hot";
import Movies from "./Pages/Movies";
import TV from "./Pages/TV";
import Detail from "./Pages/Detail";
import Search from "./Pages/Search";
import Error from "./Pages/Error";
import Details from "./Pages/Detail";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<Error />} />
          <Route path="/detail/:movieId" element={<Details /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
