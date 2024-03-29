import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Catalog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.authBtnContainer}>
        <button className={styles.logInBtn}>
              <Link href="/auth">
                <a>Log In</a>
              </Link>
          </button>
        <button className={styles.authBtn}>
            <Link href="/sign-in">
              <a>Sign In</a>
            </Link>
        </button>
        <button className={styles.authBtn}>
            <Link href="/sign-up">
              <a>Sign Up</a>
            </Link>
        </button>
      </div>

      <main className={styles.main}>
        <Image
          className={styles.homeImage}
          src="/images/browse-the-catalog.jpg"
          height={250}
          width={250} 
          alt="Browse the catalog"
        />
        
        <h1 className={styles.title}>
          Welcome to
          <Link href="/products/list">
            <a className={styles.link}> My Next.js catalog project !</a>
          </Link>
        </h1>

        <p className={styles.description}>
          Get started by browsing it{' '}
          <Link href="/products/list">
            <a className={styles.link}>here </a>
          </Link>
          !
        </p>
      </main>

      <footer className={styles.footer}>
        Powered by LC
      </footer>
    </div>
  )
}
