import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1) this means backward button in chrome
      // router.go(1) this means forward button in chrome
      router.push('/')
    }, 3000)
  }, [])

  return (
    <>
    <Head>
    <title>Anu's List | Error</title>
    <meta name="keywords" content="anu"/>
    </Head>
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :|</h2>
      <p>Going back to the <Link href="/"><a>Home Page</a></Link> is 3 seconds...</p>
    </div>
    </>
  );
}
 
export default NotFound;