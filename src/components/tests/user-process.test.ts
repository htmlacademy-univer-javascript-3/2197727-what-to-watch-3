import { AuthorizationStatus } from '../../const';
import { loginAction } from '../api-action';
import { userProcess } from '../../user-process';
import { makeFakeAvatarUrl } from '../../utils/mocks';

describe('User process slice', () => {
  const mockAvatarUrl = makeFakeAvatarUrl();

  it('return initial state with empty action', () => {
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, avatarUrl: '' };
    const emptyAction = { type: '' };
    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('return default initial state with empty action', () => {
    const expectedState = { authorizationStatus: AuthorizationStatus.Unknown, avatarUrl: '' };
    const emptyAction = { type: '' };
    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('set "Auth" with "loginAction.fulfilled" action', () => {
    const initialState = { authorizationStatus: AuthorizationStatus.NoAuth, avatarUrl: '' };
    const expectedState = { authorizationStatus: AuthorizationStatus.Auth, avatarUrl: mockAvatarUrl };
    const result = userProcess.reducer(initialState, loginAction.fulfilled(mockAvatarUrl, '', { email: '', password: '' }));

    expect(result).toEqual(expectedState);
  });

  it('set "NoAuth" with "loginAction.rejected" action', () => {
    const initialState = { authorizationStatus: AuthorizationStatus.Auth, avatarUrl: mockAvatarUrl };
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, avatarUrl: '' };
    const result = userProcess.reducer(initialState, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
