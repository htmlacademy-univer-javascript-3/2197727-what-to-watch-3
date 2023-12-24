import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import Spinner from '../spinner';

describe('Spinner', () => {
  it('render correct', () => {
    const spinnerId = 'spinner';
    const preparedComponent = withHistory(<Spinner/>);

    render(preparedComponent);

    expect(screen.getByTestId(spinnerId)).toBeInTheDocument();
  });
});
