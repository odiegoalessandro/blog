import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import rehypeHighlight from "rehype-highlight"
import remarkFrontmatter from "remark-frontmatter"
import MDXComponents from "../../components/MDXComponents"
import { getPostFromSlug, getSlugs } from "../../lib/mdx"

export default function Post({ source }) {
  console.log(source)

  return (
    <MDXRemote {...source.mdxSource} components={{...MDXComponents}}  />
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getSlugs().map(slug => `/posts/${slug}`)

  return {
    fallback: false,
    paths,
  }
}

interface ParamsProps extends GetStaticPropsContext {
  params: {
    slug: string
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: ParamsProps) => {
  const { content, meta } = getPostFromSlug(params.slug)
  console.log(content)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
      remarkPlugins: [remarkFrontmatter],
    },
  })
  

  return {
    props: {
      source: {
        mdxSource,
        meta
      } 
    }
  }
}
