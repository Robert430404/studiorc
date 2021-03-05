import { JSDOM } from 'jsdom';
import Blinker, { Type } from './blinker';
import { expect } from 'chai';
import 'mocha';

describe('Blinker', () => {
  beforeEach(() => {
    const dom = new JSDOM();

    global.document = dom.window.document;
  });

  it('Should Create A Dash Blinker', () => {
    const blinker = Blinker({
      type: Type.Dash,
    });

    expect(blinker.classList.contains('Blink')).to.be.true;
    expect(blinker.classList.contains('Blink_dash')).to.be.true;
  });

  it('Should Create A Block Blinker', () => {
    const blinker = Blinker({
      type: Type.Block,
    });

    expect(blinker.classList.contains('Blink')).to.be.true;
    expect(blinker.classList.contains('Blink_block')).to.be.true;
  });
});
