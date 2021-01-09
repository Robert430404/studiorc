import ByLine from './byline';
import CreateComponent, { Component } from './component';
import ExternalLinks from './externalLinks';

const Content = (): Component => {
  const component = CreateComponent(document.createElement('section'));

  component.classList.add('Content');

  component.appendChild(ByLine());
  component.appendChild(ExternalLinks());

  return component;
};

export default Content;
