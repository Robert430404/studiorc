import Blinker, { Type } from './blinker';
import { expect } from 'chai';
import 'mocha';

describe('Blinker', () => {
  it('Should Create A Component', () => {
    let addCalled = 0;
    // Mock document for this test.
    global.document = {
      createElement: (type: string) => {
        expect(type).to.be.a('string');
        expect(type).to.equal('span');

        return {
          classList: {
            add: (className: string) => {
              expect(className).to.be.a('string');
              if (addCalled === 0) {
                expect(className).to.equal('Blink');
              }

              if (addCalled === 1) {
                expect(className).to.equal(`Blink_${Type.Dash}`);
              }

              addCalled++;

              return {};
            },
          },
        };
      },
    } as any;

    // Render the component
    const blinker = Blinker({
      type: Type.Dash,
    });
  });
});
