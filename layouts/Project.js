import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Location from '../components/ProjectLocation';

const Project = ({alt, img, title, location, map}) => {
  return (
    <>
      <Head>
        <title>{title} | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner img={img} alt={alt} />
        <Location title={title} location={location} map={map} />
        <Footer />
      </main>
    </>
  )
};

export default Project;
