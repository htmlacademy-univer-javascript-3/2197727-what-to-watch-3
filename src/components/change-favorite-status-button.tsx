import { useState } from 'react';
import { useAppDispatch } from '../index';
import { postFilmFavoriteStatus } from '../components/api-action';
import { AppRoute, AuthorizationStatus } from '../const';
import { useNavigate } from 'react-router-dom';
import { ChangeFavoriteStatusButtonProps } from './props';

export default function ChangeFavoriteStatusButton({filmId, isFavorite, favoriteFilmCount, authorizationStatus}: ChangeFavoriteStatusButtonProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isCurrentFavorite, setCurrentFavorite] = useState(isFavorite);

  return(
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={() => {
        if(authorizationStatus === AuthorizationStatus.Auth) {
          dispatch(postFilmFavoriteStatus({
            id: filmId,
            status: Number(!isCurrentFavorite),
          }));
          setCurrentFavorite(!isCurrentFavorite);
        } else {
          navigate(`${AppRoute.SignIn}`);
        }
      }}
    >
      {isCurrentFavorite && authorizationStatus === AuthorizationStatus.Auth ? (
        <svg width="18" height="14" viewBox="0 0 18 14">
          <use xlinkHref="#in-list"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      )}

      <span>My list</span>
      <span className="film-card__count">{authorizationStatus === AuthorizationStatus.Auth ? favoriteFilmCount : 0}</span>
    </button>
  );
}
