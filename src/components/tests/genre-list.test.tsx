import { render, screen } from '@testing-library/react';
import { withStore, withHistory } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import { DEFAULT_GENRE } from '../../const';
import GenreList from '../genre-list';

describe('Genre list', () => {
  const mockGenre = 'Action';
  const mockGenres = [DEFAULT_GENRE, mockGenre];
  const onGenreClick = vi.fn();

  it('render correct', () => {
    const { withStoreComponent } = withStore(
      withHistory(<GenreList genres={mockGenres} onGenreClick={onGenreClick}/>),
      makeFakeStore(),
    );

    render(withStoreComponent);

    expect(screen.getByTestId(`tab-${DEFAULT_GENRE}`)).toBeInTheDocument();
    expect(screen.getByTestId(`tab-${DEFAULT_GENRE}`)).toHaveClass(
      'catalog__genres-item--active'
    );
    expect(screen.getByTestId(`tab-${mockGenre}`)).toBeInTheDocument();
  });
});
