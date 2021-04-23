import 'components/content.scss';

import JSXFactory from 'core/jsx';

import ByLine from 'components/byline';
import ExternalLinks from 'components/externalLinks';

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
