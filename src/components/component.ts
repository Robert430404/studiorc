export interface ComponentProperties {
  styles?: CSSStyleDeclaration;
}

export interface Component extends HTMLElement {
  applyStyles: (styles?: CSSStyleDeclaration) => Component;
}

const isComponent = (x: any): x is Component => {
  if (!x.applyStyles) {
    return false;
  }

  return true;
};

/** Creates a component instance from an element */
const CreateComponent = (element: any): Component => {
  element.applyStyles = function applyStyles(
    styles?: CSSStyleDeclaration,
  ): Component {
    if (!styles) {
      return this;
    }

    this.style = {
      ...this.style,
      ...styles,
    };

    return this;
  }.bind(element);

  if (isComponent(element)) {
    return element;
  }

  throw new Error('could not bind component');
};

export default CreateComponent;