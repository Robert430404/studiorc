import 'components/themeButton.scss';

import JSXFactory from 'core/jsx';

import { Themes } from 'components/themeSwitcher';

enum ClassNames {
  Block = 'ThemeButton',
}

interface Properties {
  theme: Themes;
}

export const ThemeButton = (props: Properties) => {
  const handleClick = () => {
    document.body.dataset.theme = props.theme;
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
