import React, { useState, useEffect } from 'react';
//import LogoutButton from './logout';
import "./fetch.css"

function OatSlideShow() {
  const [allImage, setAllImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(()=>{
    getImage()
},[])

function getImage() {
  fetch("http://localhost:3000/getimageoat", {
      method: "GET",
  }).then((res) => res.json()).then((data) => {
      console.log(data)
      setAllImage(data.data)
  })
}
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide + 1) % allImage.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [allImage]);

  return (
    <>
      <div className="slideshow-container">
        {allImage.length === 0 ?
          <div className="no_img">No images uploaded yet.</div> :
          allImage.map((image, index) => (
            <div className={`slide ${index === currentSlide ? "active" : ""}`} key={image._id}>
              <div className="fetch_container">
              <img className="img_fetch" width={400} height={400} src={image.img} alt={image.name} />
              </div>
              <div className="caption">Name: {image.name}</div>
              <div className="caption_desc">Description: {image.desc}</div>
            </div>
          ))
        }
        {/* <a className="prev" onClick={() => setCurrentSlide(currentSlide => (currentSlide + allImage.length - 1) % allImage.length)}>&#10094;</a>
        <a className="next" onClick={() => setCurrentSlide(currentSlide => (currentSlide + 1) % allImage.length)}>&#10095;</a> */}
      </div>
    </>
  );
}

export default OatSlideShow;
