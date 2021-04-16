import CreateComponent, {
  Component,
  ComponentProperties,
} from '../core/component';

export enum ClassNames {
  Block = 'Label',
  ExternalLink = 'Label--externalLink',
}

interface Properties extends ComponentProperties {
  content: string;
  modifiers?: ClassNames[];
}

export const Label = (props: Properties): Component => {
  const component = CreateComponent(document.createElement('span'));

  component.appendChild(document.createTextNode(props.content));

  component.classList.add(ClassNames.Block);

  if (props.modifiers) {
    props.modifiers.forEach((modifier) => {
      component.classList.add(modifier);
    });
  }

  return component;
};
