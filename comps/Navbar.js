import Menu from './Menu';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
    <div className="logo">
    <Image src="/logo.png" height={213} width={208} />
    <h1>Anu's List</h1>
    </div> 
   <Link href="/"><a>Home</a></Link>
   <Link href="/about"><a>About</a></Link>
   <Link href="/anu/"><a>Anu Listing</a></Link>  
    </nav>

);
}
 
export default Navbar;