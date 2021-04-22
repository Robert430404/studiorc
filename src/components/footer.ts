import CreateComponent, { Component } from '../core/component';
import Copyright from './copyright';

enum ClassNames {
  Block = 'Footer',
}

const Footer = (): Component => {
  const component = CreateComponent(document.createElement('footer'));

  component.classList.add(ClassNames.Block);

  component.append(Copyright());

  return component;
};

export default Footer;
