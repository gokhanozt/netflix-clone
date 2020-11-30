import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);

const base_url = "https://image.tmdb.org/t/p/original/";

window.dispatchEvent(new Event('resize'));

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
 
    useEffect (() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
       

    },[fetchUrl]);

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
                 {/*<SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" alt="Stranger Things"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//j3SqEpnRaIth24ktKcI9vp63P9A.jpg" alt="The Crown"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="The Umbrella Academy"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" alt="Stranger Things"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//j3SqEpnRaIth24ktKcI9vp63P9A.jpg" alt="The Crown"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="The Umbrella Academy"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" alt="Stranger Things"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//j3SqEpnRaIth24ktKcI9vp63P9A.jpg" alt="The Crown"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="The Umbrella Academy"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" alt="Stranger Things"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//j3SqEpnRaIth24ktKcI9vp63P9A.jpg" alt="The Crown"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="The Umbrella Academy"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" alt="Stranger Things"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//j3SqEpnRaIth24ktKcI9vp63P9A.jpg" alt="The Crown"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="The Umbrella Academy"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" alt="Stranger Things"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//j3SqEpnRaIth24ktKcI9vp63P9A.jpg" alt="The Crown"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="The Umbrella Academy"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" alt="Stranger Things"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//j3SqEpnRaIth24ktKcI9vp63P9A.jpg" alt="The Crown"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="The Umbrella Academy"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" alt="Stranger Things"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//j3SqEpnRaIth24ktKcI9vp63P9A.jpg" alt="The Crown"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="The Umbrella Academy"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" alt="Stranger Things"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//j3SqEpnRaIth24ktKcI9vp63P9A.jpg" alt="The Crown"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="The Umbrella Academy"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" alt="Stranger Things"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//j3SqEpnRaIth24ktKcI9vp63P9A.jpg" alt="The Crown"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="The Umbrella Academy"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" alt="Stranger Things"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//j3SqEpnRaIth24ktKcI9vp63P9A.jpg" alt="The Crown"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="The Umbrella Academy"/></SwiperSlide>
                    <SwiperSlide><img className="row__poster row__posterLarge" src="https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" alt="Stranger Things"/></SwiperSlide>
                */}
            {movies.map( movie => (
                <SwiperSlide key={movie.id}>
                    <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name}
                    />
                </SwiperSlide>
            ))}

    </Swiper>
               
               
            </div>
        </div>
    )
}

export default Row
