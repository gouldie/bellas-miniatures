import React from 'react'
import { render, cleanup, fireEvent, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '../pages/contact'

afterEach(cleanup)

it('renders the form', () => {
  const { getByRole } = render(<Contact />)
  expect(getByRole('form')).toBeDefined()
})

it('submit with all required fields', async () => {
  const { getByPlaceholderText, getByDisplayValue, getByText, getByTestId } = render(<Contact />)

  fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'test name text' } })
  expect(getByDisplayValue('test name text')).toBeInTheDocument()

  fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test email text' } })
  expect(getByDisplayValue('test email text')).toBeInTheDocument()

  fireEvent.change(getByPlaceholderText('Your message'), { target: { value: 'test message text' } })
  expect(getByDisplayValue('test message text')).toBeInTheDocument()

  fireEvent.click(getByText('SUBMIT'))

  expect(document.querySelector('svg')).toBeInTheDocument()

  await wait(() => getByTestId('success'))
})
