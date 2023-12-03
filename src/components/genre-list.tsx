import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../index';
import { changeActiveGenre } from '../action';
import { GenreListProps } from './props';

export default function GenreList({genres, onGenreClick}: GenreListProps) {
  const activeGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  return(
    <ul className="catalog__genres-list">
      {genres.map((genre: string) => (
        <li key={genre} className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === genre})}>
          <a onClick={() => {
            onGenreClick();
            dispatch(changeActiveGenre({ genre: genre }));
          }} className="catalog__genres-link"
          >{genre}
          </a>
        </li>
      ))}
    </ul>
  );
}
