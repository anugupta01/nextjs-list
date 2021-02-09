import Link from 'next/link';
<style>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
</style>

const Menu = () => {
  return (
      <nav>
  <h1>Anu List</h1>
   <Link href="/"><a>Home</a></Link>
   <Link href="/about"><a>About</a></Link>
   <Link href="/anu/"><a>Anu Listing</a></Link>    
   </nav>
   );
}
 
export default Menu;