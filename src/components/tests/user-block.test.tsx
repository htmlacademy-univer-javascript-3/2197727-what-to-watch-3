import { render, screen } from '@testing-library/react';
import { AuthorizationStatus, NameSpace } from '../../const';
import { withStore, withHistory } from '../../utils/mock-component';
import UserBlock from '../user-block';

describe('User block', () => {
  it('render avatar and "sing out" button when user authorized', () => {
    const { withStoreComponent } = withStore(withHistory(<UserBlock/>), {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
        avatarUrl: '',
      },
    });

    render(withStoreComponent);

    expect(screen.getByAltText(/User avatar/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('render "sing in" button when user not authorized', () => {
    const { withStoreComponent } = withStore(withHistory(<UserBlock/>), {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        avatarUrl: '',
      },
    });

    render(withStoreComponent);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
