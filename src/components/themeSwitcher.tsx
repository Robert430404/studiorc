import 'components/themeSwitcher.scss';

import { getCookie, setCookie } from 'core/cookies';
import JSXFactory from 'core/jsx';

import { ThemeButton } from 'components/themeButton';
import { Tooltip, TooltipPosition } from 'components/tooltip';

import './../images/cpu.svg';
import './../images/moon.svg';
import './../images/sun.svg';

export enum Themes {
  Day = 'DayTheme',
  Night = 'NightTheme',
  Vapor = 'VaporTheme',
}

enum ClassNames {
  Block = 'ThemeSwitcher',
  Icon = 'ThemeButton_icon',
  First = 'ThemeButton--first',
  Last = 'ThemeButton--last',
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
      <Tooltip
        content="Daylight"
        position={[TooltipPosition.Top, TooltipPosition.Center]}
      >
        <ThemeButton theme={Themes.Day} classes={[ClassNames.First]}>
          <img classes={[ClassNames.Icon]} src="images/sun.svg" />
        </ThemeButton>
      </Tooltip>
      <Tooltip
        content="Vapor Wave"
        position={[TooltipPosition.Top, TooltipPosition.Center]}
      >
        <ThemeButton theme={Themes.Vapor}>
          <img classes={[ClassNames.Icon]} src="images/cpu.svg" />
        </ThemeButton>
      </Tooltip>
      <Tooltip
        content="Night"
        position={[TooltipPosition.Top, TooltipPosition.Center]}
      >
        <ThemeButton theme={Themes.Night} classes={[ClassNames.Last]}>
          <img classes={[ClassNames.Icon]} src="images/moon.svg" />
        </ThemeButton>
      </Tooltip>
    </section>
  );
};

export default ThemeSwitcher;
