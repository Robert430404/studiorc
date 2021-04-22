import CreateComponent, {
  Component,
  ComponentProperties,
} from '../core/component';

import './blinker.scss';

enum ClassNames {
  Block = 'Blink',
  Dash = 'Blink--dash',
  Square = 'Blink--square',
}

export enum Type {
  Dash = 'dash',
}

interface Properties extends ComponentProperties {
  type: Type;
}

const Blinker = (props: Properties): Component => {
  const component = CreateComponent(document.createElement('span')).applyStyles(
    props.styles,
  );

  component.classList.add(ClassNames.Block);
  component.classList.add(ClassNames.Dash);

  return component;
};

export default Blinker;
