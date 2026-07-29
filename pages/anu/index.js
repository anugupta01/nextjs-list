import Head from 'next/head'
import styles from '../../styles/Anu.module.css'
import Link from 'next/link';

export const getStaticProps = async() =>{
const res = await fetch('http://jsonplaceholder.typicode.com/users');
const data = await res.json();
return {
  props: {anu: data}
}
}

const Anu = ({anu}) => {
  return (
    <>
    <Head>
    <title>Anu's List | List</title>
    <meta name="keywords" content="anu"/>
    </Head>
    <div>
      <h1>All Anu-List</h1>
      {anu.map(anu => (
        <Link href={'/anu/' + anu.id} key={anu.id}>
        <a className={styles.single}>
        <h3>{anu.name}</h3>
        </a>
        </Link>
      ))}
    </div>
    </>
  );
}
 
export default Anu;