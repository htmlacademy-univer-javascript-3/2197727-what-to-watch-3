import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import { ReviewData } from '../props';
import FilmReviews from '../tab-film-reviews';

describe('Film reviews', () => {
  it('render correct', () => {
    const reviews = [] as ReviewData[];
    const filmReviewsId = 'film-card__reviews-col';
    const preparedComponent = withHistory(<FilmReviews reviews={reviews}/>);

    render(preparedComponent);

    expect(screen.getByTestId(filmReviewsId)).toBeInTheDocument();
  });
});
