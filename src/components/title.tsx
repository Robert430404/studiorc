import 'components/title.scss';

import JSXFactory from 'core/jsx';

import Blinker from 'components/blinker';

enum ClassNames {
  Block = 'Title',
  Bold = 'Title--bold',
}

const Title = () => {
  return (
    <h1 classes={[ClassNames.Block]}>
      Studio <span classes={[ClassNames.Bold]}>RC</span>
      <Blinker />
    </h1>
  );
};

export default Title;
