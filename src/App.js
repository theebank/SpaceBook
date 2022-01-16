import logo from './logo.svg';
import './App.css';

import PictureCards from './Components/PictureCards/PictureCards';
import Navbar from './Components/Navbar/Navbar';
import Loading from './Components/Loading/Loading';

import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  document.title = "SpaceBook"
  const [NasaData, setNasaData] = useState();
  //Fetches data from NASA APOD API
  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=BZJpncNsC2VIAkGaRgy6bksEq475HIXjSxCmLXX7&start_date=2022-01-01&end_date=2022-01-11')
      .then(response =>response.json())
      .then(data => setNasaData(data))
  }, [])
  //Checks to see if NASA Data has loaded yet
  //If Yes, Loads the PictureCards for all the data that has been fetched
  //If No, Displays a "Loading...Please wait message"
  return (
    <Router>
      <div>
      <Navbar />
      <div style ={{marginTop: 80}}>
      <Routes>
        <Route exact path ="/"element = {NasaData && 
            <PictureCards NasaData = {NasaData} />
            ||
            !NasaData &&
            <Loading />
          
          }/>
          
        
      </Routes>
      </div>
      </div>
    </Router>
  );
  
}

export default App;
