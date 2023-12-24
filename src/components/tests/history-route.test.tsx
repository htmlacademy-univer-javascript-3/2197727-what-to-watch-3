import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-routr';

describe('History router', () => {
  it('render correct', () => {
    const mockHistory = createMemoryHistory();
    const expectedText = 'expected text';
    render(
      <HistoryRouter history={mockHistory}>
        <span>{expectedText}</span>
      </HistoryRouter>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
