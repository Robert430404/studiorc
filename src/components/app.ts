import CreateComponent from '../core/component';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Hidden, { Keys } from './hidden';

import './app.scss';
import SubTitle from './subtitle';

enum ClassNames {
  Block = 'App',
  CRT = 'CRT',
}

const App = () => {
  const component = CreateComponent(document.createElement('section'));

  component.classList.add(ClassNames.Block);

  component.append(Header());
  component.append(SubTitle());
  component.append(Content());
  component.append(Footer());

  // Grab the body from the page
  const body = document.body;

  if (!body) {
    throw Error('Something is very wrong, there is no body');
  }

  body.classList.add(ClassNames.CRT);

  body.append(component);
  body.append(
    Hidden({
      activationSequence: [
        Keys.Up,
        Keys.Up,
        Keys.Down,
        Keys.Down,
        Keys.Left,
        Keys.Right,
      ],
    }),
  );
};

export default App;
