import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);

const base_url = "https://image.tmdb.org/t/p/original/";

window.dispatchEvent(new Event('resize'));

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
 
    useEffect (() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
       

    },[fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    }

    const handleClick = (movie) => {
        if( trailerUrl){
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
            .then(url =>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
                console.log(urlParams.get('v'));
            }).catch(error => console.log(error));
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row__posters">
            <Swiper
                breakpoints={{
                    240: {
                    width: 240,
                    slidesPerView: 1,
                    },
                    370: {
                    width: 370,
                    slidesPerView: 3,
                    },
                    640: {
                    width: 640,
                    slidesPerView: 4,
                    },
                    768: {
                    width: 768,
                    slidesPerView: 4,
                    },
                    960: {
                    width: 960,
                    slidesPerView: 8.5,
                    },
                }}
                spaceBetween={20}
                slidesPerView={8.5}
                //loop={true}
                //observer= {true}
                //observeParents={true}
                //observer= "true"
                //observeParents= "true"
                //navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                 
            {movies.map( movie => (
                <SwiperSlide key={movie.id}>
                    <img key={movie.id}
                         className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                         onClick={()=> handleClick(movie)}
                    
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path: movie.backdrop_path
                        }`} 
                        alt={movie.name}
                        />
                </SwiperSlide>
            ))}

        </Swiper>
            </div>
            <div className="row__trailer">
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} /> }
            </div>
        </div>
    )
}

export default Row
