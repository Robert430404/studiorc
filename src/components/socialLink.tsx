import 'components/socialLink.scss';

import JSXFactory from 'core/jsx';

enum ClassNames {
  Block = 'SocialLink',
}

interface Properties {
  link: string;
  alt: string;
}

const SocialLink = (props: Properties) => {
  return (
    <a
      classes={[ClassNames.Block]}
      href={props.link}
      alt={props.alt}
      rel={'noreferrer'}
      target={'_blank'}
    />
  );
};

export default SocialLink;
