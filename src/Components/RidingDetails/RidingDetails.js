import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import riderData from "../../Data/Data.json";
import "./RidingDetails.css";

const RidingDetails = () => {
  let { rideId } = useParams();
  const [formInfo, setFormInfo] = useState(false);

  const ridingInfo = riderData.find((ride) => ride.name == rideId);
  const { imgUrl, name, fare1, fare2, fare3 } = ridingInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormInfo(!formInfo);
  };
  // const handleBlur = (e) => {
  //   const formValue = e.target.value;
  //   // setFormInfo(formValue);
  // };

  return (
    <div className="details-section">
      <div className="details-part">
        <div className="destination-form">
          <form>
            <label htmlFor="from">Pickup from</label>
            <br />
            <input type="text" name="from" required />
            <br />
            <label htmlFor="to">Pickup to</label>
            <br />
            <input type="text" name="to" required />
            <br />
            <button onClick={handleSubmit}>Submit</button>
          </form>
          <div className="fare-details">
            {formInfo && <img src={imgUrl} alt="" />}
            {formInfo && <p>{name}</p>}
            {formInfo && <p>${fare1}</p>}
          </div>
          <div className="fare-details">
            {formInfo && <img src={imgUrl} alt="" />}
            {formInfo && <p>{name}</p>}
            {formInfo && <p>${fare2}</p>}
          </div>
          <div className="fare-details">
            {formInfo && <img src={imgUrl} alt="" />}
            {formInfo && <p>{name}</p>}
            {formInfo && <p>${fare3}</p>}
          </div>
        </div>
        <div className="map-area">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14611.390630585736!2d90.3942953694003!3d23.717133699211004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8fd46c31205%3A0xf7b6fb1e0624cd61!2sBangshal%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1616179036504!5m2!1sen!2sbd"
            width="100%"
            height="450px"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default RidingDetails;
