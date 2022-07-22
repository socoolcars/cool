import Head from 'next/head'
import Image from 'next/image'
import Banner from './components/banner.js'
import Socool from './components/socool.js'
import Augmented from './components/augmented.js'

 function Home() {
  return (

   <>
   
    
   
   
   <Head>
        <title>So Cool Cars</title>
        <meta name="So Cool Cars" content="So Cool Cars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Socool/>
   <Augmented/>
   <Banner/>
   </>
   
   
  ) 
}
export default Home