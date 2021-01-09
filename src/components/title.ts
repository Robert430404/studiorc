import Blinker, { Type } from './blinker';
import CreateComponent, { Component } from './component';
import Heading, { HeadingTags } from './heading';

const Title = (): Component => {
  return Heading({
    element: HeadingTags.h1,
    content: ((): Component => {
      const component = CreateComponent(document.createDocumentFragment());

      component.appendChild(document.createTextNode('Studio '));

      component.appendChild(
        ((): HTMLSpanElement => {
          const span = document.createElement('span');

          span.appendChild(document.createTextNode('RC'));
          span.classList.add('Main__wrapper--bold');

          return span;
        })(),
      );

      component.appendChild(
        Blinker({
          type: Type.Dash,
        }),
      );

      return component;
    })(),
  });
};

export default Title;
