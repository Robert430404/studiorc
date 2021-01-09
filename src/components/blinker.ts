import CreateComponent, { Component, ComponentProperties } from './component';

import './../css/blink.css';

export enum Type {
  Dash = 'dash',
  Block = 'block',
}

interface Properties extends ComponentProperties {
  type: Type;
}

const Blinker = (props: Properties): Component => {
  const component = CreateComponent(document.createElement('span')).applyStyles(
    props.styles,
  );

  component.classList.add('Blink');
  component.classList.add(`Blink_${props.type}`);

  return component;
};

export default Blinker;
