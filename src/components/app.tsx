import 'components/app.scss';

import JSXFactory from 'core/jsx';

import Content from 'components/content';
import Footer from 'components/footer';
import Header from 'components/header';
import Hidden, { Keys } from 'components/hidden';
import SubTitle from 'components/subtitle';
import ThemeSwitcher, { getActiveTheme } from 'components/themeSwitcher';

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
