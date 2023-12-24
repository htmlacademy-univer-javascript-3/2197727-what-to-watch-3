import { render, screen } from '@testing-library/react';
import { withStore, withHistory } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import MainScreen from '../../pages/main-screen';

describe('Main screen', () => {
  it('render correct', () => {
    const { withStoreComponent } = withStore(
      withHistory(<MainScreen/>),
      makeFakeStore()
    );
    render(withStoreComponent);

    expect(screen.getByTestId('page-content')).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});
