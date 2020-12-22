import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Header />
          <Image src="/img/banner/contact.jpg" width={2000} height={843} />
          <Footer />
      </main>
    </>
  )
};

export default Contact;
