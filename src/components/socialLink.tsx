import JSXFactory from '../core/jsx';
import './socialLink.scss';

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
