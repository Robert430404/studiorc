import CreateComponent, { Component } from '../core/component';

import './byline.scss';

enum ClassNames {
  Block = 'ByLine',
}

const ByLine = (): Component => {
  const component = CreateComponent(document.createElement('p'));

  component.classList.add(ClassNames.Block);

  component.appendChild(
    document.createTextNode('Senior Software Engineer, experienced in:'),
  );

  component.appendChild(document.createElement('br'));

  component.appendChild(
    document.createTextNode('Golang, Python, PHP, JavaScript, TypeScript'),
  );

  return component;
};

export default ByLine;
