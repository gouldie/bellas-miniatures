import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Projects } from '../components'
import data from './data/projects'

afterEach(cleanup)

it('renders the correct amount of images', () => {
  const { getAllByRole } = render(<Projects projects={data} />)

  expect(getAllByRole('img')).toHaveLength(data.length)
})
