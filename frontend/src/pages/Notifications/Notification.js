import React from "react";
import { Link } from "react-router-dom";
import "../Notifications/Notification.css";
const Notification = () => {
  return (
    <>
      {/*................Rest of the content............*/}
      <div className="notification-container">
        <h4>You will get all the notification here.</h4>
        <h3>Payment Records</h3>
        <div className="pay-detail">
          <h2>Bibek Thapa</h2>
          <p>
            The student has paid his Due amount of this semester. You can
            collect the information from here.{" "}
            <Link to="/NotificationDetail" className="seepaydetail">see details</Link>
          </p>
        </div>
        <div className="pay-detail">
          <h2>Yujin Thapa</h2>
          <p>
            The student has paid his Due amount of this semester. You can
            collect the information from here.{" "}
            <Link to="/NotificationDetail" className="seepaydetail">see details</Link>
          </p>
        </div>
        <div className="pay-detail">
          <h2>Bhuwan Darai</h2>
          <p>
            The student has paid his Due amount of this semester. You can
            collect the information from here.{" "}
            <Link to="/NotificationDetail" className="seepaydetail">see details</Link>
          </p>
        </div>
        <div className="pay-detail">
          <h2>Kumar Thapa</h2>
          <p>
            The student has paid his Due amount of this semester. You can
            collect the information from here.{" "}
            <Link to="/NotificationDetail" className="seepaydetail">see details</Link>
          </p>
        </div>
        <div className="pay-detail">
          <h2>Milan Thapa</h2>
          <p>
            The student has paid his Due amount of this semester. You can
            collect the information from here.{" "}
            <Link to="/NotificationDetail" className="seepaydetail">see details</Link>
          </p>
        </div>
        <div className="pay-detail">
          <h2>Bijaya Ale</h2>
          <p>
            The student has paid his Due amount of this semester. You can
            collect the information from here.{" "}
            <Link to="/NotificationDetail" className="seepaydetail">see details</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Notification;
// import React from "react";

// function Notification() {
//   return <div>Notification</div>;
// }

// export default Notification;
