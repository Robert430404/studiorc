// The coordinates of the starting touch
export type StartCoordinates = {
  vertical: number;
  horizontal: number;
};

// Potential touch directions we could detect
export enum TouchDirections {
  Up,
  Down,
  Left,
  Right,
}

// Handles detection of swipe direction
export const getTouchDirection = (
  { horizontal: startH, vertical: startV }: StartCoordinates,
  { changedTouches }: TouchEvent,
): TouchDirections => {
  const { clientX: x, clientY: y } = changedTouches.item(0);

  const vDiff = y - startV;
  const hDiff = x - startH;
  const vChange = y - startV < 0 ? (y - startV) * -1 : y - startV;
  const hChange = x - startH < 0 ? (x - startH) * -1 : x - startH;

  if (vDiff === 0 && hDiff === 0) {
    throw new Error('No diff detected');
  }

  if (vChange > hChange) {
    if (vDiff > 0 && vDiff > hDiff) {
      return TouchDirections.Down;
    }

    if (vDiff < 0 && vDiff < hDiff) {
      return TouchDirections.Up;
    }
  } else {
    if (hDiff > 0 && vDiff < hDiff) {
      return TouchDirections.Right;
    }

    if (hDiff < 0 && vDiff > hDiff) {
      return TouchDirections.Left;
    }
  }

  throw new Error('Could not determine the swipe direction');
};
