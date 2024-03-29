import React, { useState, useEffect } from "react";
import * as reviewActions from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import "./EditReviewFormModal.css";

function EditReviewForm({ review, setShowModal }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const currentCar = useSelector((state) => state.vehicle.singleVehicle);
  const [ereview, setReview] = useState(review.review.review);
  const [estars, setStars] = useState(review.review.stars);
  // const [errors, setErrors] = useState([]);
  let reviewId = review.review.id;
  let vehicleId = currentCar.id;

  useEffect(() => {
    dispatch(reviewActions.allReviewsThunk(vehicleId));
  }, [dispatch, vehicleId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editReview = {
      ereview,
      estars,
    };

    const edittedReview = await dispatch(
      reviewActions.editReviewThunk(editReview, reviewId, currentUser)
    );
    if (edittedReview) {
      setShowModal(false);
      return await dispatch(reviewActions.allReviewsThunk(vehicleId));
    }
  };

  return (
    <form className="formModal" onSubmit={handleSubmit}>
      <h1>Edit Review</h1>
      {/* <h2>Review Details</h2> */}
      <label>
        Review
        <input
          className="inputField"
          type="text"
          value={ereview}
          onChange={(e) => setReview(e.target.value)}
          required
          minLength={50}
          maxLength={200}
        />
      </label>
      <label>
        Stars
        <select
          className="inputField"
          // type="text"
          value={estars}
          onChange={(e) => setStars(e.target.value)}
          required
        >
          <option disabled></option>
          <option value={5}>★★★★★</option>
          <option value={4}>★★★★</option>
          <option value={3}>★★★</option>
          <option value={2}>★★</option>
          <option value={1}>★</option>
        </select>
      </label>

      <button className="button" type="submit">
        Submit Changes
      </button>
    </form>
  );
}

export default EditReviewForm;
