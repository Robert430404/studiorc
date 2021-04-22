import CreateComponent, { Component } from '../core/component';

enum ClassNames {
  Block = 'Copyright',
  Bold = 'Copyright--bold',
}

const Copyright = (): Component => {
  const component = CreateComponent(document.createElement('section'));

  component.classList.add(ClassNames.Block);

  component.appendChild(document.createTextNode('Copyright \u00A9 '));

  component.appendChild(
    ((): HTMLSpanElement => {
      const content = document.createElement('span');

      content.classList.add(ClassNames.Bold);

      content.appendChild(
        document.createTextNode(new Date().getFullYear().toString()),
      );

      return content;
    })(),
  );

  return component;
};

export default Copyright;
