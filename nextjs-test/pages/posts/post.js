function Post({ posts }) {
  // Render posts...
  console.log(posts)

  return (
      <div>
      <h1>Post List: </h1>
      {posts.map(({title, body}) => 
        <h1 key={title}>{title}</h1>
      )}
      </div>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:5000/data')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  console.log(posts)
  return {
    props: {
      posts,
    },
  }
}

export default Post