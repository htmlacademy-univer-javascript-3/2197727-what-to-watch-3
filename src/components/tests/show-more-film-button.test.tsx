import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShowMoreFilmButton from '../show-more-film-button';

describe('Show more film button', () => {
  const onShowMoreFilmButtonClick = vi.fn();
  const preparedComponent = withHistory(<ShowMoreFilmButton onShowMoreFilmButtonClick={onShowMoreFilmButtonClick}/>);

  it('render correct', () => {
    render(preparedComponent);

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('show more films on click', async () => {
    render(preparedComponent);
    await userEvent.click(screen.getByTestId('show-more-film-button'));

    expect(onShowMoreFilmButtonClick).toBeCalledTimes(1);
  });
});
