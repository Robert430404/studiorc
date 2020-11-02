import ByLine from './byline';
import CreateComponent, { Component } from './component';
import Copyright from './copyright';
import ExternalLinks from './externalLinks';
import SubTitle from './subtitle';
import Title from './title';

const Header = (): Component => {
  const component = CreateComponent(document.createElement('header'));

  component.appendChild(Title());
  component.appendChild(SubTitle());
  component.appendChild(ByLine());
  component.appendChild(ExternalLinks());
  component.append(Copyright());

  return component;
};

export default Header;
