import React from 'react';
import styled from 'styled-components';
import LinkItem from '../../components/LinkItem';
import Company from '../../components/Company';
import { companies, socials } from './data';

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

const SocialsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CompanyList = styled.div`

`;

const Main = () => (
  <StyledApp>
    <CompanyList>
      {companies.map((company) => <Company key={company.companyName} {...company} />)}
    </CompanyList>

    <SocialsList>
      {socials.map((link) => <LinkItem key={link.name} {...link} />)}
    </SocialsList>
  </StyledApp>
);

export default Main;
