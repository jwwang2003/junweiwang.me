import propTypes from 'prop-types';
import Layout from '../components/Layout';
import SocialMedia from '../components/SocialMedia';
import Button from '../components/UI/Button';

export default function Home() {
  return (
    <Layout>
      <div className="w-full sm:w-3/4 p-8" style={{ maxWidth: '800px' }}>
        <Section className="flex flex-col items-center sm:flex-row sm:items-start justify-around">
          <div className="mb-4 sm:mr-4">
            <h1 className="text-7xl font-bold mb-3">Jimmy Wang</h1>
            <h2 className="font-light">Aspiring software engineer that loves DIY and tinkering with hardware.</h2>
            <p className="text-zinc-400 italic font-light">jwwang.03@outlook.com</p>
            <div className="flex">
              <SocialMedia />
            </div>
            <Button className="w-min">Resume</Button>
          </div>
          <div className="test">
            <img src="/me1.jpeg" alt="A portrait of me" />
          </div>
        </Section>
        <Section>
          <span className="flex flex-row">
            <h2>0.</h2>
            <h1 className="text-clip">About me</h1>
            <div className="flex flex-row w-auto h-px bg-white" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus eget dignissim libero, nec finibus metus. Donec rhoncus accumsan aliquam.
            Sed fermentum condimentum tortor vel sagittis.
            Donec nunc nunc, vehicula id tellus non, ornare lacinia mauris.
            Pellentesque volutpat turpis ut est condimentum ullamcorper.
            Sed pulvinar est orci, non molestie velit scelerisque ullamcorper.
            Nam eget nisi leo. Quisque viverra sagittis vulputate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus eget dignissim libero, nec finibus metus. Donec rhoncus accumsan aliquam.
            Sed fermentum condimentum tortor vel sagittis.
            Donec nunc nunc, vehicula id tellus non, ornare lacinia mauris.
            Pellentesque volutpat turpis ut est condimentum ullamcorper.
            Sed pulvinar est orci, non molestie velit scelerisque ullamcorper.
            Nam eget nisi leo. Quisque viverra sagittis vulputate.
          </p>
        </Section>
        <Section>
          <span className="flex flex-row">
            <h2>0.</h2>
            <h1 className="text-clip">About me</h1>
            <div className="flex flex-row w-auto h-px bg-white" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus eget dignissim libero, nec finibus metus. Donec rhoncus accumsan aliquam.
            Sed fermentum condimentum tortor vel sagittis.
            Donec nunc nunc, vehicula id tellus non, ornare lacinia mauris.
            Pellentesque volutpat turpis ut est condimentum ullamcorper.
            Sed pulvinar est orci, non molestie velit scelerisque ullamcorper.
            Nam eget nisi leo. Quisque viverra sagittis vulputate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus eget dignissim libero, nec finibus metus. Donec rhoncus accumsan aliquam.
            Sed fermentum condimentum tortor vel sagittis.
            Donec nunc nunc, vehicula id tellus non, ornare lacinia mauris.
            Pellentesque volutpat turpis ut est condimentum ullamcorper.
            Sed pulvinar est orci, non molestie velit scelerisque ullamcorper.
            Nam eget nisi leo. Quisque viverra sagittis vulputate.
          </p>
        </Section>
      </div>
    </Layout>
  );
}

function Section({ children, className }) {
  return (
    <section className={`${className} py-10 first:pt-0 last:pb-0`}>
      { children }
    </section>
  );
}

Section.defaultProps = {
  children: null,
  className: '',
};

Section.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
};
