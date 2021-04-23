export type ElementEvents = { name: string; handler: () => void }[];
export type DataAttribute = string;
export type ClassList = string[];

export const isElementEvents = (x: unknown): x is ElementEvents => {
  // If it's not an array it's no events
  if (!Array.isArray(x)) {
    return false;
  }

  // If there's no events in the array it's not events
  if (x.length <= 0) {
    return false;
  }

  // The event name isn't right
  if (typeof x[0].name !== 'string') {
    return false;
  }

  // No valid handler assigned
  if (typeof x[0].handler !== 'function') {
    return false;
  }

  return true;
};

export const isDataAttribute = (x: unknown): x is DataAttribute => {
  // If it's not a string, obviously not a data attribute
  if (typeof x !== 'string') {
    return false;
  }

  // If it doesn't start with data it's not formatted right
  if (!x.startsWith('data-')) {
    return false;
  }

  return true;
};

export const isClassList = (x: unknown): x is ClassList => {
  // If it's not an array, not a list of classes
  if (!Array.isArray(x)) {
    return false;
  }

  // If doesn't contain strings it's not a class array
  if (typeof x[0] !== 'string') {
    return false;
  }

  return true;
};
