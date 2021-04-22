import { Component } from '../core/component';
import Heading, { HeadingTags } from './heading';

import './subtitle.scss';

enum ClassNames {
  Block = 'SubTitle',
  Bold = 'SubTitle--bold',
}

const SubTitle = (): Component => {
  const component = document.createDocumentFragment();

  component.appendChild(
    document.createTextNode('Just a simple guy who enjoys '),
  );

  component.appendChild(
    ((): HTMLSpanElement => {
      const span = document.createElement('span');
      const hobbies = ['guitar', 'nature', 'hiking', 'biking'];

      span.appendChild(
        document.createTextNode(
          hobbies[Math.floor(Math.random() * hobbies.length)],
        ),
      );

      span.classList.add(ClassNames.Bold);

      return span;
    })(),
  );

  component.appendChild(document.createElement('br'));

  component.appendChild(
    document.createTextNode('and hanging with my wife and kids.'),
  );
  const subtitle = Heading({
    element: HeadingTags.h2,
    content: component,
  });

  subtitle.classList.add(ClassNames.Block);
  return subtitle;
};

export default SubTitle;
