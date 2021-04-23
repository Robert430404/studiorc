import 'components/header.scss';

import JSXFactory from 'core/jsx';

import Title from 'components/title';

enum ClassNames {
  Block = 'Header',
  Title = 'Header_title',
  SubTitle = 'Header_subTitle',
}

const Header = () => {
  return (
    <header classes={[ClassNames.Block]}>
      <Title classes={[ClassNames.Title]} />
    </header>
  );
};

export default Header;
