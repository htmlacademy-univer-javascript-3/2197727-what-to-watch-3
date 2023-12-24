import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import FilmList from '../film-list';
import { makeFakePreviewFilms } from '../../utils/mocks';

describe('Film list', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('render correct', () => {
    const mockPreviewFilms = makeFakePreviewFilms();
    const preparedComponent = withHistory(
      <FilmList
        films={mockPreviewFilms}
        filmCount={mockPreviewFilms.length}
      />
    );

    render(preparedComponent);

    expect(screen.getAllByRole('article')).toHaveLength(1);
  });

  it('render correctly when films.length < shown film count', () => {
    const mockPreviewFilms = new Array(7).fill(null).map(() => makeFakePreviewFilms()[0]);
    const shownFilmCount = 8;
    const preparedComponent = withHistory(
      <FilmList
        films={mockPreviewFilms}
        filmCount={shownFilmCount}
      />
    );

    render(preparedComponent);

    expect(screen.queryByText(mockPreviewFilms[shownFilmCount].name)).not.toBeInTheDocument();
  });
});
