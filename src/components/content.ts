import ByLine from './byline';
import CreateComponent, { Component } from '../core/component';
import ExternalLinks from './externalLinks';

import './content.scss';

enum ClassNames {
  Block = 'Content',
}

const Content = (): Component => {
  const component = CreateComponent(document.createElement('section'));

  component.classList.add(ClassNames.Block);

  component.appendChild(ByLine());
  component.appendChild(ExternalLinks());

  return component;
};

export default Content;
