export const generateId = (prefix?: string): string => {
  return `${prefix}_${Math.floor(Math.random() * 99999)}`;
};
