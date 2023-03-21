import React from 'react';
import '../App.css';
import { Link} from "react-router-dom";
import Top from "./Header.js"

function Home() {
   

   

   const handleClickGuestUser = () => {
     // Do something when guest user button is clicked, like redirect to a guest homepage
   }

  return (
      <body>
      <main>
        <h2 className="heading_home"> Description:</h2>
        <div className="description_home">
          Campus unlocked is a software designed to act as virtual guide for the campus along with many social features such as sharing photos, comments, likes, trending photos, videos etc. Users can find places in the order of proximity to their current location and also find out what events are happening/going to happen there. 
        </div>
        <h2 className="heading_visitas">Visit As:</h2>
        
        <div className="visit-options_home">
        <div className="visit-options-container_home"><Link to='/signin'><u>Authorized User</u></Link></div>
        <div className="visit-options-container_home"> <Link to='/signin'><u>Campus Community</u></Link></div> 
        <div className="visit-options-container_home">  <Link to='/mainpage'><u>Guest User</u></Link></div>
        
        </div>
      </main>
      </body>
  
  );
}

export default Home;