import { changeShownFilmCount } from '../change-shown-film-count';

describe('change shown film count', () => {
  it('return shown film count + "SHOWN_FILM_COUNT"(8)', () => {
    const currentShownFilmCount = 1;
    const expectedShownFilmCount = 9;
    const result = changeShownFilmCount(currentShownFilmCount);

    expect(result).toBe(expectedShownFilmCount);
  });
});
