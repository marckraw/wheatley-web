// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import NotAuthorized from '../pages/not-authorized'

describe('Home', () => {
  it('renders a heading', () => {
    render(<NotAuthorized />)

    const heading = screen.getByText('Not Authorized', {
      name: "Not Authorized",
    })

    expect(heading).toBeInTheDocument()
  })
})