import React, { useEffect, useState } from "react";
import rideData from "../../Data/Data.json";
import Rides from "../Rides/Rides";
import "./Home.css";

const Home = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    setRides(rideData);
  }, []);
  return (
    <div className="main-section">
      <div className="main-container">
        <div className="cart-info">
          {rideData.map((ride) => (
            <Rides ride={ride}></Rides>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
