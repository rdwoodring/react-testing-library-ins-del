import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Counter from '../'

test('finds semantic insertions', () => {
  const {getByRole} = render(<Counter />)
  
  expect(getByRole('insertion')).toBeTruthy();
  
})

test('finds semantic deletions', () => {
  const {getByRole} = render(<Counter />)
  
  expect(getByRole('deletion')).toBeTruthy();
  
})

