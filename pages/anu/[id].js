export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(anu => {
    return {
      params: { id: anu.id.toString() }
    }
  })

  return {
    paths,
    fallback: false  //when the user hits the url other than data from api then it will go to 404 Page/Error Page
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { anu: data }
  }
}

const Details = ({anu}) => {
  return (
    <div>
    <h1>{ anu.name }</h1>
    <p>{ anu.email }</p>
    <p>{ anu.phone }</p>
    <p>{ anu.website }</p>
    <p>{ anu.address.street + ', ' + anu.address.suite + ', ' + anu.address.city }</p>
  </div>
  );
}

export default Details;