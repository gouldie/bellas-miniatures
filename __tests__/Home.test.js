import React from 'react'
import { render, cleanup, fireEvent, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Home } from '../components'
import data from './data/home'

afterEach(cleanup)

it('renders the correct amount of images', () => {
  const { getAllByRole } = render(<Home projects={data} />)

  expect(getAllByRole('img')).toHaveLength(data.length)
})

// it('opens carousel when an image is clicked', async () => {
//   const { getAllByRole, container } = render(<Home projects={data} />)

//   fireEvent.click(getAllByRole('img')[0])
//   console.log(getAllByRole('img')[0])
//   console.log('test', container.querySelector('.fullscreen'))

//   await wait(() => expect(container.querySelector('.fullscreen')[0]).toBeDefined())
// })
