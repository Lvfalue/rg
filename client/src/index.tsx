import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './container/App'

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
)
