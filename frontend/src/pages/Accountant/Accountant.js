import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Accountant/Accountant.css";

const Accountant = () => {
  const navigate = useNavigate();

  const handleCreateAccountantClick = () => {
    //navigate to the payment panel
    navigate("/CreateAccountant");
  };

  // date for table
  const data = [
    {
      id: 1,
      name: "Bibek Thapa",
      userType: "Accountant",
      status: "Active",
      dateAdded: "2023-7-10",
    },
  ];

  // State variable to store the selected accountant details
  const [selectedAccountant, setSelectedAccountant] = useState(null);

  // Function to handle the "See Details" button click
  const handleSeeDetails = (accountant) => {
    setSelectedAccountant(accountant);
  };

  return (
    <>
      {/*...................Rest of the content...................*/}
      <div className="accountant-container">
        <div className="accountantdetailtop">
          <h5>Accountant Details</h5>
          <button onClick={handleCreateAccountantClick}>
            +Create Accountant
          </button>
        </div>
        <div>
          <table className="accountant-table">
            <thead>
              <tr>
                <td>Name</td>
                <td>User Type</td>
                <td>Status</td>
                <td>Date Added</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.userType}</td>
                  <td>{item.status}</td>
                  <td>{item.dateAdded}</td>
                  <td>
                    <button className="acc_edit">Edit</button>
                    <button className="acc_dlt">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedAccountant && (
          <div className="accountant-details">
            <h6>Accountant Name: {selectedAccountant.name}</h6>
            <p>User Type: {selectedAccountant.userType}</p>
            <p>Status: {selectedAccountant.status}</p>
            <p>Date Added: {selectedAccountant.dateAdded}</p>
          </div>
        )}
        <button
          className="acc_details"
          onClick={() => handleSeeDetails(data[0])}
        >
          See Details
        </button>
      </div>
    </>
  );
};

export default Accountant;
