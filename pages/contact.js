import Image from 'next/image';
import Head from '../layouts/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Head title="Contact" />
      <main>
          <Header />
          <div className="container">
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
