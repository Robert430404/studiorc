import JSXFactory from '../core/jsx';
import './themeButton.scss';
import { setActiveTheme, Themes } from './themeSwitcher';

enum ClassNames {
  Block = 'ThemeButton',
}

interface Properties {
  theme: Themes;
  classes?: string[];
}

export const ThemeButton = (props: Properties) => {
  const handleClick = () => {
    document.body.dataset.theme = props.theme;

    setActiveTheme(props.theme);
  };

  return (
    <button
      classes={[ClassNames.Block]}
      data-theme={props.theme}
      events={[
        {
          name: 'click',
          handler: handleClick,
        },
      ]}
    />
  );
};
