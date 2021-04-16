import CreateComponent, {
  Component,
  ComponentProperties,
} from '../core/component';

interface Properties extends ComponentProperties {
  link: string;
  alt: string;
}

export const SocialLink = (props: Properties): Component => {
  const component = CreateComponent(document.createElement('a')).applyStyles(
    props.styles,
  );

  component.setAttribute('href', props.link);
  component.setAttribute('target', '_blank');
  component.setAttribute('rel', 'noreferrer');
  component.setAttribute('name', props.alt);

  component.classList.add('Main__wrapper--externalLink');

  component.appendChild(document.createTextNode(props.alt));

  return component;
};
