import React from "react";
import NavBar from "../components/LandingPage/NavBar";
import Banner from "../components/LandingPage/Banner";
import { useState, useEffect } from "react";
import CardList from "../components/LandingPage/CardList";
import axios from "axios";
function LandingPage() {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/public/APICard.json");
        setCoinsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <NavBar />
      <Banner />
      <CardList coinsData={coinsData} />
    </div>
  );
}

export default LandingPage;
