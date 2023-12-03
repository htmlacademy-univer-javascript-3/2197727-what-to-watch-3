import { useAppDispatch } from '../index';
import { changeShownFilmCount } from '../action';

export default function ShowMoreFilmButton() {
  const dispatch = useAppDispatch();
  return(
    <div className="catalog__more">
      <button onClick={() => dispatch(changeShownFilmCount())} className="catalog__button" type="button">Show more</button>
    </div>
  );
}
