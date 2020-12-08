import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';

const Contact = () => {
  return (
    <div className={styles.container}>
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
          <iframe
            src="https://www.cognitoforms.com/f/nleQ9JxgmEeavPDAq7BXSg?id=1"
            style={{
              position: 'relative',
              width: '1px',
              minWidth: '100%',
              width: '100%'
            }}
            frameBorder="0"
            scrolling="yes"
            seamless="seamless"
            height="700"
            width="100%"
          ></iframe>
        </div>
      </main>
    </div>
  )
};

export default Contact;
