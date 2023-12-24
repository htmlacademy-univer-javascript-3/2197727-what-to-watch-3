import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import Footer from '../footer';

describe('Footer', () => {
  it('render correct', () => {
    const preparedComponent = withHistory(<Footer />);

    render(preparedComponent);

    screen.getAllByText('W').forEach((logoLetterW) => {
      expect(logoLetterW).toBeInTheDocument();
    });

    expect(screen.getByText('T')).toBeInTheDocument();
    expect(screen.getByText(/© 2019 What to watch Ltd./i)).toBeInTheDocument();
  });
});
