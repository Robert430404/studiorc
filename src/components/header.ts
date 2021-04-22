import CreateComponent, { Component } from '../core/component';
import Title from './title';

import './header.scss';

enum ClassNames {
  Block = 'Header',
  Title = 'Header_title',
  SubTitle = 'Header_subTitle',
}

const Header = (): Component => {
  const component = CreateComponent(document.createElement('header'));
  const title = Title();

  component.classList.add(ClassNames.Block);

  title.classList.add(ClassNames.Title);

  component.appendChild(title);

  return component;
};

export default Header;
