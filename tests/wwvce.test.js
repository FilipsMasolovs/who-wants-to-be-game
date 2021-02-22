import React from 'react'
import renderer from 'react-test-renderer'
import App from '../src/App'

describe('Tests game component rendering.', () => {
  test('App component render.', () => {
    const tree = renderer
      .create(<App />)
      .toJSON()
      expect(tree).toMatchSnapshot()
    })
})
