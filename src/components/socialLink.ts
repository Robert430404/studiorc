import CreateComponent, {
  Component,
  ComponentProperties,
} from '../core/component';

import './socialLink.scss';

enum ClassNames {
  Block = 'SocialLink',
}

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

  component.classList.add(ClassNames.Block);

  component.appendChild(document.createTextNode(props.alt));

  return component;
};
