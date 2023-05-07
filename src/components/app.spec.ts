import { JSDOM } from 'jsdom';

import App from './app';

describe('App', () => {
  beforeEach(() => {
    const dom = new JSDOM();

    global.document = dom.window.document;
  });

  it('Should Bootstrap The App', () => {
    // Attach the app to the document body
    App();

    expect(global.document.querySelector('.Main__wrapper')).toBeTruthy;

    expect(global.document.body.classList.contains('CRT')).toBeTruthy;
  });
});
