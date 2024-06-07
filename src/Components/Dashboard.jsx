import React from "react";
import User_card from "../Cards/User_card";
import Retailers_card from "../Cards/Retailers_card";
import Customer_card from "../Cards/Customer_card";
function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <User_card />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <Retailers_card />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <Customer_card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
