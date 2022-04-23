import { render } from '@testing-library/react';

import DesignSystemStorybook from './design-system-storybook';

describe('DesignSystemStorybook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DesignSystemStorybook />);
    expect(baseElement).toBeTruthy();
  });
});
