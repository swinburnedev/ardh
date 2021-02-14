import Head from 'next/head';

const Header = ({title}) => {
  return (
    <Head>
      <title>{title} | ARDH</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}

export default Header;