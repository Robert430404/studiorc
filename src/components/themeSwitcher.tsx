import { getCookie, setCookie } from '../core/cookies';
import JSXFactory from '../core/jsx';
import './../images/cpu.svg';
import './../images/moon.svg';
import './../images/sun.svg';
import { ThemeButton } from './themeButton';
import './themeSwitcher.scss';
import { Tooltip, TooltipPosition } from './tooltip';

export enum Themes {
  Bright = 'BrightTheme',
  Mainframe = 'MainframeTheme',
  Hot = 'HotTheme',
}

enum ClassNames {
  Block = 'ThemeSwitcher',
  Icon = 'ThemeButton__icon',
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

  return Themes.Mainframe === x || Themes.Bright === x || Themes.Hot === x;
};

export const getActiveTheme = (): Themes => {
  const { value } = getCookie(ThemeCookie.Name);

  if (!isTheme(value)) {
    setActiveTheme(Themes.Mainframe);

    return Themes.Mainframe;
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
        content="Bright"
        position={[TooltipPosition.Top, TooltipPosition.Center]}
      >
        <ThemeButton theme={Themes.Bright} classes={[ClassNames.First]}>
          <img classes={[ClassNames.Icon]} src="images/sun.svg" />
        </ThemeButton>
      </Tooltip>
      <Tooltip
        content="Hotline"
        position={[TooltipPosition.Top, TooltipPosition.Center]}
      >
        <ThemeButton theme={Themes.Hot}>
          <img classes={[ClassNames.Icon]} src="images/moon.svg" />
        </ThemeButton>
      </Tooltip>
      <Tooltip
        content="Mainframe"
        position={[TooltipPosition.Top, TooltipPosition.Center]}
      >
        <ThemeButton theme={Themes.Mainframe} classes={[ClassNames.Last]}>
          <img classes={[ClassNames.Icon]} src="images/cpu.svg" />
        </ThemeButton>
      </Tooltip>
    </section>
  );
};

export default ThemeSwitcher;
