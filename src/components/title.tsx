import 'components/title.scss';

import JSXFactory from 'core/jsx';

enum ClassNames {
  Block = 'Title',
  Bold = 'Title--bold',
}

const Title = () => {
  return (
    <h1 classes={[ClassNames.Block]}>
      Studio <span classes={[ClassNames.Bold]}>RC</span>
    </h1>
  );
};

export default Title;
