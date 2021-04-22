import Blinker, { Type } from './blinker';
import { Component } from '../core/component';
import Heading, { HeadingTags } from './heading';

import './title.scss';

enum ClassNames {
  Block = 'Title',
  Bold = 'Title--bold',
}

const Title = (): Component => {
  const component = document.createDocumentFragment();

  component.appendChild(document.createTextNode('Studio '));
  component.appendChild(
    ((): HTMLSpanElement => {
      const span = document.createElement('span');

      span.appendChild(document.createTextNode('RC'));

      span.classList.add(ClassNames.Bold);

      return span;
    })(),
  );

  component.appendChild(
    Blinker({
      type: Type.Dash,
    }),
  );

  const title = Heading({
    element: HeadingTags.h1,
    content: component,
  });

  return title;
};

export default Title;
