import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
    <title>Anu's List | Home</title>
    <meta name="keywords" content="anu"/>
    </Head>
    <div>
    <h1 className={styles.title}>Home Page</h1>
    <p className={styles.text}>This is a quick summary of your company's history and purpose, and should provide a clear overview of the company's brand story.</p>
    <p className={styles.text}>This is a quick summary of your company's history and purpose, and should provide a clear overview of the company's brand story.</p>
    <Link href="/anu/">
      <a className={styles.btn}>See Anu's Listing</a>
    </Link>
  </div>
  </>
  )
}
