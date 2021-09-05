import { GetStaticPaths, GetStaticProps } from "next";
import { getAllSlugs, getPostBySlug } from "../../utils/posts";

export default function Slug({ content }){
  console.log(content)

  return(
    <>
    
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs()
  const path = slugs.map(slug => `/posts/${slug}`)

  return {
    paths: path,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getPostBySlug('first-post')
  
  return {
    props: {
      content
    }
  }
}