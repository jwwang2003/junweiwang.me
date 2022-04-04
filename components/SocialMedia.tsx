import {
  AiOutlineGithub,
  AiOutlineReddit,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai'

export default function SocialMedia() {
  return <>
    <IconTemplate
      className="text-gray-600 hover:bg-gray-500"
      href="https://github.com/jwwang2003"
    >
      <AiOutlineGithub />
    </IconTemplate>
    <IconTemplate
      className="text-red-600 hover:bg-red-600"
      href="https://www.reddit.com/user/jw_wang"
    >
      <AiOutlineReddit />
    </IconTemplate>
    <IconTemplate
      className="text-blue-500 hover:bg-blue-500"
      href="/"
    >
      <AiOutlineLinkedin />
    </IconTemplate>
    <IconTemplate
      className="text-pink-600 hover:bg-pink-600"
      href="https://www.instagram.com/jww.2003"
    >
      <AiOutlineInstagram />
    </IconTemplate>
  </>
}

interface props {
  children: React.ReactChild | React.ReactChild[],
  className: string,
  href: string
}

function IconTemplate({ children, className, href }: props) {
  return <a 
    className={`${className} text-2xl mx-1 p-1 sm:p-2 first:ml-0 last:mr-0 rounded hover:text-white transition-colors duration-100 ease-in-out`}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    >
    { children }
  </a>
}