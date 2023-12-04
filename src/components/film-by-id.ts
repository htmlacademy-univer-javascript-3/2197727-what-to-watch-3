import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '..';
import { fetchFilmAction } from '../components/api-action';
import { getCurrentFilm } from '../components/film-data-selectors';

export default function useFilmById() {
  const urlParams = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (urlParams.id) {
      dispatch(fetchFilmAction({filmId: urlParams.id}));
    }
  }, [dispatch, urlParams.id]);

  return useAppSelector(getCurrentFilm);
}
