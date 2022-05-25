import styled from 'styled-components';

const StyledLinkItem = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
`;

const StyledLogo = styled.img`
  margin-right: 5px;
`;

const StyledLink = styled.a`
  color: black;
  margin-left: 5px;
`;

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
      href={userName ? link+userName : `mailto:${link}`}
      target="_blank"
    >
      {userName ? `@${userName}` : link}
    </StyledLink>
  </StyledLinkItem>
);

export default LinkItem;
