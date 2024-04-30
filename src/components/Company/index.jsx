import Image from 'next/image';
import React from 'react';

const Company = ({
  post, companyName, description, resources,
}) => (
  <div className="flex items-center flex-col m-[10px] text-center">
    {post}
    <div>@</div>
    {companyName}
    {' '}
    {description && `(${description})`}
    {!!resources?.length && (
    <div className="flex content-center">
      {resources.map(({ src, link, name = '' }) => (
        <div key={link}>
          <a
            href={link + name}
            target="_blank"
            rel="noreferrer"
          >
            <Image className="my-[5px] mx-[10px]" alt={name} src={src} width={20} height={20} />
          </a>
        </div>
      ))}
    </div>
    )}
  </div>
);

export default Company;
