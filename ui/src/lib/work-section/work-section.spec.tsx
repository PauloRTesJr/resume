import { render } from '@testing-library/react';

import WorkSection from './work-section';

describe('WorkSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkSection />);
    expect(baseElement).toBeTruthy();
  });
});
