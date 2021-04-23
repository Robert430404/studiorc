import { JSDOM } from 'jsdom';

import Blinker from 'components/blinker';

describe('Blinker', () => {
  beforeEach(() => {
    const dom = new JSDOM();

    global.document = dom.window.document;
  });

  it('Should Create A Dash Blinker', () => {
    const blinker = Blinker();

    expect(blinker.tagName).toEqual('SPAN');
    expect(blinker.classList.contains('Blink')).toBeTruthy;
    expect(blinker.classList.contains('Blink_dash')).toBeTruthy;
  });
});
