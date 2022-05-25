import React from 'react';
import styled from 'styled-components';

const StyledCompany = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px;
`;

const StyledLogo = styled.img`
  margin-right: 5px;
`;

const SocialList = styled.div`
  display: flex;
  justify-content: center;
`;

const Company = ({
  post, companyName, description, resources,
}) => (
  <StyledCompany>
    {post}
    <div>@</div>
    {companyName}
    {' '}
    (
    {description}
    )
    <SocialList>
      {resources.map(({ src, link, name = '' }) => (
        <div key={link}>
          <a
            href={link + name}
            target="_blank"
            rel="noreferrer"
          >
            <StyledLogo src={src} width={20} height={20} />
          </a>
        </div>
      ))}
    </SocialList>
  </StyledCompany>
);

export default Company;
