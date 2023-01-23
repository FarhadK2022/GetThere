import { useDispatch, useSelector } from "react-redux";
import * as reviewActions from "../../store/reviews";
import EditReviewFormModal from "../EditReviewFormModal";
import "./ReviewCard.css";

function ReviewCard({ review }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser === null || sessionUser === undefined) {
    return (
      <div className="reviewcard">
        <div className="reviewinfo">
          <i className="fas fa-user-circle fa-2xl" />
          <p>
            {review.User.firstName}
          </p>
          <p>{review.review}</p>
          <p>{review.stars} ★</p>
        </div>
      </div>
    );
  } else if (sessionUser.id === review.userId) {
    return (
      <div className="reviewcard">
        <div className="reviewinfo">
          <div className="top-line">
            <i className="fas fa-user-circle fa-2xl" />
            <p>
              {review.User.firstName}
            </p>
          </div>
          <div className="middle-line">
            <p>{review.review}</p>
          </div>
          <div className="bottom-line">
            <p>{review.stars} ★</p>
            <EditReviewFormModal review={review} />
            <button
              className="button"
              onClick={(event) => {
                event.stopPropagation();
                dispatch(reviewActions.deleteReviewThunk(review.id));
              }}
            >
              Delete Review
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="reviewcard">
        <div className="reviewinfo">
          <i className="fas fa-user-circle fa-2xl" />
          <p>
            {review.User.firstName}
          </p>
          <p>{review.review}</p>
          <p>{review.stars} ★</p>
        </div>
      </div>
    );
  }
}

export default ReviewCard;
