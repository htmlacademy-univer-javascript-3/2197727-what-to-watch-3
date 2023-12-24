import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import { SingInErrorMessage } from '../../const';
import SignInScreen from '../../pages/sign-in-screen';

describe('Sign in screen', () => {
  const { withStoreComponent } = withStore(
    withHistory(<SignInScreen/>),
    makeFakeStore()
  );
  const mockEmail = 'bb@mail.ru';
  const mockPassword = 'parl7';
  const mockWrongEmail = 'wrongEmail';
  const mockWrongPassword = '7';

  it('render correct', () => {
    render(withStoreComponent);

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('type in email field', async () => {
    render(withStoreComponent);
    await userEvent.type(screen.getByPlaceholderText(/Email address/i), mockEmail);

    expect(screen.getByDisplayValue(mockEmail)).toBeInTheDocument();
  });

  it('type in password field', async () => {
    render(withStoreComponent);
    await userEvent.type(screen.getByPlaceholderText(/Password/i), mockPassword);

    expect(screen.getByDisplayValue(mockPassword)).toBeInTheDocument();
  });

  it('display email error', async () => {
    render(withStoreComponent);
    await userEvent.type(
      screen.getByPlaceholderText(/Email address/i),
      mockWrongEmail
    );
    await userEvent.type(screen.getByPlaceholderText(/Password/i), mockPassword);
    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByDisplayValue(mockWrongEmail)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockPassword)).toBeInTheDocument();
    expect(screen.getByText(SingInErrorMessage.Email)).toBeInTheDocument();
  });

  it('display password error', async () => {
    render(withStoreComponent);
    await userEvent.type(screen.getByPlaceholderText(/Email address/i), mockEmail);
    await userEvent.type(
      screen.getByPlaceholderText(/Password/i),
      mockWrongPassword
    );
    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByDisplayValue(mockEmail)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockWrongPassword)).toBeInTheDocument();
    expect(screen.getByText(SingInErrorMessage.Password)).toBeInTheDocument();
  });
});
