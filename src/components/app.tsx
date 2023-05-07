import JSXFactory from '../core/jsx';
import './app.scss';
import Content from './content';
import Footer from './footer';
import Header from './header';
import Hidden, { Keys } from './hidden';
import SubTitle from './subtitle';
import ThemeSwitcher, { getActiveTheme } from './themeSwitcher';

enum ClassNames {
  Block = 'App',
  CRT = 'CRT',
}

const App = () => {
  // Grab the body from the page
  const { body } = document;

  if (!body) {
    throw Error('Something is very wrong, there is no body');
  }
  console.log('test');
  body.classList.add(ClassNames.CRT);
  body.style.removeProperty('background');
  body.dataset.theme = getActiveTheme();

  return (
    <section classes={[ClassNames.Block]}>
      <Header />
      <SubTitle />
      <Content />
      <Footer />
      <ThemeSwitcher />
      <Hidden
        activationSequence={[
          Keys.Up,
          Keys.Up,
          Keys.Down,
          Keys.Down,
          Keys.Left,
          Keys.Right,
          Keys.Left,
          Keys.Right,
        ]}
      />
    </section>
  );
};

export default App;
