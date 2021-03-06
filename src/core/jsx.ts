import {
  isElementEvents,
  ElementEvents,
  isDataAttribute,
  isClassList,
} from 'core/guards/jsxGuards';

// Defines the interface for a JSX element
interface JSXElement {
  id?: string;
  classes?: string[];
  events?: { name: string; handler: Function }[];
  href?: string;
  alt?: string;
  target?: string;
  rel?: string;
  src?: string;
  frameborder?: string;
  allowfullscreen?: string;
  title?: string;
  height?: string;
  width?: string;
  allow?: string;
}

// Define the elements our JSX Factory supports
declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: JSXElement;
      button: JSXElement;
      iframe: JSXElement;
      section: JSXElement;
      header: JSXElement;
      footer: JSXElement;
      nav: JSXElement;
      span: JSXElement;
      h1: JSXElement;
      h2: JSXElement;
      br: JSXElement;
      a: JSXElement;
      p: JSXElement;
    }
  }
}

// Handles creating the actual elements from the JSX
class JSXFactory {
  public static CreateJSXComponent = (
    tag: any,
    props: any,
    ...children: any
  ): HTMLElement => {
    let element: HTMLElement;

    // Create the element
    if (typeof tag === 'function') {
      element = tag(props);
    } else {
      element = document.createElement(tag);
    }

    const handleElementEvents = (events: ElementEvents) => {
      events.forEach((event) => {
        element.addEventListener(event.name, event.handler);
      });
    };

    const handleChildren = () => {
      children.forEach((child: any) => element.append(child));
    };

    if (Array.isArray(children)) {
      handleChildren();
    }

    if (props) {
      Object.keys(props).forEach((prop) => {
        const value = props[prop];

        if (isElementEvents(value)) {
          handleElementEvents(value);

          return;
        }

        if (isDataAttribute(prop)) {
          element.setAttribute(prop, value);

          return;
        }

        if (prop === 'classes' && isClassList(value)) {
          value.forEach((cssClass) => element.classList.add(cssClass));

          return;
        }

        element.setAttribute(prop, value);
      });
    }

    return element;
  };
}

export default JSXFactory;
