import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Nagi.module.css'
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: { 
            nagi : data 
        }
    }
}

const Nagi = ({nagi}) => {
    return (
        <>
        <Head>
          <title>Nagi List | Listing</title>
          
        </Head>
        <div>
            <h1>Nagi Listing</h1>
            {nagi.map(nag =>(
                <Link href={'/nagi/' + nag.id} key = {nag.id}>
                    <a className={styles.single}>
                        <h3>{nag.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
        </>
    );
}
 
export default Nagi;