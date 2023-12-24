import { render, screen } from '@testing-library/react';
import { withStore, withHistory } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import MyListScreen from '../../pages/my-list-screen';

describe('My list screen', () => {
  it('render correct', () => {
    const { withStoreComponent } = withStore(withHistory(<MyListScreen />), makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});
