// pages/HomePage.tsx
import React, { useEffect } from "react";
import Banner from "../components/Banner";
import PlaneList from "../components/PlaneList";
import PlaneService from "../services/PlaneService";
import Container from "../components/Container";

function HomePage() {
  const [planes, setPlanes] = React.useState([]);

  useEffect(() => {
    async function getPlanes() {
      try {
        const response = await PlaneService.getPlanes();
        setPlanes(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getPlanes();
  }, []);

  return (
    <div>
      <Banner />
      <Container>
        <PlaneList planes={planes} />
      </Container>
    </div>
  );
}

export default HomePage;
