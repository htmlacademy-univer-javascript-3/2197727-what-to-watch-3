import { getFilmRating } from '../get-film-rating';

describe('Get film rating', () => {
  it('return "Bad" with rating < 3', () => {
    const rating = 1.2;
    const expectedTextRating = 'Bad';
    const result = getFilmRating(rating);

    expect(result).toBe(expectedTextRating);
  });

  it('return "Normal" with rating < 5 and >= 3', () => {
    const rating = 4.4;
    const expectedTextRating = 'Normal';
    const result = getFilmRating(rating);

    expect(result).toBe(expectedTextRating);
  });

  it('return "Good" with rating < 8 and >= 5', () => {
    const rating = 5;
    const expectedTextRating = 'Good';
    const result = getFilmRating(rating);

    expect(result).toBe(expectedTextRating);
  });

  it('return "Very good" with rating < 10 and >=8', () => {
    const rating = 9.3;
    const expectedTextRating = 'Very good';
    const result = getFilmRating(rating);

    expect(result).toBe(expectedTextRating);
  });

  it('return "Awesome" with rating = 10', () => {
    const rating = 10;
    const expectedTextRating = 'Awesome';
    const result = getFilmRating(rating);

    expect(result).toBe(expectedTextRating);
  });
});
