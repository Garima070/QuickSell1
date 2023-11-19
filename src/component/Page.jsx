import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Page = ({ ticket }) => {
  return (
    <div className="ticketCard">
      <div className="ticketIdAndImagContainer">
        <div className="ticketIdContainer">{ticket.id}</div>
        <div className="ticketImageContainer">
          <img
            className="ticketImage"
            src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
            alt="images"
          />
          <div className="statusIndicator"></div>
        </div>
      </div>
      <div className="ticketNameContainer">{ticket.title}</div>
      <div className="featureRequestContainer">
        {/* <FontAwesomeIcon icon={faEllipsis} /> */}
        <div className="featureRequestIconContainer">---</div>
        <div className="featureRequestTextContainer">
          <div className="featureRequestStatus"></div>
          <div className="featureRequestText">Feature Request</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
