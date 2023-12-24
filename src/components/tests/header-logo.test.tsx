import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import HeaderLogo from '../header-logo';

describe('Header logo', () => {
  it('render correct', () => {
    const preparedComponent = withHistory(<HeaderLogo/>);

    render(preparedComponent);

    screen.getAllByText('W').forEach((logoLetterW) => {
      expect(logoLetterW).toBeInTheDocument();
    });

    expect(screen.getByText('T')).toBeInTheDocument();
  });
});
