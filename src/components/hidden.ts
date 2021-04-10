import { getState, useState } from '../core/hooks/state';
import CreateComponent, {
  Component,
  ComponentProperties,
} from '../core/component';

import '../css/hidden.css';

type EnteredSequence = string[];

export enum Keys {
  Left = 'ArrowLeft',
  Right = 'ArrowRight',
  Down = 'ArrowDown',
  Up = 'ArrowUp',
  B = 'b',
  A = 'a',
}

enum ClassNames {
  Block = 'Hidden',
  Visible = 'Hidden--visible',
  IFrame = 'Hidden__iframe',
}

interface Properties extends ComponentProperties {
  activationSequence: Keys[];
}

const Hidden = ({ activationSequence }: Properties): Component => {
  const component: Component = CreateComponent(document.createElement('div'));
  const video: HTMLIFrameElement = document.createElement('iframe');

  component.classList.add(ClassNames.Block);
  video.classList.add(ClassNames.IFrame);

  video.setAttribute('width', '560');
  video.setAttribute('height', '315');
  video.setAttribute(
    'src',
    'https://www.youtube-nocookie.com/embed/QTT5iHCHSn0?autoplay=1&loop=1',
  );
  video.setAttribute('title', 'Youtube video player');
  video.setAttribute('frameborder', '0');
  video.setAttribute(
    'allow',
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope',
  );
  video.setAttribute('allowfullscreen', 'true');

  const [enteredSequence, setEnteredSequence] = useState<EnteredSequence>([]);

  const listenForSequence = (event: KeyboardEvent) => {
    const entered = getState<EnteredSequence>(enteredSequence);

    if (entered.length >= activationSequence.length) {
      entered.shift();
    }

    entered.push(event.key);

    setEnteredSequence(entered);

    if (
      activationSequence.filter((value) => entered.indexOf(value) > -1)
        .length === 10
    ) {
      component.append(video);

      component.classList.add(ClassNames.Visible);

      setEnteredSequence([]);
    }
  };

  document.addEventListener('keydown', listenForSequence);

  return component;
};

export default Hidden;
