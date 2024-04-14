import './index.css';

const Review = ({ review }) => {
  return (
    <div className="review">
      <p>ID: {review.ID}</p>
      <p>Name: {review.Name}</p>
      <p>Company: {review.Company}</p>
      <p>Platform: {review.Platform}</p>
      <p>Reviews: {review.Reviews}</p>
      <p>Email: {review.email}</p>
      <p>Rating: {review.rating}</p>
      <p>Date Created: {review.datecreated}</p>
      <p>Language: {review.Language}</p>
      <p>Status: {review.Status}</p>
      <p>Link: <a href={review.link} target="_blank" rel="noopener noreferrer">Click here</a></p>
    </div>
  );
};

export default Review;