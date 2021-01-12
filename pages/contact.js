import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | ARDH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Header />
          {/* <Image src="/img/banner/contact.jpg" width={2000} height={843} /> */}
          <div>
            <Image src="/img/banner/contact.jpg" width={550} height={384} layout="intrinsic" />
            <style jsx>{`
                background-color: #8a9ca6;
                display: flex;
                justify-content: center;
                padding: 4%;
                width: 100%;
              }
            `}</style>
          </div>
          <Footer />
      </main>
    </>
  )
};

export default Contact;
