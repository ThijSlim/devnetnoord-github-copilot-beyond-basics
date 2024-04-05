import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { Airplane } from "../components/Airplane";
import {
  animateCrashed,
  animateInitialFlight,
  animateLanded,
  animateManeuvers,
} from "../animationHelpers";
import PlaneService from "../services/PlaneService";
import FlightService from "../services/FlightService";
import Container from "../components/Container";

gsap.registerPlugin(MotionPathPlugin);

const PlaneDetail = () => {
  const { planeId } = useParams();
  const [crashed, setCrashed] = useState(false);
  const [landed, setLanded] = useState(false);
  const planeRef = useRef(null);
  const explosionRef = useRef(null);
  const debrisRefs = useRef([...Array(30)].map(() => React.createRef())); // Create 10 debris refs
  const hasRunEffect = useRef(false);

  const [planeDetails, setPlaneDetails] = useState<any>({});
  const [flightDetails, setFlightDetails] = useState<any>({});
  useEffect(() => {
    async function getPlaneDetails() {
      try {
        const response = await PlaneService.getPlaneById(planeId as string);
        setPlaneDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    async function getFlightDetails() {
      try {
        const response = await FlightService.getFlightById(planeId as string);
        setFlightDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getPlaneDetails();
    getFlightDetails();
  }, [planeId]);

  useEffect(() => {
    if (hasRunEffect.current) {
      return;
    }
    hasRunEffect.current = true;

    animateInitialFlight(planeRef);

    FlightService.calculateAerodynamics(planeId as string)
      .then(() => {
        setTimeout(() => {
          setLanded(true); // Simulate safe landing
        });
      })
      .catch(() => {
        setTimeout(() => {
          setCrashed(true); // Simulate crash
        });
      });
  }, []);

  useEffect(() => {
    if (!planeRef.current) {
      return;
    }

    if (landed) {
      animateLanded(planeRef);
    }

    if (crashed) {
      animateCrashed(planeRef, explosionRef, debrisRefs);
    }
  }, [crashed, landed]);

  if (!planeDetails) {
    return <div>Plane not found</div>;
  }

  const startFlightSimulation = () => {
    animateManeuvers(planeRef, flightDetails.aerobaticSequenceSignature);
  };

  return (
    <div>
      <Container>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900">
            {planeDetails.name}
          </h2>
          <p className="text-xl text-amber-800">{planeDetails.year}</p>
          <p className="mt-4 mb-12 text-amber-700">
            {planeDetails.description}
          </p>
          {landed && (
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={startFlightSimulation}
            >
              Start Flight Maneuver Simulation
            </button>
          )}
          <div className="relative w-72 h-72">
            <div ref={planeRef}>
              <Airplane />
            </div>

            <div
              ref={explosionRef}
              className="absolute top-0 left-0 right-0 bottom-0"
              style={{
                borderRadius: "50%",
                backgroundColor: "transparent",
                zIndex: 2,
              }}
            ></div>
            {debrisRefs.current.map((ref, index) => (
              <div
                key={index}
                ref={ref as React.RefObject<HTMLDivElement>}
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  backgroundColor: "#333",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  opacity: 0, // Initialize with opacity 0
                }}
              ></div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

// Generate a random number within a range

export default PlaneDetail;
