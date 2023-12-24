import { AuthorizationStatus, NameSpace } from '../../const';
import { getAuthorizationStatus, getAvatarUrl } from '../../user-process-selectors';
import { makeFakeAvatarUrl } from '../../utils/mocks';

describe('User process selectors', () => {
  const mockAuthorizationStatus = AuthorizationStatus.Auth;
  const mockAvatarUrl = makeFakeAvatarUrl();

  it('return "authorizationStatus" from state', () => {
    const state = {
      [NameSpace.User]: {
        authorizationStatus: mockAuthorizationStatus,
        avatarUrl: mockAvatarUrl,
      }
    };
    const result = getAuthorizationStatus(state);

    expect(result).toBe(mockAuthorizationStatus);
  });

  it('return "avatarUrl" from state', () => {
    const state = {
      [NameSpace.User]: {
        authorizationStatus: mockAuthorizationStatus,
        avatarUrl: mockAvatarUrl,
      }
    };
    const result = getAvatarUrl(state);

    expect(result).toBe(mockAvatarUrl);
  });
});
