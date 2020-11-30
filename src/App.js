import React from 'react';
import './App.scss';
import Nav from './Nav';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';

function App() {

  window.addEventListener("load", function(){
    window.dispatchEvent(new Event('resize'));
  });

  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" isLargeRow={true} fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Science Fiction Movies" fetchUrl={requests.fetchSciFi} />
    </div>
  );
}

export default App;
