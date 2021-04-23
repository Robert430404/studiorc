import 'components/externalLinks.scss';

import JSXFactory from 'core/jsx';

import Label, { ClassNames as LabelClassNames } from 'components/label';
import SocialLink from 'components/socialLink';

enum ClassNames {
  Block = 'ExternalLinks',
}

const ExternalLinks = () => {
  const githubLink = 'https://github.com/Robert430404';
  const linkedinLink = 'https://www.linkedin.com/in/robert430404/';

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;

    if (key === '1') {
      // open github link in new tab
      window.location.href = githubLink;
    }

    if (key === '2') {
      // open linkedin link in a new tab
      window.location.href = linkedinLink;
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  return (
    <nav classes={[ClassNames.Block]}>
      <Label modifiers={[LabelClassNames.ExternalLink]}>Press: </Label>
      <SocialLink link={githubLink} alt={'My Github Profile'}>
        (1) Github
      </SocialLink>
      <SocialLink link={linkedinLink} alt={'My Linkedin Profile'}>
        (2) Linkedin
      </SocialLink>
    </nav>
  );
};

export default ExternalLinks;
