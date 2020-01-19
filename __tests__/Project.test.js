import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Project } from '../components'

afterEach(cleanup)

it('renders without crashing', () => {
  const { getByRole } = render(<Project />)
  expect(getByRole('img')).toBeDefined()
})

it('props assigned correctly', () => {
  const { getByRole, getByText } = render(<Project image='testimage' title='testtitle' />)
  expect(getByRole('img')).toHaveAttribute('src', 'testimage')
  expect(getByText('testtitle')).toBeDefined()
})
