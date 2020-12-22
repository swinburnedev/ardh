import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageGrid from '../components/ImageGrid';
import styles from '../styles/Home.module.scss';

const Expertise = () => {
  return (
    <>
      <Head>
        <title>Expertise | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.fifty}>
          <Header />
          <Footer />
        </div>
        <div className={styles.fifty}>
          <ImageGrid />
        </div>
      </main>
    </>
  )
};

export default Expertise;
