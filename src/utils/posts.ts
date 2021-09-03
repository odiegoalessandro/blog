import fs from 'fs'
import grayMatter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

function convertToHtml(content: string){
  return remark()
    .use(html)
    .processSync(content)
}

export function getAllSlugs(){
  const allSlugs = fs.readdirSync('./src/_posts')
  const slugs = allSlugs.map(slug => {
    return slug.toLowerCase()
  })

  return slugs
}

export function getAllPosts(){
  const allPostsFilenames = fs.readdirSync('./src/_posts')
  const posts = allPostsFilenames.map(filename => {
    const file = fs.readFileSync(`./src/_posts/${filename}`)
    const { content, data } = grayMatter(file)
    const converted_content = convertToHtml(content).value

    return {
      metadata: {
        ...data,
        slug: filename
      },
      content: converted_content
    }

  })

  return posts
}