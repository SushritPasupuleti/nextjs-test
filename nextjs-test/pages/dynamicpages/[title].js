function Post({ post }) {
  // Render post...
  return (
    <div style={{margin: '20px'}}>
      <h1 >{post.title}</h1>
      <h3 >{post.body}</h3>
    </div>
  )
}

export async function getStaticPaths() {

  const res = await fetch('http://localhost:5000/data')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { title: post.title },
  }))

   return {
    paths,
    fallback: false// See the "fallback" section below
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:5000/data/${params.title}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}

export default Post