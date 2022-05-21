import React from 'react';
import styled from 'styled-components';
import Github from '../../../resources/github.png';
import Telegram from '../../../resources/telegram.png';

const StyledApp = styled.div`
  height: 30vh;
  width: 20vw;
  background-color: darkgrey;
  display: flex;
  justify-content: center;
  border-radius: 10%;
  box-shadow: 0px 0px 20px 5px #504646;
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
    {' '}
    <StyledLink
      href={link+userName}
      target="_blank"
    >
      @{userName}
    </StyledLink>
  </StyledLinkItem>
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
  ]

  return (
    <StyledApp>
      <LinkList>
        {links.map(({ ...props }) => <LinkItem {...props} />)}
      </LinkList>
      <Docs />
    </StyledApp>
  );
};

export default Main;
