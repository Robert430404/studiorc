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
      img: JSXElement;
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
  /**
   * Handles adding the event listeners to the element
   */
  private static handleElementEvents = (
    element: HTMLElement,
    events: ElementEvents,
  ) => {
    events.forEach((event) => {
      element.addEventListener(event.name, event.handler);
    });
  };

  /**
   * Handles child elements for the parent
   */
  private static handleChildren = (element: HTMLElement, children: any[]) => {
    children.forEach((child: any) => element.append(child));
  };

  /**
   * Ingests the element when JSX is used to describe markup
   */
  public static CreateJSXComponent = (
    tag: any,
    props: any,
    ...children: any
  ): HTMLElement => {
    const element: HTMLElement =
      typeof tag === 'function' ? tag(props) : document.createElement(tag);

    if (Array.isArray(children)) {
      JSXFactory.handleChildren(element, children);
    }

    if (!props) {
      return element;
    }

    Object.keys(props).forEach((prop) => {
      const value = props[prop];

      if (isElementEvents(value)) {
        JSXFactory.handleElementEvents(element, value);

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

      if (prop === 'content') {
        return;
      }

      element.setAttribute(prop, value);
    });

    return element;
  };
}

export default JSXFactory;
