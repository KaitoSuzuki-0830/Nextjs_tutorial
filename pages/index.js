import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>これから Next.jsを極めていきます!!!</p>
        <p>
          (
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}