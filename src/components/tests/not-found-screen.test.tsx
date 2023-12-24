import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import NotFoundScreen from '../../pages/no-found-screen';

describe('Not found screen', () => {
  it('render correct', () => {
    const preparedComponent = withHistory(<NotFoundScreen/>);

    render(preparedComponent);

    expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Вернуться на главную/i)).toBeInTheDocument();
  });
});
