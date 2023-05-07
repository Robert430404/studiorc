import JSXFactory from '../core/jsx';
import ByLine from './byline';
import './content.scss';
import ExternalLinks from './externalLinks';

enum ClassNames {
  Block = 'Content',
}

const Content = () => {
  return (
    <section classes={[ClassNames.Block]}>
      <ByLine />
      <ExternalLinks />
    </section>
  );
};

export default Content;
