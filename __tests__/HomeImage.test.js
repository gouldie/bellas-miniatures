import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { HomeImage } from '../components'

afterEach(cleanup)

it('renders without crashing', () => {
  const { container } = render(<HomeImage />)
  expect(container.getElementsByTagName('img')).toHaveLength(1)
})

it('img src matches image prop', () => {
  const { getByTestId } = render(<HomeImage image='test' />)
  expect(getByTestId('image')).toHaveAttribute('src', 'test')
})

// it('matches snapshot', () => {
//   const { asFragment } = render(<App />)
//   expect(asFragment()).toMatchSnapshot()
// })
