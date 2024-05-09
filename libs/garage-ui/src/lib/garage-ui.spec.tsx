import { render } from '@testing-library/react';

import GarageUi from './garage-ui';

describe('GarageUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GarageUi />);
    expect(baseElement).toBeTruthy();
  });
});
