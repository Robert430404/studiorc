import CreateComponent from './component';
import Header from './header';
import Footer from './footer';
import Content from './content';
import { FontFaceSet } from 'css-font-loading-module';

import './../css/crt.css';

const removeLoader = (event: FontFaceSet) => {
  const loader = CreateComponent(document.querySelector('.Loader'));

  if (loader && event.check('12px VT323')) {
    loader.remove();
  }
};

const App = () => {
  const component = CreateComponent(document.createElement('section'));

  component.classList.add('Main__wrapper');

  component.append(Header());
  component.append(Content());
  component.append(Footer());

  // Grab the body from the page
  const body = document.body;

  if (!body) {
    throw Error('Something is very wrong, there is no body');
  }

  body.classList.add('CRT');
  body.append(component);

  document.fonts.ready.then(removeLoader);
};

export default App;
