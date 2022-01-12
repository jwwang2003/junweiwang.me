import Layout from '../components/Layout';
import HorizontalRule from '../components/UI/HorizontalRule';
import SocialMedia from '../components/SocialMedia';
import Button from '../components/UI/Button';

export default function Home() {
  return (
    <Layout>
      <div className="w-full md:w-3/4 p-10 max-w-3xl">
        <Container>
          <div className="flex flex-col items-center sm:flex-row sm:items-start justify-around">
            <div className="flex flex-col items-center sm:items-end sm:text-right mb-4 sm:mr-8">
              <h1 className="text-7xl font-bold mb-3">Jimmy Wang</h1>
              <h2 className="font-light mb-3">Aspiring software engineer that loves DIY and tinkering with hardware.</h2>
              <Button className="w-min">Resume</Button>
              <SocialMedia />
              <p className="text-zinc-400 italic font-light">jwwang.03@outlook.com</p>
            </div>
            <div className="home-portrait">
              <img src="/me1.jpeg" alt="A portrait of me" />
            </div>
          </div>
        </Container>
        <Content number="0" title="About me">
          <p className="mb-2">
            Hi, my name is Jimmy! Currently learning Chinese in preparation for my
            undergrad studies in software engineering at Fudan University. I like to
            develop programs and websites that solve a problem. I also take interest
            in low-level programming, some hacking, hardware & DIY projects,
            and music, having played the violin since elementary.
          </p>
          <p className="mb-2">
            My interst in development sprang into existance after reading a
            college C++ textbook during my summer travels in China.
            It didn&apos;t take long for me to finish all the exercises
            and labs within; during that time I was still in grade 9. Throughout
            the rest of my highschool days I continued to learn and experiment with
            more languages.
          </p>
          <p>
            Here are some of the languages and technologies that I have
            been working with or learning:
          </p>
          <GridChart items={[
            {
              title: 'Frontend',
              list: ['HTML/CSS/Javascript', 'React/Vue', 'Next.js'],
            },
            {
              title: 'Backend',
              list: ['NodeJS', 'MongoDB'],
            },
            {
              title: 'Other',
              list: ['C++', 'C#', 'Java'],
            },
          ]}
          />
        </Content>
        <Content number="1" title="Education">
          <Education
            name1="复旦大学"
            name2="Fudan University"
            period={{ start: '2021', end: '2025' }}
            degree="软件工程 | Software Engineering"
            list={[]}
          />
          <Education
            name1="同济大学"
            name2="Tongji University"
            period={{ start: '2020', end: '2021' }}
            degree="预科汉语 | Pre-university Chinese"
            list={[]}
          />
          <Education
            name1="Elgin Park Secondary"
            period={{ start: '2018', end: '2020' }}
            degree="Dogwood Diploma"
            list={[]}
          />

        </Content>
        <Content number="2" title="Work Experience" />
      </div>
    </Layout>
  );
}

function GridChart({ items }) {
  return (
    <div className="flex flex-row flex-wrap justify-center mb-2">
      { items && items.map((item) => (
        <span key={item.title} className="mx-2 first:ml-0 last:mr-0">
          <h1 className="mb-2 p-1 text-center text-primary border-b-2 border-secondary">{item.title}</h1>
          <ul className="text-white">
            {
              item.list && item.list.map((i) => <li key={`${item.title}-${i}`}>{i}</li>)
            }
          </ul>
        </span>
      ))}
    </div>
  );
}

function Education({
  name1, name2, period, degree, list,
}) {
  return (
    <section className="my-3 first:mt-0 last:mb-0">
      <div className="flex flex-row items-center">
        <h1 className="text-xl mr-2" style={{ color: '#24C7CB' }}>{name1}</h1>
        <h2 className="text-md font-light mr-4">{name2}</h2>
        <h2 className="text-white mr-4">
          {period.start}
          -
          {period.end}
        </h2>
        <h3 className="text-sm font-light">{degree}</h3>
      </div>
      <ul className="text-sm font-light ml-4 pl-2 border-l-2 border-zinc-300">
        {
          list && list.map((item) => <li>{item}</li>)
        }
      </ul>
    </section>
  );
}

function Content({
  children, number, title, className,
}) {
  return (
    <Container className={`${className} text-lg min-h-screen`}>
      <span className="flex flex-row items-center mb-3">
        <h2 className="text-2xl text-primary mr-2">
          {number}
          .
        </h2>
        <h1 className="text-3xl font-semibold">{title}</h1>
      </span>
      <HorizontalRule />
      <span className="text-zinc-400 mt-3">
        { children }
      </span>
    </Container>
  );
}

function Container({ children, className }) {
  return (
    <section className={`${className} grid place-content-center py-8 first:pt-0 last:pb-0`}>
      { children }
    </section>
  );
}
