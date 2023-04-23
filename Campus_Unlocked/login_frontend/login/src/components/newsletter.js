import React from "react";
// import Events from "./components/Events";
// import Header from "./components/header";
// import Top from "./components/menu";
// import {FaEnvelope} from "react-icons/fa";
import Top from "./Header";
import "../news.css";
import { useEffect, useState } from 'react';


function Header() {
  return (
    <div>

      <div style={{ paddingTop: "20px", paddingLeft: "50px", display: "flex", alignItems: "center", marginBottom: "-20px" }}>
        <h1 style={{ textAlign: "left" }}>NEWSLETTER</h1>
        {/* <FaEnvelope style={{ marginLeft: "20px", fontSize: "30px" }} /> */}
      </div>
      <div style={{ borderBottom: "1px solid black" }}></div>
    </div>
  );
}
const events = [
  {
    id: 1,
    title: "Event 1",
    date: "2023-03-21",
    time: "10:00 AM"
  },
  {
    id: 2,
    title: "Event 2",
    date: "2023-03-20",
    time: "2:30 PM"
  },
  {
    id: 3,
    title: "Event 3",
    date: "2023-03-22",
    time: "7:00 PM"
  },
  {
    id: 4,
    title: "Event 4",
    date: "2023-03-16",
    time: "11:00 AM"
  },
];

const EventsByDate = () => {
  const today = new Date().toISOString().slice(0, 10);
  const twoDaysFromNow = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const upcomingEvents = events.filter(
    (event) => event.date >= today && event.date <= twoDaysFromNow
  );

  return (
    <div>
      <h2>Upcoming Events</h2>
      {upcomingEvents.length === 0 ? (
        <p>No upcoming events in the next 2 days.</p>
      ) : (
        <div>
          {upcomingEvents.map((event) => (
            <div key={event.id}>
              <h3>{event.date}</h3>
              <p>{event.title} - {event.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function Events() {
    const [token, setToken] = useState(localStorage.getItem('token'));
  
    useEffect(() => {
      setToken(localStorage.getItem('token'));
    }, []);
  return (
    <><div className="row_news">
      <button className="column_news">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Antaragni_Generic_Logo.png" alt="Image 1" className="r" />
        <p>Antaragni</p>
        <EventsByDate />
      </button>
      <div className="column_news">
        <img src="https://udghosh.org.in/images/logo.png" alt="Image 2" className="r" />
        <p>Udghosh</p>
        <EventsByDate />
      </div>
      <div className="column_news">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Techkriti_logo.png" alt="Image 3" className="r" />
        <p>Techkriti</p>
        <EventsByDate />
      </div>
      {token !== null && (
        <div className="column_news">
          <img src="https://iitk.ac.in/dora/givingback/assets/img/lib.jpg" alt="Image 3" className="r" />
          <p>Events</p>
          <EventsByDate />
        </div>
      )}
    </div></>
  );
}


function News() {
  return (
    <div >
      <Top/>
      <Header />
      <Events />
    </div>
    // </div>
  );
}

export default News

