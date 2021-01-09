import CreateComponent from './component';
import Header from './header';
import Footer from './footer';

/** Import application styles */
import './../css/crt.css';
import Content from './content';

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

  const loader = CreateComponent(document.querySelector('.Loader'));

  loader.remove();
};

export default App;
