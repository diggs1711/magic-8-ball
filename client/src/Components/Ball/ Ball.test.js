import React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react'
import Ball from './Ball'

afterEach(cleanup)

test('renders content', () => {
    const message = 'it is what it is';

    const component = render(
        <Ball message={message} />
    )

    expect(component.container).toHaveTextContent(
        message
    );
});