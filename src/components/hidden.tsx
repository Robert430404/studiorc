import 'components/hidden.scss';

import { getState, useState } from 'core/hooks/state';
import { generateId } from 'core/ids';
import JSXFactory from 'core/jsx';
import {
  getTouchDirection,
  StartCoordinates,
  TouchDirections,
} from 'core/touch';

import Video from 'components/video';

type EnteredSequence = string[];

export enum Keys {
  Left = 'ArrowLeft',
  Right = 'ArrowRight',
  Down = 'ArrowDown',
  Up = 'ArrowUp',
}

export enum ClassNames {
  Block = 'Hidden',
  Visible = 'Hidden--visible',
  IFrame = 'Hidden__iframe',
}

const touchMap = new Map<TouchDirections, Keys>();

touchMap.set(TouchDirections.Up, Keys.Up);
touchMap.set(TouchDirections.Down, Keys.Down);
touchMap.set(TouchDirections.Left, Keys.Left);
touchMap.set(TouchDirections.Right, Keys.Right);

interface Properties {
  activationSequence: Keys[];
}

const Hidden = ({ activationSequence: sequence }: Properties) => {
  const id = generateId('hidden_easteregg');
  const [enteredSequence, setEnteredSequence] = useState<EnteredSequence>([]);
  const [touchStart, setTouchStart] = useState<StartCoordinates>({
    horizontal: 0,
    vertical: 0,
  });

  const handleActivation = (): void => {
    const entered = getState<EnteredSequence>(enteredSequence);
    const component = document.getElementById(id);

    if (sequence.filter((v) => entered.indexOf(v) > -1).length === 6) {
      component.append(Video());

      component.classList.add(ClassNames.Visible);

      setEnteredSequence([]);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const entered = getState<EnteredSequence>(enteredSequence);

    if (entered.length >= sequence.length) {
      entered.shift();
    }

    entered.push(event.key);

    setEnteredSequence(entered);
    handleActivation();
  };

  const handleTouchStart = ({ changedTouches }: TouchEvent) => {
    const { clientX, clientY } = changedTouches.item(0);

    setTouchStart({
      horizontal: clientX,
      vertical: clientY,
    });
  };

  const handleTouchEnd = (event: TouchEvent) => {
    const entered = getState<EnteredSequence>(enteredSequence);
    const startCoordinates = getState<StartCoordinates>(touchStart);

    if (entered.length >= sequence.length) {
      entered.shift();
    }

    try {
      const touchDirection = getTouchDirection(startCoordinates, event);

      entered.push(touchMap.get(touchDirection));

      setEnteredSequence(entered);
      handleActivation();
    } catch {}
  };

  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('touchstart', handleTouchStart);
  document.addEventListener('touchend', handleTouchEnd);

  return <div classes={[ClassNames.Block]} id={id}></div>;
};

export default Hidden;
