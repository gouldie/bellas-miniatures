import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { HomeImage } from '../components'

afterEach(cleanup)

it('renders without crashing', () => {
  const { getByRole } = render(<HomeImage />)
  expect(getByRole('img')).toBeDefined()
})

it('img src matches image prop', () => {
  const { getByRole } = render(<HomeImage image='test' />)
  expect(getByRole('img')).toHaveAttribute('src', 'test')
})
