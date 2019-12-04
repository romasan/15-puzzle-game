import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(
    <App/>,
    document.querySelector('#wrap')
);

module.hot.accept();
