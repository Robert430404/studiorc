import { getState, useState } from '../core/hooks/state';
import CreateComponent, {
  Component,
  ComponentProperties,
} from '../core/component';
import Video from './video';

import '../css/hidden.css';

type EnteredSequence = string[];

type StartCoordinates = {
  vertical: number;
  horizontal: number;
};

export enum Keys {
  Left = 'ArrowLeft',
  Right = 'ArrowRight',
  Down = 'ArrowDown',
  Up = 'ArrowUp',
  B = 'b',
  A = 'a',
}

export enum ClassNames {
  Block = 'Hidden',
  Visible = 'Hidden--visible',
  IFrame = 'Hidden__iframe',
}

interface Properties extends ComponentProperties {
  activationSequence: Keys[];
}

const Hidden = ({ activationSequence }: Properties): Component => {
  const component: Component = CreateComponent(document.createElement('div'));
  const [enteredSequence, setEnteredSequence] = useState<EnteredSequence>([]);
  const [touchStart, setTouchStart] = useState<StartCoordinates>({
    horizontal: 0,
    vertical: 0,
  });

  const activateVideo = () => {
    component.append(Video());

    component.classList.add(ClassNames.Visible);

    setEnteredSequence([]);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const entered = getState<EnteredSequence>(enteredSequence);

    if (entered.length >= activationSequence.length) {
      entered.shift();
    }

    entered.push(event.key);

    setEnteredSequence(entered);

    if (
      activationSequence.filter((v) => entered.indexOf(v) > -1).length === 6
    ) {
      activateVideo();
    }
  };

  component.classList.add(ClassNames.Block);

  document.addEventListener('keydown', handleKeyDown);

  document.addEventListener('touchstart', ({ changedTouches }: TouchEvent) => {
    const { clientX, clientY } = changedTouches.item(0);

    setTouchStart({
      horizontal: clientX,
      vertical: clientY,
    });
  });

  document.addEventListener('touchend', ({ changedTouches }: TouchEvent) => {
    const entered = getState<EnteredSequence>(enteredSequence);
    const { clientX, clientY } = changedTouches.item(0);
    const { horizontal, vertical } = getState<StartCoordinates>(touchStart);
    const { verticalDiff, horizontalDiff, verticalChange, horizontalChange } = {
      verticalDiff: clientY - vertical,
      horizontalDiff: clientX - horizontal,
      verticalChange: ((): number =>
        clientY - vertical < 0
          ? (clientY - vertical) * -1
          : clientY - vertical)(),
      horizontalChange: ((): number =>
        clientX - horizontal < 0
          ? (clientX - horizontal) * -1
          : clientX - horizontal)(),
    };

    // If no diff, break out
    if (verticalDiff === 0 && horizontalDiff === 0) {
      return;
    }

    if (entered.length >= activationSequence.length) {
      entered.shift();
    }

    if (verticalChange > horizontalChange) {
      if (verticalDiff > 0 && verticalDiff > horizontalDiff) {
        entered.push(Keys.Down);
      }

      if (verticalDiff < 0 && verticalDiff < horizontalDiff) {
        entered.push(Keys.Up);
      }
    } else {
      if (horizontalDiff > 0 && verticalDiff < horizontalDiff) {
        entered.push(Keys.Right);
      }

      if (horizontalDiff < 0 && verticalDiff > horizontalDiff) {
        entered.push(Keys.Left);
      }
    }

    setEnteredSequence(entered);

    if (
      activationSequence.filter((v) => entered.indexOf(v) > -1).length === 6
    ) {
      activateVideo();
    }
  });

  return component;
};

export default Hidden;
