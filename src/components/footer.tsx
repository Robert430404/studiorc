import JSXFactory from '../core/jsx';
import Copyright from './copyright';

enum ClassNames {
  Block = 'Footer',
}

const Footer = () => {
  return (
    <footer classes={[ClassNames.Block]}>
      <Copyright />
    </footer>
  );
};

export default Footer;
