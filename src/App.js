import React, { useEffect } from 'react';
import './App.scss';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';


function App() {

//useEffect(() => window.dispatchEvent(new Event('resize')), []);
useEffect(() => console.log('mounted'), []);
//document.addEventListener("DOMContentLoaded", function(){
  //dom is fully loaded, but maybe waiting on images & css files
  //console.log('holey.');
//});
window.addEventListener("load", function(){
  //everything is fully loaded, don't use me if you can use DOMContentLoaded
  console.log('holey.');
  
  window.dispatchEvent(new Event('resize'));
});

  return (
    <div className="App">
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
