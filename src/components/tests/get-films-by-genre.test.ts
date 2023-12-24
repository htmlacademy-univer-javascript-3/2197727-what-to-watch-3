import { DEFAULT_GENRE } from '../../const';
import { PreviewFilm } from '../preview-film';
import { getFilmsByGenre } from '../get-films-by-genre';

describe('Get films by genre', () => {
  const mockFilms: PreviewFilm[] = [
    {
      id: '1',
      name: '',
      previewImage: '',
      previewVideoLink: '',
      genre: 'Action',
    },
  ];

  it('return all films with default genre', () => {
    const expectedFilms = [... mockFilms];
    const result = getFilmsByGenre(mockFilms, DEFAULT_GENRE);

    expect(result).toEqual(expectedFilms);
  });
});
