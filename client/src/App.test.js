import React from 'react';
import ReactDOM from 'react-dom';
import fortuneService from './Services/fortune';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( < App / > , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('returns fortune from server', async () => {
  const fortune = await fortuneService.getFortune();
  expect(fortune).toBeTruthy();
})

