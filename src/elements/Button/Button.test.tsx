import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';


describe("Button", () => {
  it('renders learn react Button', () => {
    render(<Button>Clik</Button>)
    screen.getByText('Clik');
  });
})
