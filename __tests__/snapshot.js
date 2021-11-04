// __tests__/snapshot.js
import React from 'react'
import renderer from 'react-test-renderer'
import NotAuthorized from '../pages/not-authorized'

it('renders homepage unchanged', () => {
  const tree = renderer.create(<NotAuthorized />).toJSON()
  expect(tree).toMatchSnapshot()
})