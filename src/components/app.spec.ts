import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import 'mocha';
import App from './app';

describe('App', () => {
  beforeEach(() => {
    const dom = new JSDOM();

    global.document = dom.window.document;
  });

  it('Should Bootstrap The App', () => {
    // Render the component
    App();
  });
});
