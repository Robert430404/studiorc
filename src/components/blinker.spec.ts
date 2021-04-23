import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import 'mocha';

import Blinker, { Type } from 'components/blinker';

describe('Blinker', () => {
  beforeEach(() => {
    const dom = new JSDOM();

    global.document = dom.window.document;
  });

  it('Should Create A Dash Blinker', () => {
    const blinker = Blinker({
      type: Type.Dash,
    });

    expect(blinker.tagName).to.equal('SPAN');
    expect(blinker.classList.contains('Blink')).to.be.true;
    expect(blinker.classList.contains('Blink_dash')).to.be.true;
  });
});
