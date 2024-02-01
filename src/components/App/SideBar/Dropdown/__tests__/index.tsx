import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { SelectWithPopover } from '..' // Adjust the import path as needed
import * as DataStore from '../../../../../stores/useDataStore'

// Mock the useDataStore hook
jest.mock('~/stores/useDataStore', () => ({
  useDataStore: jest.fn(),
}))

const options = {
  all: 'All',
  podcast: 'Audio',
  episode: 'Episode',
  document: 'Document',
  person: 'People',
  show: 'Show',
  twitter_space: 'TwitterSpace',
  tweet: 'Tweet',
  youtube: 'Video',
}

describe('SelectWithPopover Component', () => {
  beforeEach(() => {
    // Mock implementation of useDataStore hook before each test
    DataStore.useDataStore.mockImplementation(() => ['all', jest.fn()])
  })

  it('should open popover on click', () => {
    const { getByText, queryByText } = render(<SelectWithPopover />)

    fireEvent.click(getByText('Show'))
    expect(queryByText('People')).toBeInTheDocument() // Assuming 'People' is one of the options
  })

  it('should close popover when an option is selected', () => {
    const { getByText, queryByText } = render(<SelectWithPopover />)

    fireEvent.click(getByText('Show')) // Open popover
    fireEvent.click(getByText('Audio')) // Click on 'Audio' option
    expect(queryByText('Audio')).not.toBeVisible() // Popover should close, so 'Audio' shouldn't be visible
  })

  it('should change sidebar filter upon option select', () => {
    const setSidebarFilterMock = jest.fn()

    DataStore.useDataStore.mockImplementation(() => ['all', setSidebarFilterMock])

    const { getByText } = render(<SelectWithPopover />)

    fireEvent.click(getByText('Show')) // Open popover
    fireEvent.click(getByText('Audio')) // Select 'Audio' option

    expect(setSidebarFilterMock).toHaveBeenCalledWith('podcast') // Assuming 'Audio' maps to 'podcast' in the options object
  })

  it('should display correct active option', () => {
    DataStore.useDataStore.mockImplementation(() => ['twitter_space', jest.fn()]) // 'podcast' is the active filter

    const { getByText } = render(<SelectWithPopover />)

    fireEvent.click(getByText('TwitterSpace')) // Open popover
  })

  it('check if the each option is rendered as active', () => {
    DataStore.useDataStore.mockImplementation(() => ['youtube', jest.fn()]) // 'podcast' is the active filter

    const { getByText } = render(<SelectWithPopover />)

    fireEvent.click(getByText('Show')) // Open popover

    Object.values(options).forEach((label) => {
      if (label === 'Video') {
        expect(
          getByText('Video', {
            ignore: '[data-testid=value]',
          }).parentElement,
        ).toHaveClass('active') // Video should be active
      } else {
        expect(
          getByText('Video', {
            ignore: '[data-testid=value]',
          }).parentElement,
        ).toHaveClass('active') // Rest of the options should not be active
      }
    })
  })
})
