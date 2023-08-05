import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LinkItem = ({
  name, link, userName, src,
}) => (
  <div className="flex items-center m-2">
    <Image
      className="mr-[5px]"
      src={src}
      alt={`${name} logo`}
      width={20}
      height={20}
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
