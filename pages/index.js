import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTQ_WGRtbJspyItEUa1iskOETAD8kh-Beq1gIuepwOXU12NbyDSY286fvcjzAc6Fcd8T0T8r9Dz2DCk/pubhtml?widget=true&amp;headers=false"></iframe>
      <Footer />
    </div>
  )
}
