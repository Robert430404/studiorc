import CreateComponent, { Component } from './component';

const ByLine = (): Component => {
  const component = CreateComponent(document.createElement('p'));

  component.appendChild(
    document.createTextNode('Senor Software Engineer, experienced in:'),
  );

  component.appendChild(document.createElement('br'));

  component.appendChild(
    document.createTextNode('Golang, Python, PHP, JavaScript, TypeScript'),
  );

  return component;
};

export default ByLine;
