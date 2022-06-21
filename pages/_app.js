import Head from "next/head";
import Layout from '../src/components/Layout';
import Background from "../src/components/Background";
import "../src/css/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link  href="/favicon.ico"  type="image/x-icon" rel="shortcut icon"/>
      </Head>
      <Background />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}