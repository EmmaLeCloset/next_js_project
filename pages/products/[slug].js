import styles from '../../styles/Home.module.css'
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Product from "../../components/views/Product";
import { getProduct } from '../../utils/call-api';

export default function ProductShow({ product }) {
  console.log("inside client side in ProductShow");
  return (
    <Layout>
      <Head>
        <title>{product.name}</title>
      </Head>
      <h2>
        <Link href="/products/list">
          <a className={styles.link}>Back to the Catalog</a>
        </Link>
      </h2>
      <h1 className={styles.title}>Product details</h1>
      <Product product={product} />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  console.log("inside server side props in ProductShow");
  console.log('query', query);

  const res = await getProduct(query.slug);
  const product = res.data;

  return {
    props: {
      product,
    },
  };
}
