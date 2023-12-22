import { ChangeEvent, FormEvent, useState } from 'react';
import { RATING_STAR_COUNT, MAX_REVIEW_TEXT_LENGTH } from '../const';
import { useAppDispatch, useAppSelector } from '../index';
import { postReview } from '../components/api-action';
import { FormReviewProps } from './props';

export default function FormReview({filmId}: FormReviewProps) {
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');
  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };
  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(evt.target.value);
  };
  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(
      postReview({
        id: filmId,
        comment: reviewText,
        rating: Number(rating),
      })
    );
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {Array.from({ length: RATING_STAR_COUNT }, (_, i) => i + 1)
              .reverse()
              .map((number) => [
                <input
                  data-testid="rating-star"
                  key={`input-star-${number}`}
                  className="rating__input"
                  onChange={handleRatingChange}
                  id={`star-${number}`}
                  type="radio"
                  name="rating"
                  value={`${number}`}
                  checked={`${number}` === rating}
                />,
                <label
                  key={`label-star-${number}`}
                  className="rating__label"
                  htmlFor={`star-${number}`}
                >
                  Rating {number}
                </label>
              ])}
          </div>
        </div>

        <div className="add-review__text" data-testid="add-review-text">
          <textarea
            value={reviewText}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={handleReviewChange}
            maxLength={MAX_REVIEW_TEXT_LENGTH}
          >
          </textarea>

          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>);
}
