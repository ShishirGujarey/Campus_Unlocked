import React from "react"
// import './trending.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Top from "./Header"

const Example = () => {
    const images = [
      "https://i.pinimg.com/736x/c3/b3/02/c3b30282dd988c556f766664cba46c8b.jpg",
      "https://th.bing.com/th/id/OIP.383XT1n-Z23wOQVzmoVi5wHaE-?pid=ImgDet&w=200&h=134&c=7&dpr=1.5",
      "https://th.bing.com/th/id/OIP.2ebHBNY6xxRSES-sQoxuHAHaE8?w=241&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "https://s4.scoopwhoop.com/anj/jkkj/218766177.jpg",
      "https://th.bing.com/th/id/R.5ba331e8e1875864056b2c2c01e175d3?rik=lHz4EFW4krU2Jg&riu=http%3a%2f%2fiitk.ac.in%2fdora%2fgivingback%2fassets%2fimg%2flib.jpg&ehk=CyojtWQUkxIo1z2lBTStC6QlaGgNbdwPtZxdakfoBr8%3d&risl=&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/OIP.GmBzdTM55vhfATmj2Jv9UwHaEo?pid=ImgDet&w=200&h=125&c=7&dpr=1.5",
      "https://iitk.ac.in/dora/spark/issue-5/images/cse-1.jpg",
      "https://i.pinimg.com/236x/c6/28/1c/c6281cb7e36cb6dcfef50692623aa605--building.jpg?nii=t",
      "https://th.bing.com/th/id/OIP.N31FSbzQw_9PEuKtmI4K0AHaFS?w=233&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "https://th.bing.com/th/id/OIP.qm-RUVU7Gq7QPFxPtpY1ywHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    ];

    return (
        <div>
            <Fade>
                <div className="each-slide">
                <div>
                    <img src={images[0]} className='i'/>
                </div>
                {/* <p>First Slide</p> */}
                </div>
                <div className="each-slide">
                {/* <p>Second Slide</p> */}
                <div>
                    <img src={images[1]} className='i'/>
                </div>
                </div>
                <div className="each-slide">
                <div>
                    <img src={images[2]} className='i'/>
                </div>
                {/* <p>Third Slide</p> */}
                </div>
                <div className="each-slide">
                <div>
                    <img src={images[3]} className='i'/>
                </div>
                {/* <p>Third Slide</p> */}
                </div>
                <div className="each-slide">
                <div>
                    <img src={images[4]} className='i'/>
                </div>
                {/* <p>Third Slide</p> */}
                </div>
                <div className="each-slide">
                <div>
                    <img src={images[5]} className='i'/>
                </div>
                {/* <p>Third Slide</p> */}
                </div><div className="each-slide">
                <div>
                    <img src={images[6]} className='i'/>
                </div>
                {/* <p>Third Slide</p> */}
                </div><div className="each-slide">
                <div>
                    <img src={images[7]} className='i'/>
                </div>
                {/* <p>Third Slide</p> */}
                </div><div className="each-slide">
                <div>
                    <img src={images[8]} className='i'/>
                </div>
                {/* <p>Third Slide</p> */}
                </div><div className="each-slide">
                <div>
                    <img src={images[9]} className='i'/>
                </div>
                {/* <p>Third Slide</p> */}
                </div>
            </Fade>
        </div>
      );
};


function Trending_photos() {
  return (
    <><Top /><div className="trend">
        <br/>
        <h1>Trending Photos</h1>
        <br/>
          <Example />
      </div></>
  );
}

export default Trending_photos