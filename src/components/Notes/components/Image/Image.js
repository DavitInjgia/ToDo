import React, { useEffect, useState } from "react";
import flower from './../../../../assets/flower.png'; 
import './Image.css'
function Image() {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div className="image-container">
    <img src={flower} alt="flower"  className="image"/>
    <div className="image-datetime">
        <p className="image-date"> {currentDate.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' })}</p>
        <p className="image-time"> {currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
    </div>
  </div>;
}

export default Image;
