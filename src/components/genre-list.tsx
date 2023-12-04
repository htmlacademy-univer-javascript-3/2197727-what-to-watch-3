import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../index';
import { changeActiveGenre } from './genre-process';
import { getActiveGenre } from './genre-process-selectors';
import { GenreListProps } from './props';

export default function GenreList({genres, onGenreClick}: GenreListProps) {
  const activeGenre = useAppSelector(getActiveGenre);
  const dispatch = useAppDispatch();

  return(
    <ul className="catalog__genres-list">
      {genres.map((genre: string) => (
        <li key={genre} className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === genre})}>
          <a onClick={() => {
            onGenreClick();
            dispatch(changeActiveGenre(genre));
          }} className="catalog__genres-link"
          >{genre}
          </a>
        </li>
      ))}
    </ul>
  );
}
