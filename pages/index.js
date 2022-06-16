// import Head from 'next/head'
import Header from '../comps/Header'
import Banner from '../comps/Banner'
import Footer from '../comps/Footer'
import Faq from '../comps/Faq'
import Roadmap from '../comps/Roadmap'
// import HeadC from '../comps/head'
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="nft, nfts, arbitrum, litter kittens, litterkittens, layer2, $magic, magic, treasuredao, treasure, ethereum" />
        <meta name="author" content="Kreamcheez" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Litter Kittens</title>
    </Head>
    <div className="site-wrapper overflow-hidden">
      <Header />
      <Banner />
      <div>
        <Roadmap />
        <Faq />
      </div>
      <Footer />
    </div>
    </>
  )
}
