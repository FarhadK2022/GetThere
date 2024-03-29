import React from "react";
import * as vehicleActions from "../../store/vehicles";
import * as reviewActions from "../../store/reviews";
import * as bookingActions from "../../store/bookings";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ReviewCard from "../ReviewCard";
import VehicleCardUser from "../VehicleCard/UserPageCards";
import BookingCard from "../BookingsCard";

function UserPage() {
  const dispatch = useDispatch();
  const currentVehicles = useSelector((state) => state.vehicle.allVehicles);
  const vehiclesObj = Object.values(currentVehicles);
  const currentReviews = useSelector((state) => state.reviews.allReviews);
  const reviewsArr = Object.values(currentReviews);
  const currentBookings = useSelector((state) => state.bookings.allBookings);
  const bookingsArr = Object.values(currentBookings);

  useEffect(() => {
    dispatch(vehicleActions.currentVehiclesThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(bookingActions.currentBookingsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(reviewActions.currentReviewsThunk());
  }, [dispatch]);

  return (
    <>
      <div style={{ backgroundColor: "none", display: "flex", flexDirection: "column", width: "1400px" }}>
        <h1 style={{ paddingTop: 55, display: "flex", justifyContent: "center", fontSize: 50 }}>Welcome to Your GetThere Cockpit</h1>
        <h2 >Your Listings:</h2>
        <div className="cars-list" style={{ display: "flex", flexDirection: "row", width: "1400px" }}>
          {vehiclesObj.map((vehicle) => (
            <div className="card" key={vehicle.id} value={vehicle.id}>
              <VehicleCardUser vehicle={vehicle} />
            </div>
          ))}
        </div>
        <h2>Your Bookings:</h2>
        <div className="cars-list" style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "1400px", columnGap: "40px", rowGap: "40px" }}>
          {bookingsArr.map((booking) => (
            <div className="card" key={booking.id} value={booking.id}>
              <BookingCard booking={booking} />
            </div>
          ))}
        </div>
        <h2>Your Reviews:</h2>
        <div className="reviews-section" style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "1400px", columnGap: "30px", rowGap: "40px" }}>
          {reviewsArr.map((review) => (
            <div className="reviewcard" key={review.id} value={review.id}>
              <ReviewCard review={review} />
            </div>
          ))}
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
      </div>
    </>
  );
}

export default UserPage;
