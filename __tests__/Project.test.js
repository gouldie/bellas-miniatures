import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Project } from '../components'
import Router from 'next/router'

afterEach(cleanup)

const routerPushed = jest.fn()
const mockedRouter = {
  push: (path, withParam) => {
    routerPushed(path, withParam)
    return new Promise((resolve, reject) => resolve())
  }
}
Router.router = mockedRouter

it('renders without crashing', () => {
  const { getByRole } = render(<Project />)
  expect(getByRole('img')).toBeDefined()
})

it('props assigned correctly', () => {
  const { getByRole, getByText } = render(<Project image='testimage' title='testtitle' />)
  expect(getByRole('img')).toHaveAttribute('src', 'testimage')
  expect(getByText('testtitle')).toBeDefined()
})

it('should navigate on click', async () => {
  const { getByRole } = render(<Project id={1} title='testtitle' image='testimage' />)
  fireEvent.click(getByRole('img'))
  expect(routerPushed).toHaveBeenCalledWith('/project/[id]', '/project/' + 1)
})
