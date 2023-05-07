import JSXFactory from '../core/jsx';
import './header.scss';
import Title from './title';

enum ClassNames {
  Block = 'Header',
  Title = 'Header__title',
  SubTitle = 'Header__subTitle',
}

const Header = () => {
  return (
    <header classes={[ClassNames.Block]}>
      <Title classes={[ClassNames.Title]} />
    </header>
  );
};

export default Header;
