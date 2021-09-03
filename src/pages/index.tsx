import { GetStaticProps } from 'next'
import Menu from '../components/Menu'
import { getAllPosts } from '../utils/posts'

export default function Home({posts}) {
  console.log(posts)

  return (
    <Menu />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()

  return {
    props: {
      posts,
    }
  }
}