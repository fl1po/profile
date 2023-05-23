import Github from '../../../resources/github.png';
import Telegram from '../../../resources/telegram.svg';
import VK from '../../../resources/vk.svg';
import Instagram from '../../../resources/instagram.svg';
import cyrm from '../../../resources/cyrm.svg';
import Protonmail from '../../../resources/protonmail.svg';

export const companies = [
  {
    post: 'Frontend Developer',
    companyName: 'cyber-rom',
    description: 'Media',
    resources: [
      {
        src: cyrm,
        link: 'https://cyrm.ru/',
      },
      {
        src: VK,
        link: 'https://vk.com/',
        name: 'cyber_rom',
      },
    ],
  },
  {
    post: 'PR',
    companyName: 'WARHOL',
    description: 'Media',
    resources: [
      {
        src: Telegram,
        link: 'https://t.me/',
        name: 'ebissomnoi',
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
