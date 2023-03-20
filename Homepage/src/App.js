import React from 'react';
import './index.css';


function App() {
   const handleClickAuthorizedUser = () => {
     // Do something when authorized user button is clicked, like redirect to login page
   }

   const handleClickCampusCommunity = () => {
     // Do something when campus community button is clicked, like display a modal with more information
   }

   const handleClickGuestUser = () => {
     // Do something when guest user button is clicked, like redirect to a guest homepage
   }

  return (
      <body>
      <nav class="navbar navbar-expand-sm navbar-custom fixed-top">
        
        <a class="navbar-brand d-block abs-center-x text-center navbar-custom align-middle custom-font disabled"><h2>CAMPUS UNLOCKED</h2></a>
        </nav> 

      
      <br></br>
      <br></br>
      <br></br>
      <div class="logo">
         <img src="https://upload.wikimedia.org/wikipedia/en/a/a3/IIT_Kanpur_Logo.svg" alt="Logo" className="logo" />
      </div> 
      
      <main>
        <h2 className="heading"> Description:</h2>
        <div className="description">
          Campus unlocked is a software designed to act as virtual guide for the campus along with many social features such as sharing photos, comments, likes, trending photos, videos etc. Users can find places in the order of proximity to their current location and also find out what events are happening/going to happen there. 
        </div>
        <h2 className="heading">Visit As:</h2>
        
        <div className="visit-options">
        <div className="visit-options-container"><button className="option" onClick={handleClickAuthorizedUser}><u>Authorized User</u></button></div>
        <div className="visit-options-container"> <button className="option" onClick={handleClickCampusCommunity}><u>Campus Community</u></button></div> 
        <div className="visit-options-container">  <button className="option" onClick={handleClickGuestUser}><u>Guest User</u></button></div>
        
        </div>
      </main>
      </body>
  
  );
}

export default App;