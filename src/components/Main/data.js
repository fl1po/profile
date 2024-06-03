import Github from '../../../resources/github.png';
import Telegram from '../../../resources/telegram.svg';
import VK from '../../../resources/vk.svg';
import Instagram from '../../../resources/instagram.svg';
import Protonmail from '../../../resources/protonmail.svg';
import Fams from '../../../resources/fams.png';

export const companies = [
  {
    post: 'Frontend Developer',
    companyName: 'fams.ai',
    resources: [
      {
        src: Fams,
        link: 'https://fams.ai/',
      },
    ],
  },
  {
    post: 'PR',
    companyName: 'WARHOL',
    resources: [
      {
        src: Telegram,
        link: 'https://t.me/',
        name: 'warhol',
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
    ],
  },
];

export const socials = [
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
  {
    name: 'Mail',
    link: 'igor@mitryakov.dev',
    src: Protonmail,
  },
];
