import CreateComponent, { Component } from './component';

const Copyright = (): Component => {
  const component = CreateComponent(document.createElement('section'));

  component.classList.add('Main__wrapper--copyright');

  component.appendChild(document.createTextNode('Copyright \u00A9 '));

  component.appendChild(
    ((): HTMLSpanElement => {
      const content = document.createElement('span');

      content.classList.add('Main__wrapper--bold');

      content.appendChild(
        document.createTextNode(new Date().getFullYear().toString()),
      );

      return content;
    })(),
  );

  return component;
};

export default Copyright;
