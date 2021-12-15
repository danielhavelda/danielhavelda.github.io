import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Főoldal</title>
        <meta name="description" content="Daniel Havelda, frontend developer" />
      </Head>

      <div>
        <h1>
          Hello World
        </h1>
      </div>
    </div>
  )
}
