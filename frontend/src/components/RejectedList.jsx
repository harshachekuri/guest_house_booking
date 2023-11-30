import axios from "axios";
import { BaseUrl } from "../hooks/BaseUrl";
import { useState, useEffect } from "react";
export const RejectedList = () => {
  const URL = BaseUrl();
  const [acceptedList, setAcceptedList] = useState([]);
  useEffect(() => {
    const fetchAcceptedList = async () => {
      try {
        const result = await axios.get(`${URL}/form/rejectedList`);
        console.log(result.data);
        setAcceptedList(result.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchAcceptedList();
  }, []);
  return (
    <div className="adminPanel">
      <h2>Rejected Requests</h2>
      {acceptedList.map((item, index) => {
        return (
          <div className="request">
            <h3>Rejected Request {index + 1}</h3>
            <p key={item._id}>Hod Name: {item.hodName}</p>
            <p key={item._id}>Department: {item.department}</p>
            <p key={item._id}>Room No: {item.room}</p>
            <p key={item._id}>Booking For: {item.bookingFor}</p>
            <p key={item._id}>Guest Contact: {item.guestPhoneNo}</p>
            <p key={item._id}>From Date: {item.fromDate}</p>
            <p key={item._id}>To Date: {item.toDate}</p>
            <p key={item._id}>Purpose: {item.purpose}</p>
            <p key={item._id}>Status: {item.status}</p>
          </div>
        );
      })}
    </div>
  );
};
