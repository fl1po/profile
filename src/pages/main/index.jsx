import React from 'react';
import styled from 'styled-components';
import Github from '../../../resources/github.png';
import Telegram from '../../../resources/telegram.png';
import VK from '../../../resources/vk.png';
import Instagram from '../../../resources/instagram.png';
import cyrm from '../../../resources/cyrm.svg';

const StyledApp = styled.div`
  min-height: 35vh;
  min-width: 200px;
  max-width: 250px;
  width: 100%;
  background-color: darkgrey;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10%;
  box-shadow: 0px 0px 20px 5px #504646;
  padding: 0 30px;
`;

const HiddenDocs = styled.div`
  display: none;
`;

const StyledLink = styled.a`
  color: black;
  margin-left: 5px;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledLinkItem = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
`;

const StyledLogo = styled.img`
  margin-right: 5px;
`;

const CompanyList = styled.div`

`;

const StyledCompany = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

const SocialList = styled.div`
  display: flex;
  justify-content: center;
`;

const Docs = () => (
  <HiddenDocs>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      Vite Docs
    </a>
  </HiddenDocs>
);

const LinkItem = ({ name, link, userName, src }) => (
  <StyledLinkItem>
    <StyledLogo
      src={src}
      alt={name + ' logo'}
      width={20}
      height={20}
    />
    {name}:
    <StyledLink
      href={link+userName}
      target="_blank"
    >
      @{userName}
    </StyledLink>
  </StyledLinkItem>
)

const Company = ({ post, companyName, description, resources }) => (
  <StyledCompany>
    {post}
    <div>@</div>
    {companyName} ({description})
    <SocialList>
      {resources.map(({ src, link, name = '' }) => (
        <div>
          <a
            href={link+name}
            target="_blank"
          >
            <StyledLogo src={src} width={20} height={20} />
          </a>
        </div>
      ))}
    </SocialList>
  </StyledCompany>
)

const Main = () => {
  const links = [
    {
      name: 'GitHub',
      link: 'https://github.com/',
      userName: 'fl1po',
      src: Github,
    },
    {
      name: 'Telegram',
      link: 'https://t.me/',
      userName: 'mitryakov',
      src: Telegram,
    },
  ];

  const companies = [
    {
      post: 'Frontend Developer',
      companyName: 'cyber-rom',
      description: 'Media',
      resources: [
        {
          src: cyrm,
          link: 'https://cyrm.ru/',
        },
        {
          src: VK,
          link: 'https://vk.com/',
          name: 'cyber_rom',
        },
      ]
    },
    {
      post: 'PR',
      companyName: 'WARHOL',
      description: 'Media',
      resources: [
        {
          src: Telegram,
          link: 'https://t.me/',
          name: 'normalnikus',
        },
        {
          src: VK,
          link: 'https://vk.com/',
          name: 'normalnikus',
        },
        {
          src: Instagram,
          link: 'https://instagram.com/',
          name: 'warholproject',
        },
      ]
    },
  ]

  return (
    <StyledApp>
      <CompanyList>
        {companies.map((company) => <Company {...company} />)}
      </CompanyList>
      
      <LinkList>
        {links.map((link) => <LinkItem {...link} />)}
      </LinkList>
    </StyledApp>
  );
};

export default Main;
