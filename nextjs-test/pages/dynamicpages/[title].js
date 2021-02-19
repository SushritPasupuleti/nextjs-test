import Nav from './../../components/nav';
import { signin, signout, useSession } from 'next-auth/client'

function Post({ post }) {
  const [session, loading] = useSession()

  if (!session && loading) {
    return (
      <div>
        <Nav></Nav>
        Loading...
      </div>
    )
  }

  if (!session) {
    return (
      <div>
        <Nav></Nav>
        Sign in to view
      </div>
    )
  }

  if (session) {
    return (
      <div>
        <Nav></Nav>
        <div style={{ margin: '20px' }}>
          <h1 >{post.title}</h1>
          <h3 >{post.body}</h3>
          <h5>Viewing as {session.user.email}</h5>
        </div>
      </div>
    )
  }
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