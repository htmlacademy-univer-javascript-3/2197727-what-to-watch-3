import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../index';
import { changeActiveGenre } from './genre-process';
import { getActiveGenre } from './genre-process-selectors';
import { GenreListProps } from './props';
import { Link } from 'react-router-dom';

export default function GenreList({genres, onGenreClick}: GenreListProps) {
  const activeGenre = useAppSelector(getActiveGenre);
  const dispatch = useAppDispatch();

  return(
    <ul className="catalog__genres-list">
      {genres.map((genre: string) => (
        <li key={genre} data-testid={`tab-${genre}`} className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === genre})}>
          <Link to="#" onClick={() => {
            onGenreClick();
            dispatch(changeActiveGenre(genre));
          }} className="catalog__genres-link"
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}
