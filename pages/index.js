import propTypes from 'prop-types';
import Layout from '../components/Layout';
import HorizontalRule from '../components/UI/HorizontalRule';
import SocialMedia from '../components/SocialMedia';
import Button from '../components/UI/Button';

export default function Home() {
  return (
    <Layout>
      <div className="w-full sm:w-3/4 p-10" style={{ maxWidth: '800px' }}>
        <Section>
          <div className="flex flex-col items-center sm:flex-row sm:items-start justify-around">
            <div className="flex flex-col items-center sm:items-end sm:text-right mb-4 sm:mr-8">
              <h1 className="text-7xl font-bold mb-3">Jimmy Wang</h1>
              <h2 className="font-light mb-3">Aspiring software engineer that loves DIY and tinkering with hardware.</h2>
              <Button className="w-min">Resume</Button>
              <div className="flex flex-row"><SocialMedia /></div>
              <p className="text-zinc-400 italic font-light">jwwang.03@outlook.com</p>
            </div>
            <div className="test">
              <img src="/me1.jpeg" alt="A portrait of me" />
            </div>
          </div>
        </Section>
        <HorizontalRule />
        <Section>
          <span className="flex flex-row items-center mb-4">
            <h2 className="text-2xl text-zinc-400 mr-2">
              0.
            </h2>
            <h1 className="text-3xl font-semibold">About me</h1>
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
        <HorizontalRule />
        <Section>
          <span className="flex flex-row items-center mb-4">
            <h2 className="text-xl text-zinc-400 mr-2">
              1.
            </h2>
            <h1 className="text-3xl font-semibold">Education</h1>
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
    <section className={`${className} grid place-content-center py-10 first:pt-0 last:pb-0`}>
      { children }
    </section>
  );
}

Section.defaultProps = {
  children: null,
  first: false,
  className: '',
};

Section.propTypes = {
  children: propTypes.node,
  first: propTypes.bool,
  className: propTypes.string,
};
