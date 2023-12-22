import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { withStore, withHistory } from '../../utils/mock-component';
import { extractActionsTypes, makeFakeStore } from '../../utils/mocks';
import ChangeFavoriteStatusButton from '../change-favorite-status-button';
import { APIRoute, AuthorizationStatus, NameSpace } from '../../const';
import { postFilmFavoriteStatus } from '../api-action';

describe('change favorite status button', () => {
  it('render correct', () => {
    const { withStoreComponent } = withStore(
      withHistory(
        <ChangeFavoriteStatusButton
          filmId='1'
          isFavorite={false}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
      ),
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it('render correct when user no authorization', () => {
    const { withStoreComponent } = withStore(
      withHistory(
        <ChangeFavoriteStatusButton
          filmId='1'
          isFavorite={false}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
      ),
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByTestId('add')).toBeInTheDocument();
  });

  it('render svg "add" when film is not favorite', () => {
    const { withStoreComponent } = withStore(
      withHistory(
        <ChangeFavoriteStatusButton
          filmId='1'
          isFavorite={false}
          authorizationStatus={AuthorizationStatus.Auth}
        />
      ),
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId('add')).toBeInTheDocument();
  });

  it('add film in favorite on click', async () => {
    const mockFilmId = '1';
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(
      withHistory(
        <ChangeFavoriteStatusButton
          filmId={mockFilmId}
          isFavorite={false}
          authorizationStatus={AuthorizationStatus.Auth}
        />
      ),
      makeFakeStore({
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.Auth,
          avatarUrl: '',
        },
      })
    );
    render(withStoreComponent);
    mockAxiosAdapter.onPost(`${APIRoute.FavoriteFilms}/${mockFilmId}/1`).reply(200);
    await userEvent.click(screen.getByRole('button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      postFilmFavoriteStatus.pending.type,
      postFilmFavoriteStatus.fulfilled.type,
    ]);
    expect(screen.getByTestId('in-list')).toBeInTheDocument();
  });

  it('remove film in favorite on click', async () => {
    const mockFilmId = '1';
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(
      withHistory(
        <ChangeFavoriteStatusButton
          filmId={mockFilmId}
          isFavorite
          authorizationStatus={AuthorizationStatus.Auth}
        />
      ),
      makeFakeStore({
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.Auth,
          avatarUrl: '',
        },
      })
    );
    render(withStoreComponent);
    mockAxiosAdapter.onPost(`${APIRoute.FavoriteFilms}/${mockFilmId}/0`).reply(200);
    await userEvent.click(screen.getByRole('button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      postFilmFavoriteStatus.pending.type,
      postFilmFavoriteStatus.fulfilled.type,
    ]);
    expect(screen.getByTestId('add')).toBeInTheDocument();
  });
});
