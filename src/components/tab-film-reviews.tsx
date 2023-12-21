import { ReviewData, FilmReviewsProps } from './props';
import Review from '../components/review';

export default function FilmReviews({reviews}: FilmReviewsProps) {
    return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col" data-testid="film-card__reviews-col">
        {reviews.map((review: ReviewData) => (
          <Review
            key={review.id}
            date={review.date}
            comment={review.comment}
            user={review.user}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
}
