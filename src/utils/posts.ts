import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const directory = path.join(process.cwd(), "src", "_posts")

export function getAllSlugs(){
  const filenames = fs.readdirSync(directory)
  const slugs = filenames.map(filename => filename.replace('.md', ''))

  return slugs
}

export async function getPostBySlug(slug: string){
  const postPath = path.join(directory, `${slug}.md`)
  const post = fs.readFileSync(postPath)
  const { content, data: metadata } = grayMatter(post)
  const convertedContent = await remark().use(html).process(content || '')

  return {
    metadata,
    content: convertedContent.toString()
  }
}

export function  getAllPosts(){
  const filenames = fs.readdirSync(directory)
  const posts = filenames.map(filename => {
    const postPath = path.join(directory, filename)
    const slug = filename.replace('.md', '')
    const post = fs.readFileSync(postPath)
    const { data } = grayMatter(post)

    return {
      title: data.title,
      excerpt: data.excerpt,
      slug,
      duration: data.duration,
      date: data.date
    }
  })

  return posts
}

export function getLatestPosts(){
  const filenames = fs.readdirSync(directory)
  let latest_filenames: string[]

  latest_filenames = filenames.slice(filenames.length - 2)

  const latest_posts = latest_filenames.map(filename => {
    const postPath = path.join(directory, filename)
    const slug = filename.replace('.md', '')
    const post = fs.readFileSync(postPath)
    const { data } = grayMatter(post)

    return {
      title: data.title,
      excerpt: data.excerpt,
      slug,
      date: data.date,
      duration: data.duration
    }
  })

  return latest_posts
}