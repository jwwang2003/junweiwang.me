import { AiFillHeart, AiOutlineCopyrightCircle } from 'react-icons/ai'

import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <div className="flex flex-col bg-white dark:bg-neutral-900 mt-auto p-4">
      <Container>
        <p className="text-center">
          Coded with <AiFillHeart className="inline-block text-red-500"/> using&nbsp;
          <a className="underline underline-offset-1" href="https://nextjs.org/">nextJS</a>, deployed on&nbsp;
          <a className="text-blue-600 underline underline-offset-1" href="https://www.digitalocean.com/">digitalocean</a>, protected by&nbsp;
          <a className="text-orange-500 underline underline-offset-1" href="https://www.cloudflare.com/en-ca/">cloudflare</a>
        </p>
      </Container>
      <Container>
        <SocialMedia />
      </Container>
      <Container>
        <AiOutlineCopyrightCircle className="mr-1"/>2022
      </Container>
    </div>
  )
}

function Container({ children }) {
  return <div className="flex flex-row items-center mx-auto my-1 first:mt-0 last:mb-0">
    { children }
  </div>
}
