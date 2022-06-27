import styles from '../../styles/Home.module.css'
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { useState, useEffect } from "react";
import ProductDetails from "../../components/views/Product";
import { getProduct } from "../../utils/call-api/products-call";

export default function Product({ productInit, urlProductId }) {
  const [product, setProduct] = useState(false);
  
  async function fetchInitData() {
    if (productInit) return;
  
    try {
      const productRes = await getProduct(urlProductId);
  
      setProduct(productRes);
    } catch (err) {
      console.log(err.response);
    }
  }
  
  useEffect(() => {
    fetchInitData();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Product</title>
      </Head>
      <h2>
        <Link href="/">
          <a className={styles.link}>Back to the Catalog</a>
        </Link>
      </h2>
      <h1 className={styles.title}>Product</h1>
      {(!!productInit || product) && (
        <ProductDetails product={productInit || product} />
      )}
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const productInit = await getProduct(query.slug);

  return {
    props: {
      productInit,
      urlProductId: query.slug,
    },
  };
}
