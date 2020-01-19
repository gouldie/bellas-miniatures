import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { HeaderMob } from '../components'
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

it('should render route names', () => {
  const routes = {
    home: '/',
    blog: '/blog',
    about: '/about'
  }

  const { container } = render(<HeaderMob pathname='/' routes={routes} />)

  expect(container.getElementsByClassName('bm-item-list')[0].children).toHaveLength(Object.keys(routes).length)
})

it('should navigate to the blog page', async () => {
  const routes = {
    home: '/',
    blog: '/blog'
  }

  const { getByText } = render(<HeaderMob pathname='/' routes={routes} />)
  fireEvent.click(getByText('blog'))
  expect(routerPushed).toHaveBeenCalledWith('/blog')
})
