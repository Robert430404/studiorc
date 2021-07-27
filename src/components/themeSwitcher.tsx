import 'components/themeSwitcher.scss';

import { getCookie, setCookie } from 'core/cookies';
import JSXFactory from 'core/jsx';

import { ThemeButton } from 'components/themeButton';

export enum Themes {
  Day = 'DayTheme',
  Night = 'NightTheme',
  Vapor = 'VaporTheme',
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

  return Themes.Night === x || Themes.Day === x || Themes.Vapor === x;
};

export const getActiveTheme = (): Themes => {
  const { value } = getCookie(ThemeCookie.Name);

  if (!isTheme(value)) {
    setActiveTheme(Themes.Night);

    return Themes.Night;
  }

  return value;
};

export const setActiveTheme = (theme: Themes): void => {
  setCookie({
    key: ThemeCookie.Name,
    value: theme,
  });
};

const ThemeSwitcher = () => {
  return (
    <section classes={[ClassNames.Block]}>
      <ThemeButton theme={Themes.Day}>Day</ThemeButton>
      <ThemeButton theme={Themes.Night}>Night</ThemeButton>
      <ThemeButton theme={Themes.Vapor}>Vapor</ThemeButton>
    </section>
  );
};

export default ThemeSwitcher;
