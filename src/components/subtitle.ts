import { Component } from './component';
import Heading, { HeadingTags } from './heading';

const SubTitle = (): Component => {
  return Heading({
    element: HeadingTags.h2,
    content: ((): DocumentFragment => {
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

          span.classList.add('Main__wrapper--bold');

          return span;
        })(),
      );

      component.appendChild(document.createElement('br'));

      component.appendChild(
        document.createTextNode('and hanging with my wife and kids.'),
      );

      return component;
    })(),
  });
};

export default SubTitle;
