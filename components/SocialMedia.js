import {
  AiOutlineGithub,
  AiOutlineReddit,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
} from 'react-icons/ai';

import Icon from './UI/Icon';

const socialMedia = [
  {
    name: 'Github',
    url: 'https://github.com/jwwang2003',
    className: 'text-gray-500 hover:bg-gray-500',
    icon: <AiOutlineGithub />,
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/user/jw_wang',
    className: 'text-red-600 hover:bg-red-600',
    icon: <AiOutlineReddit />,
  },
  {
    name: 'LinkedIn',
    url: '/',
    className: 'text-blue-500 hover:bg-blue-500',
    icon: <AiOutlineLinkedin />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/jww.2003',
    className: 'text-pink-600 hover:bg-pink-600',
    icon: <AiOutlineInstagram />,
  },
  {
    name: 'Email',
    url: 'mailto: jwwang.03@outlook.com',
    className: 'text-red-500 hover:bg-red-500',
    icon: <AiOutlineMail />,
  },
];

export default function SocialMedia() {
  return (
    <>
      {
      socialMedia.map(({
        name, icon, className, url,
      }) => (
        <Icon
          key={name}
          label={name}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
          href={url}
        >
          { icon }
        </Icon>
      ))
    }
    </>
  );
}
