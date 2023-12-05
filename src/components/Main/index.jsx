import React from 'react';
import LinkItem from '../LinkItem';
import Company from '../Company';
import { companies, socials } from './data';

const Main = () => (
  <div
    className="min-h-[35vh] min-w-[200px] w-full max-w-[300px]
    bg-[#d8d3ff] flex justify-center content-center flex-col rounded-3xl shadow-lg shadow-[#504646] py-0 px-[30px]"
  >
    <div>
      {companies.map((company) => <Company key={company.companyName} {...company} />)}
    </div>

    <div className="flex flex-col content-center max-w-[250px]">
      {socials.map((link) => <LinkItem key={link.name} {...link} />)}
    </div>
  </div>
);

export default Main;
