import 'components/themeSwitcher.scss';

import JSXFactory from 'core/jsx';

import { ThemeButton } from 'components/themeButton';

export enum Themes {
  Dark = 'DarkTheme',
  Light = 'LightTheme',
}

enum ClassNames {
  Block = 'ThemeSwitcher',
}

const ThemeSwitcher = () => {
  return (
    <section classes={[ClassNames.Block]}>
      <ThemeButton theme={Themes.Light}>l</ThemeButton>
      <ThemeButton theme={Themes.Dark}>d</ThemeButton>
    </section>
  );
};

export default ThemeSwitcher;
