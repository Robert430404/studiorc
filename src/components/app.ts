import CreateComponent from './component';
import Header from './header';

/** Import application styles */
import './../css/normalize.css';
import './../css/fonts.css';
import './../css/index.css';

const App = () => {
  const component = CreateComponent(document.createElement('section'));

  component.classList.add('Main__wrapper');

  component.append(Header());

  // Grab the body from the page
  const body = document.querySelector('body');

  if (!body) {
    throw Error('Something is very wrong, there is no body');
  }

  body.append(component);
};

export default App;
