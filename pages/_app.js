import Head from 'next/head';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap');
        </style>
      </Head>
      <Component { ...pageProps } />
    </>
  );
}

export default MyApp
