import 'components/subtitle.scss';

import { getState, useState } from 'core/hooks/state';
import { generateId } from 'core/ids';
import JSXFactory from 'core/jsx';

import Blinker from 'components/blinker';

enum ClassNames {
  Block = 'SubTitle',
  Bold = 'SubTitle--bold',
}

const config = {
  hobbyId: generateId('hobby'),
  hobbies: ['guitar', 'nature', 'hiking', 'biking', 'coding'],
  delays: {
    between: 1000 * 4, // every 4 seconds
    deletion: 125,
    insertion: [100, 125, 150, 200, 225, 250],
  },
};

const SubTitle = () => {
  const [newHobby, setNewHobby] = useState<string | null>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  const getInsertionDelay = () => {
    return config.delays.insertion[
      Math.floor(Math.random() * config.delays.insertion.length)
    ];
  };

  const getHobby = (): string => {
    const found =
      config.hobbies[Math.floor(Math.random() * config.hobbies.length)];
    const container = getHobbyContainer();

    if (found === container?.textContent) {
      return getHobby();
    }

    return found;
  };

  const getHobbyContainer = (): HTMLElement => {
    if (getState(container)) {
      return getState<HTMLElement>(container);
    }

    setContainer(document.getElementById(config.hobbyId));

    return getState<HTMLElement>(container);
  };

  const handleDeletion = () => {
    const container = getHobbyContainer();
    const { textContent } = container;

    container.textContent = textContent.slice(0, textContent.length - 1);

    if (textContent.length > 0) {
      setTimeout(handleDeletion, config.delays.deletion);

      return;
    }

    setTimeout(handleInsertion, getInsertionDelay());
  };

  const handleInsertion = () => {
    let hobby = getState<string>(newHobby);

    const container = getHobbyContainer();
    const { textContent } = container;

    if (hobby === textContent) {
      setTimeout(handleDeletion, config.delays.between);

      setNewHobby(null);

      return;
    }

    if (hobby) {
      container.textContent = hobby.slice(0, textContent.length + 1);

      setTimeout(handleInsertion, getInsertionDelay());

      return;
    }

    setNewHobby(getHobby());

    hobby = getState<string>(newHobby);

    container.textContent = hobby.slice(0, textContent.length + 1);

    setTimeout(handleInsertion, getInsertionDelay());
  };

  const handleHobby = () => {
    const container = getHobbyContainer();
    const hobby = getHobby();

    if (container?.textContent?.length > 0) {
      handleDeletion();

      return;
    }

    setTimeout(handleHobby, config.delays.between);

    if (container) {
      container.textContent = hobby;
    }

    return hobby;
  };

  return (
    <h2 classes={[ClassNames.Block]}>
      Just a simple guy who enjoys{' '}
      <span id={config.hobbyId} classes={[ClassNames.Bold]}>
        {handleHobby()}
      </span>
      <Blinker />
      <br />
      and hanging with my wife and kids.
    </h2>
  );
};

export default SubTitle;
