import React from 'react';
import "../App.css"
import { Link } from 'react-router-dom';
function Top() {
  return (
    <div className="top">
    <img className="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/IIT_Kanpur_Logo.svg/800px-IIT_Kanpur_Logo.svg.png"/>
      <h1 className="campus">CAMPUS UNLOCKED</h1>
      <button className="home-button">Home</button>
    </div>
  );
}

export default Top;