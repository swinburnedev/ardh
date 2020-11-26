import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Masonary from '../components/Masonary';
import styles from '../styles/Home.module.scss';
import utils from '../styles/Utils.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.fifty}>
          <Header />
            <div className={styles.content}>
              <div className={styles.content__row}>
                <Image
                  className={styles.masonry__image}
                  src={`https://via.placeholder.com/350x150.png?text=Image 1`}
                  height="150"
                  width="350"
                  alt="1"
                />
              </div>
            </div>
          <Footer />
        </div>
        <div className={`${styles.fifty} ${utils.bg__white}`}>
          <Masonary />
        </div>
      </main>
    </div>
  )
};

export default Home;
