import CreateComponent, {
  Component,
  ComponentProperties,
} from '../core/component';

export enum HeadingTags {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

interface Properties extends ComponentProperties {
  element: HeadingTags;
  content: Node;
}

const Heading = (props: Properties): Component => {
  const component = CreateComponent(
    document.createElement(props.element),
  ).applyStyles(props.styles);

  component.appendChild(props.content);

  return component;
};

export default Heading;
