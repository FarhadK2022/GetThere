import React from "react";
import * as vehicleActions from "../../store/vehicles";
import * as reviewActions from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VehicleCardAll from "../VehicleCard";
import MyMap from "../GoogleMap/MapComponent";
import "./vehicles.css";

function GetAllVehiclesPage() {
  const dispatch = useDispatch();
  const currentVehicles = useSelector((state) => state.vehicle.allVehicles);
  const vehiclesObj = Object.values(currentVehicles);

  useEffect(() => {
    dispatch(vehicleActions.allVehiclesThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(vehicleActions.allVehiclesSearchThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(reviewActions.clearReviewsThunk());
  });
  if (!currentVehicles) {
    return null;
  }

  return (
    <>
    <div className="cars-page-container">
      <div className="cars-list">
        {vehiclesObj.map((vehicle) => (
          <Link to={`/cars/${vehicle.id}`}>
            <div className="card" key={vehicle.id} value={vehicle.id}>
              <VehicleCardAll vehicle={vehicle} />
            </div>
          </Link>
        ))}
      </div>
      <div className="google-maps-api">
         <MyMap/>
      </div>
     </div>
      <footer className="footer" color="black">
        <a
          href="https://www.linkedin.com/in/farhad-koushan-63b920167/"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin" />
        </a>{" "}
        Developed By Farhad Koushan{" "}
        <a
          href="https://github.com/FarhadK2022"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-github" />
        </a>
      </footer>
    </>
  );
}

export default GetAllVehiclesPage;
