import logo from './logo.svg';
import './App.css';

import PictureCards from './Components/PictureCards/PictureCards';

import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


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
    <>
    {NasaData && 
    <div className="App" >
      <PictureCards NasaData = {NasaData} />
    </div>
    }
    {!NasaData &&
    <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100vh", width: "100vw" }}>
      <CircularProgress />
      <span style={{ justifyContent: "center", position: "fixed", top: "55%" }}>Loading NASA Data...please wait</span>
    </div>
    }
    </>
  );
  
}

export default App;
