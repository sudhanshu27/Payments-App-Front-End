import React, { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import axios from "axios";

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/api/v1/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserDetails(response.data);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <Appbar firstName={userDetails.firstName} />
      <div className="m-8">
        <Balance value={userDetails.balance} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
