import 'components/subtitle.scss';

import JSXFactory from 'core/jsx';

enum ClassNames {
  Block = 'SubTitle',
  Bold = 'SubTitle--bold',
}

const SubTitle = () => {
  const handleHobby = () => {
    const hobbies = ['guitar', 'nature', 'hiking', 'biking'];

    return hobbies[Math.floor(Math.random() * hobbies.length)];
  };

  return (
    <h2 classes={[ClassNames.Block]}>
      Just a simple guy who enjoys{' '}
      <span classes={[ClassNames.Bold]}>{handleHobby()}</span>
      <br />
      and hanging with my wife and kids.
    </h2>
  );
};

export default SubTitle;
