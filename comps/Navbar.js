import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                   
                    <Image src="/logo.png" width={60} height={60}/>
                </div>

                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/nagi">Listing </Link>
            </nav>
        </>
    );
}
 
export default Navbar;