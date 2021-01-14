import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Location from '../components/ProjectLocation';
import PaginationRow from '../components/PaginationRow';

const Project = ({images, title, location, map, next, prev}) => {
  return (
    <>
      <Head>
        <title>{title} | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner images={images} />
        <Location title={title} location={location} map={map} />
        <PaginationRow next={next} prev={prev} />
        <Footer />
      </main>
    </>
  )
};

export default Project;
