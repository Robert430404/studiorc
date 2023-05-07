import JSXFactory from '../core/jsx';
import './title.scss';

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
