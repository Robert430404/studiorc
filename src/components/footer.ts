import CreateComponent, { Component } from './component';
import Copyright from './copyright';

const Footer = (): Component => {
  const component = CreateComponent(document.createElement('footer'));

  component.classList.add('Footer');

  component.append(Copyright());

  return component;
};

export default Footer;
