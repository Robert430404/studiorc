import 'components/byline.scss';

import JSXFactory from 'core/jsx';

enum ClassNames {
  Block = 'ByLine',
}

const ByLine = () => {
  return (
    <p classes={[ClassNames.Block]}>
      Senior Software Engineer, experienced in:
      <br />
      Golang, Python, PHP, JavaScript, and TypeScript.
    </p>
  );
};

export default ByLine;
