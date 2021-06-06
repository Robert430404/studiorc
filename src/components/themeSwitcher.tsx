import 'components/themeSwitcher.scss';

import { getCookie, setCookie } from 'core/cookies';
import JSXFactory from 'core/jsx';

import { ThemeButton } from 'components/themeButton';

export enum Themes {
  Dark = 'DarkTheme',
  Light = 'LightTheme',
}

enum ClassNames {
  Block = 'ThemeSwitcher',
}

enum ThemeCookie {
  Name = 'studiorc_theme',
}

const isTheme = (x: unknown): x is Themes => {
  if (typeof x !== 'string') {
    return false;
  }

  return Themes.Dark === x || Themes.Light === x;
};

export const getActiveTheme = (): Themes => {
  const { value } = getCookie(ThemeCookie.Name);

  if (!isTheme(value)) {
    setActiveTheme(Themes.Dark);

    return Themes.Dark;
  }

  return value;
};

export const setActiveTheme = (theme: Themes): void => {
  setCookie({
    key: ThemeCookie.Name,
    value: theme,
    expiration: new Date(new Date().valueOf() + 1 * 60 * 60 * 24 * 7),
  });
};

const ThemeSwitcher = () => {
  return (
    <section classes={[ClassNames.Block]}>
      <ThemeButton theme={Themes.Light}>l</ThemeButton>
      <ThemeButton theme={Themes.Dark}>d</ThemeButton>
    </section>
  );
};

export default ThemeSwitcher;
