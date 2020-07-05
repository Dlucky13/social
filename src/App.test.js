import React from 'react';    {console.log('sidebar')}
import ReactDOM from 'react-dom'

import { render } from '@testing-library/react';
import MainApp from "./App";
import App from "./App";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
})