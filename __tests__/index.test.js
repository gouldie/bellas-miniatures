import React from 'react'
import { render, cleanup } from 'react-testing-library'
import '@testing-library/jest-dom/extend-expect'
import App from '../pages/index'

afterEach(cleanup)

it('matches snapshot', () => {
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot()
})
