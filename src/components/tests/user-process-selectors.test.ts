import { AuthorizationStatus, NameSpace } from '../../const';
import { getAuthorizationStatus } from '../../user-process-selectors';

describe('UserProcess selectors', () => {
  it('return "authorizationStatus" from state', () => {
    const authorizationStatus = AuthorizationStatus.Auth;
    const state = {
      [NameSpace.User]: {
        authorizationStatus: authorizationStatus,
      }
    };
    const result = getAuthorizationStatus(state);

    expect(result).toBe(authorizationStatus);
  });
});
