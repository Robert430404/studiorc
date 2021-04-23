import {
  isElementEvents,
  ElementEvents,
  isDataAttribute,
  isClassList,
} from 'core/guards/jsxGuards';

// Define the elements our JSX Factory supports
declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      button: any;
      iframe: any;
      section: any;
      header: any;
      footer: any;
      nav: any;
      span: any;
      h1: any;
      h2: any;
      br: any;
      a: any;
      p: any;
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
