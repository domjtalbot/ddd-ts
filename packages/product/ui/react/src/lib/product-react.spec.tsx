import { render } from '@testing-library/react';

import ProductReact from './product-react';

describe('ProductReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductReact />);
    expect(baseElement).toBeTruthy();
  });
});
