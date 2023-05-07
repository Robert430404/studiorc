import JSXFactory from '../core/jsx';

enum ClassNames {
  Block = 'Copyright',
  Bold = 'Copyright--bold',
}

const Copyright = () => {
  return (
    <section classes={[ClassNames.Block]}>
      Copyright &copy;{' '}
      <span classes={[ClassNames.Bold]}>
        {new Date().getFullYear().toString()}
      </span>
    </section>
  );
};

export default Copyright;
