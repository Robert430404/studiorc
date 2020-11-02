import CreateComponent, { Component, ComponentProperties } from './component';

interface Properties extends ComponentProperties {
  iconPath: string;
  link: string;
}

export const SocialLink = (props: Properties): Component => {
  const component = CreateComponent(document.createElement('a')).applyStyles(
    props.styles,
  );

  component.setAttribute('href', props.link);
  component.setAttribute('target', '_blank');

  component.classList.add('Main__wrapper--externalLink');

  component.appendChild(
    ((): HTMLObjectElement => {
      const object = document.createElement('object');

      object.setAttribute('type', 'image/svg+xml');
      object.setAttribute('data', props.iconPath);

      return object;
    })(),
  );

  return component;
};
