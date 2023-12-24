import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import { makeFakeFilm } from '../../utils/mocks';
import { getRunTime } from '../../const';
import FilmDetails from '../film-details';

describe('Film details', () => {
  it('render correct', () => {
    const film = makeFakeFilm();
    const filmDirector = film.director;
    const filmStarring = film.starring;
    const filmRunTime = film.runTime;
    const filmReleased = film.released;
    const filmGenre = film.genre;
    const preparedComponent = withHistory(
      <FilmDetails
        director={filmDirector}
        starring={filmStarring}
        runTime={filmRunTime}
        released={filmReleased}
        genre={filmGenre}
      />
    );

    render(preparedComponent);

    expect(screen.getByText(/Director/i)).toBeInTheDocument();
    expect(screen.getByText(filmDirector)).toBeInTheDocument();
    expect(screen.getByText(/Starring/i)).toBeInTheDocument();

    filmStarring.forEach((star) => {
      expect(screen.getByTestId(star)).toBeInTheDocument();
    });

    expect(screen.getByText(/Run Time/i)).toBeInTheDocument();
    expect(screen.getByText(getRunTime(filmRunTime))).toBeInTheDocument();
    expect(screen.getByText(/Released/i)).toBeInTheDocument();
    expect(screen.getByText(filmReleased)).toBeInTheDocument();
    expect(screen.getByText(/Genre/i)).toBeInTheDocument();
    expect(screen.getByText(filmGenre)).toBeInTheDocument();
  });
});
