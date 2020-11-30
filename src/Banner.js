import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.scss';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect (() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie( request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();

    },[]);

    console.log(movie);

    //truncate function is making cut the given string after n'th character then add ... after that.
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>


                <div className="banner__buttons">
                    <button className="banner__button button--play">
                    <svg version="1.1"
                                x="0px" y="0px" width="30px" height="30px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7"
                            >
                            <polygon className='triangle' id="XMLID_18_" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="
                                73.5,62.5 148.5,105.8 73.5,149.1 "/>
                            
                            <circle className='circle' id="XMLID_17_" fill="none"  strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3"/>
                            </svg>
                        Play</button>
                    <button className="banner__button button--info">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg" >
                        <path
                            d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
                            fill="currentColor"
                        />
                        <path
                            d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
                            fill="currentColor"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                            fill="currentColor"
                        />
                        </svg>
                        More Info</button>
                </div>
                <h2 className="banner__description">{truncate(movie?.overview, 150)}</h2>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
