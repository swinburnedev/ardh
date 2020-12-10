import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
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
        <Header />
        <Hero />
        <div className={styles.fifty}>
          <div className={styles.content}>
            <div className={styles.content__row}>
              <h1>Heading 1</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere lacus ligula, varius pretium urna viverra in. Nunc in risus mauris. Cras condimentum eget dui pretium gravida. Etiam arcu elit, ultrices eu leo eu, dictum pretium leo. Integer et efficitur dui, sed euismod purus. Etiam cursus lacus non sodales vehicula. Pellentesque ut lectus ultrices, mattis risus ullamcorper, bibendum eros. Suspendisse condimentum ornare quam, pulvinar aliquet nunc dignissim a. Maecenas et lorem urna. Ut et pellentesque nisl. Nulla finibus arcu lectus, sit amet pretium dolor ultrices vel. In varius tellus in tortor sagittis finibus.</p>

              <h2>Heading 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere lacus ligula, varius pretium urna viverra in. Nunc in risus mauris. Cras condimentum eget dui pretium gravida. Etiam arcu elit, ultrices eu leo eu, dictum pretium leo. Integer et efficitur dui, sed euismod purus. Etiam cursus lacus non sodales vehicula. Pellentesque ut lectus ultrices, mattis risus ullamcorper, bibendum eros. Suspendisse condimentum ornare quam, pulvinar aliquet nunc dignissim a. Maecenas et lorem urna. Ut et pellentesque nisl. Nulla finibus arcu lectus, sit amet pretium dolor ultrices vel. In varius tellus in tortor sagittis finibus.</p>

              <h3>Heading 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere lacus ligula, varius pretium urna viverra in. Nunc in risus mauris. Cras condimentum eget dui pretium gravida. Etiam arcu elit, ultrices eu leo eu, dictum pretium leo. Integer et efficitur dui, sed euismod purus. Etiam cursus lacus non sodales vehicula. Pellentesque ut lectus ultrices, mattis risus ullamcorper, bibendum eros. Suspendisse condimentum ornare quam, pulvinar aliquet nunc dignissim a. Maecenas et lorem urna. Ut et pellentesque nisl. Nulla finibus arcu lectus, sit amet pretium dolor ultrices vel. In varius tellus in tortor sagittis finibus.</p>
              
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
