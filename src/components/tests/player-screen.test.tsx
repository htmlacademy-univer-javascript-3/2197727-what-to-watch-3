import { render, screen } from '@testing-library/react';
import { AppRoute } from '../../const';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { withStore, withHistory } from '../../utils/mock-component';
import { makeFakeFilmId, makeFakeStore } from '../../utils/mocks';
import PlayerScreen from '../../pages/player-screen';

describe('Player screen', () => {
  const mockFilmId = makeFakeFilmId();
  const mockHistory = createMemoryHistory();

  beforeEach(() => {
    mockHistory.push(`${AppRoute.Player}/${mockFilmId}`);
  });

  const { withStoreComponent } = withStore(
    withHistory(<PlayerScreen />,
      mockHistory
    ),
    makeFakeStore()
  );

  HTMLVideoElement.prototype.pause = vi.fn();

  it('render correct', () => {
    render(withStoreComponent);

    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
    expect(screen.getByText(/Pause/i)).toBeInTheDocument();
    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
  });

  it('play video', async () => {
    render(withStoreComponent);
    await userEvent.click(screen.getByTestId('video-control'));

    expect(screen.getByText('Play')).toBeInTheDocument();
  });
});
