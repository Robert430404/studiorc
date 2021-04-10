// Sets up the base interface that all component properties support
export interface ComponentProperties {
  styles?: CSSStyleDeclaration;
}

// Defines the properties of a component
export interface Component extends HTMLElement {
  applyStyles: (styles?: CSSStyleDeclaration) => Component;
}

// Insures that we have a proper component instance
const isComponent = (x: object): x is Component => 'applyStyles' in x;

// Creates a component instance from an element
const CreateComponent = (element: HTMLElement): Component => {
  (element as Component).applyStyles = function applyStyles(
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
