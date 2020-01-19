import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Header } from '../components'
import Router from 'next/router'

afterEach(cleanup)

const routerPushed = jest.fn()
const mockedRouter = {
  push: (path) => {
    routerPushed(path)
    return new Promise((resolve, reject) => resolve())
  }
}
Router.router = mockedRouter

it('should navigate to the blog page', async () => {
  const { getByText } = render(<Header pathname='/' />)
  fireEvent.click(getByText(/blog/i))
  expect(routerPushed).toHaveBeenCalledWith('/blog')
})
