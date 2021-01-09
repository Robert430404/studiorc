import CreateComponent, { Component } from './component';
import SubTitle from './subtitle';
import Title from './title';

const Header = (): Component => {
  const component = CreateComponent(document.createElement('header'));

  component.classList.add('Header');

  component.appendChild(Title());
  component.appendChild(SubTitle());

  return component;
};

export default Header;
