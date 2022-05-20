import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  height: 100vh;
  width: 90vw;
  background-color: darkgrey;
  display: flex;
  justify-content: center;
`;

const HiddenDocs = styled.div`
  display: none;
`;

const StyledLink = styled.a`
  color: black;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const LinkItem = ({ name, link, userName }) => (
  <div>
    {name}: 
    {' '}
    <StyledLink
      href={link}
      target="_blank"
    >
      @{userName}
    </StyledLink>
  </div>
)

const Main = () => {
  const links = [
    {
      name: 'Github',
      link: 'https://github.com/',
      userName: 'fl1po'
    },
    {
      name: 'Telegram',
      link: 'https://t.me/',
      userName: 'mitryakov'
    },
  ]

  return (
    <StyledApp>
      <LinkList>
        {links.map(({ name, link, userName }) => <LinkItem name={name} link={link+userName} userName={userName}/>)}
      </LinkList>
      <Docs />
    </StyledApp>
  );
};

export default Main;
