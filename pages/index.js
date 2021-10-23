import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Posts from '../components/Posts';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pratham's Website</title>
        <meta
          name="description"
          content="Pratham's Personal Website : Creative Portfolio"
        />
      </Head>
      <Projects />
      <Posts />
      <About />
      <Contact />
    </>
  );
}
