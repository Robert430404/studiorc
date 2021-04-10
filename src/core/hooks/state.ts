// The key for the state you're using
type StateKey = string;

// Represents the state machine
type StateMachine = [key: StateKey, setter: (value: unknown) => void];

// Map for controlling created state
const stateMap = new Map<StateKey, unknown>();

// Inits the state inside of the component
export const useState = <T>(
  value: T,
): [key: StateKey, setter: (value: T) => void] => {
  const key: StateKey = `State:${Math.floor(Math.random() * 9999)}`;
  const machine: StateMachine = [
    key,
    (value: T): void => {
      stateMap.set(key, value);
    },
  ];

  stateMap.set(key, value);

  return machine;
};

// Returns the state from the controlled map
export const getState = <T>(key: StateKey): T => {
  return stateMap.get(key) as T;
};
