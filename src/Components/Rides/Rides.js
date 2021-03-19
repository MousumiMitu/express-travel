import React from "react";
import { useHistory } from "react-router";
import "./Rides.css";

const Rides = (props) => {
  const { name, imgUrl, id } = props.ride;
  const history = useHistory();
  const handleClickDetail = (rideId) => {
    const url = `/ride/${rideId}`;
    history.push(url);
  };
  return (
    <div className="card-box" onClick={() => handleClickDetail(name)}>
      <div className="img-box">
        <img src={imgUrl} alt="" />
      </div>
      <div className="name-field">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Rides;
