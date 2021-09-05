import fs from 'fs'
import grayMatter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

function convertToHtml(content: string){
  return remark()
    .use(html)
    .processSync(content)
    .toString()
}

export function getAllSlugs(){
  const allSlugs = fs.readdirSync('./src/_posts')
  const slugs = allSlugs.map(slug => {
    return slug.replace('.md', '')
  })

  return slugs
}

export function getAllPosts(){
  const allPostsFilenames = fs.readdirSync('./src/_posts')
  const posts = allPostsFilenames.map(filename => {
    const file = fs.readFileSync(`./src/_posts/${filename}`)
    const { data, content } = grayMatter(file)
    const converted_content = convertToHtml(content)

    return {
      metadata: {
        title: data.title,
        tags: data.tags,
        date: data.date,
        slug: filename.replace('.md', '')
      },
      content: converted_content
    }

  })

  return posts
}

export function getPostBySlug(slug: string){
  const allSlugs = fs.readdirSync('./src/_posts')
  const selectedSlug = allSlugs.find(element => element.replace('.md', '') === slug)
  if(selectedSlug){
    const file = fs.readFileSync(`./src/_posts/${selectedSlug}`)
    const { data, content } = grayMatter(file)
    const converted_content = convertToHtml(content)

    return {
      metadata: {
        title: data.title,
        tags: data.tags,
        date: data.date,
        slug: slug
      },
      content: converted_content
    }
  }
  return 
}