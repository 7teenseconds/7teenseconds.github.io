import axios from 'axios';
import { useParams } from "react-router-dom"
import { useQuery } from 'react-query';
import { Cast, CastDescription,GenreButton,CrewCard} from './CastCard';
import Card from './Card';
import { useEffect } from "react";
import { useContext } from "react";
import Slider from "react-slick";
import CastSliderSettings from "./CastSliderSettings";



//https://api.themoviedb.org/3/movie/695721?api_key=751792751a1d3a03ea79eff9c66b4c18&language=en-US
const Details = (props) => {
    const { movieId } = useParams()
    
    const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3%22%7D"});
    const img_url="http://image.tmdb.org/t/p/w500";
    const fetchSingleMovie = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=751792751a1d3a03ea79eff9c66b4c18&language=en-US`);
    const fetchSingleMovieCredits = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=751792751a1d3a03ea79eff9c66b4c18&language=en-US`);

    const movieQuery = useQuery(["movie", movieId], () => fetchSingleMovie(movieId), { retry: false, select: state => state?.data })
    console.log("movieQuery:::", movieQuery)
    const movieCreditsQuery = useQuery(["moviecredits", movieId], () => fetchSingleMovieCredits(movieId), { retry: false, select: state => state?.data })
    console.log("movieCast:::", movieCreditsQuery)
    const movieData = movieQuery?.data
    const movieCastData = movieCreditsQuery?.data?.cast
    return (
        <>

            {/* <h1 className="d-flex justify-content-center">Detail Page</h1> */}

            <div className="container-fluid col-7" id="detailspage">
                <div className="container d-flex">
                    <div className=""  >
                        <img key={movieData?.id} style={{ width: '20rem' }} src={`https://image.tmdb.org/t/p/w500` + movieData?.poster_path} alt="" /></div>
                    <div id="movie-details" className="px-4">
                        <h4 className="fs-1 text-black heading align-left">{movieData?.title}</h4>
                        <h5>Overview: </h5>
                        <h6 className="col-sm-8 justify-content-center my-2">{movieData?.overview}</h6>
                        <h6>Movie Released Date: <span>{movieData?.release_date}</span></h6>
                        
                    </div>
                </div>
            </div>
            <div className="container-fluid col-7" id="castdiv">
                <div className="container d-flex"></div>
                <h4 className="fs-1 text-black heading align-left">Cast</h4>
                <div className="container d-flex flex-row justify-content-center row mb-2" style={{ backgroundColor: "#ecf0f1ey" }}>
                    <Slider {...CastSliderSettings}>
                        {
                            movieCastData?.map(item =>
                                    <Cast key={item.id}>
                                        <img className="rounded" key={item} width={"100"} height={"150"} src={item.profile_path === null ? `/imagenotavailable.png` : ` https://image.tmdb.org/t/p/w200${item?.profile_path}`} alt="" />
                                        <CastDescription>
                                            <h6  style={{ color: "#2c3e50" }}><strong>{item.name}</strong></h6>
                                            <h6  style={{ color: "#2c3e50" }}> As {item.character}</h6>
                                        </CastDescription>
                                    </Cast>
                            )
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
};


export default Details;