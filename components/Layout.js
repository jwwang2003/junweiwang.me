import { NextSeo } from 'next-seo';

export default function Layout({ children, title, description }) {
  return (
    <>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <div className="flex flex-col items-center">
        {children}
      </div>
    </>
  );
}
