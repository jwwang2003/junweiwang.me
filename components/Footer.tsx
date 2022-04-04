import React from 'react'
import { AiFillHeart, AiOutlineCopyrightCircle } from 'react-icons/ai'

import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <div className="flex flex-col bg-white dark:bg-neutral-900 mt-auto p-4">
      <Container>
        <p className="text-center">
          Coded with <AiFillHeart className="inline-block text-red-500" /> using&nbsp;
          <a
            className="underline underline-offset-1"
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer">nextJS</a>, deployed on&nbsp;
          <a className="text-blue-600 underline underline-offset-1"
            href="https://www.digitalocean.com/"
            target="_blank"
            rel="noopener noreferrer">digitalocean</a>, protected by&nbsp;
          <a className="text-orange-400 underline underline-offset-1"
            href="https://www.cloudflare.com/en-ca/"
            target="_blank"
            rel="noopener noreferrer">cloudflare</a>
        </p>
      </Container>
      <Container>
        <SocialMedia />
      </Container>
      <Container>
        <p className="text-zinc-400 italic font-light py-1 first:pt-0 last:pb-0">jwwang.03@outlook.com</p>
      </Container>
      <Container>
        <AiOutlineCopyrightCircle className="mr-1" />2022
      </Container>
    </div>
  )
}

function Container({ children }: { children: React.ReactChild | React.ReactChild[] }) {
  return <div className="flex flex-row items-center mx-auto my-1 first:mt-0 last:mb-0">
    {children}
  </div>
}
