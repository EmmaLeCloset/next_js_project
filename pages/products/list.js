import styles from '../../styles/Home.module.css'
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Catalog from "../../components/views/Catalog";
import { getProducts } from '../../utils/call-api';

export default function ProductsList({ products }) {
  return (
    <Layout>
      <Head>
        <title>Catalog</title>
      </Head>
      <h2>
        <a href="/" className={styles.link}>Back to Home</a>
      </h2>
      <h2>
        <Link href="/">
          <a className={styles.link}>Back to Home with client-side navigation</a>
        </Link>
      </h2>
      <h1 className={styles.title}>Products List</h1>
      <Catalog products={products} />
    </Layout>
  );
}

// export async function getServerSideProps() {
//   console.log("inside server side props in ProductsList");

//   const res = await getProducts();
//   const products = res.data;

//   return {
//     props: {
//       products,
//     },
//   };
// }

export async function getStaticProps() {
  console.log("inside getStaticProps function in ProductsList");

  const res = await getProducts();
  const products = res.data;

  return {
    props: {
      products,
    },
  };
}

