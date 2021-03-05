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
    // Attach the app to the document body
    App();

    expect(
      global
        .document
        .querySelector('.Main__wrapper')
    ).to.not.be.undefined;
    
    expect(
      global
        .document
        .body
        .classList
        .contains('CRT')
    ).to.be.true;
  });
});
