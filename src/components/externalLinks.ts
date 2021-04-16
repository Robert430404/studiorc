import CreateComponent, { Component } from '../core/component';
import { ClassNames } from './label';
import { Label } from './label';
import { SocialLink } from './socialLink';

const ExternalLinks = (): Component => {
  const component = CreateComponent(document.createElement('nav'));

  const github = SocialLink({
    link: 'https://github.com/Robert430404',
    alt: '(1) GITHUB',
  });

  const linkedin = SocialLink({
    link: 'https://www.linkedin.com/in/robert430404/',
    alt: '(2) LINKEDIN',
  });

  component.appendChild(
    Label({
      content: 'Press: ',
      modifiers: [ClassNames.ExternalLink],
    }),
  );

  component.appendChild(github);
  component.appendChild(linkedin);

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    const { key } = event;

    if (key === '1') {
      // open github link in new tab
      window.location.href = github.getAttribute('href');
    }

    if (key === '2') {
      // open linkedin link in a new tab
      window.location.href = linkedin.getAttribute('href');
    }
  });

  return component;
};

export default ExternalLinks;
