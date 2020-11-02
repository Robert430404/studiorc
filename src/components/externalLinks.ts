import CreateComponent, { Component } from './component';
import { SocialLink } from './socialLink';

const ExternalLinks = (): Component => {
  const component = CreateComponent(document.createElement('nav'));

  component.appendChild(
    SocialLink({
      link: 'https://github.com/Robert430404',
      iconPath: './img/github.svg',
    }),
  );

  component.appendChild(
    SocialLink({
      link: 'https://www.linkedin.com/in/robert430404/',
      iconPath: './img/linkedin.svg',
    }),
  );

  return component;
};

export default ExternalLinks;