import  { useState, useEffect } from 'react';
import axios from 'axios';
import Review from '../Review';
import './index.css';

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1');
        setReviews(response.data.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="reviews-section">
      <div className='header-container-review'>
      <h2 className='header-review'>Customer Reviews</h2>

      </div>
     
      <div className="reviews-list">
        {reviews.map(review => (
          <Review key={review.ID} review={review} />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;