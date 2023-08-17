import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LinkItem = ({
  name, link, userName, src,
}) => (
  <div className="flex items-center m-2">
    <Image
      className="mr-[5px] w-5 h-5"
      src={src}
      alt={`${name} logo`}
    />
    {name}
    :
    <Link
      className="black ml-[5px] underline"
      href={userName ? link + userName : `mailto:${link}`}
      target="_blank"
    >
      {userName ? `@${userName}` : link}
    </Link>
  </div>
);

export default LinkItem;
