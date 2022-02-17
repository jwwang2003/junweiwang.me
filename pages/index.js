import clsx from "clsx"

import BasicLayout from "../components/BasicLayout"
import SocialMedia from '../components/SocialMedia'

export default function Home() {
  return <BasicLayout>
    <div className="p-8">
      <Container className="flex flex-col-reverse sm:flex-row ">
        {/* <img src="/me1.jpeg" className="max-h-72 w-min mx-auto sm:mr-4"/> */}
        <section className="mb-4">
          <p className="text-3xl py-1 first:pt-0 last:pb-0">Hey there! My name is</p>
          <p className="text-6xl font-bold py-2 first:pt-0 last:pb-0">Jimmy Wang.</p>
          <p className="text-2xl py-1 first:pt-0 last:pb-0">An aspiring software engineer interested in cutting edge technologies.</p>
          {/* <p className="flex flex-row py-1 first:pt-0 last:pb-0">
            <SocialMedia />
          </p> */}
          <p className="text-zinc-400 italic font-light py-1 first:pt-0 last:pb-0">jwwang.03@outlook.com</p>
        </section>
      </Container>
    </div>
  </BasicLayout>
}

function Container({ children, className }) {
  return <section
  className={clsx(
    className,
    'max-w-2xl mx-auto',
    // 'border-solid border-b border-b-white dark:border-b-neutral-700',
    'py-12 first:pt-0 last:pb-0',
    'last:border-b-0'
  )}>
    {children}
  </section>
}