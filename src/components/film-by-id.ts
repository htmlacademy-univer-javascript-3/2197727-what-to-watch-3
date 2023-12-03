import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '..';
import { fetchFilmAction } from '../components/api-action';
import { store } from '../store-index';

export default function useFilmById() {
  const urlParams = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (urlParams.id) {
      store.dispatch(fetchFilmAction({filmId: urlParams.id}));
    }
  }, [dispatch, urlParams.id]);

  return useAppSelector((state) => state.currentFilm);
}
