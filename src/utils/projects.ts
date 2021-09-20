import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const directory = path.join(process.cwd(), "src", "_projects")

export function getAllSlugs(){
  const filenames = fs.readdirSync(directory)
  const slugs = filenames.map(filename => filename.replace('.md', ''))

  return slugs
}

export async function getProjectBySlug(slug: string){
  const projectPath = path.join(directory, `${slug}.md`)
  const project = fs.readFileSync(projectPath)
  const { content, data: metadata } = grayMatter(project)
  const convertedContent = await remark().use(html).process(content || '')

  return {
    metadata,
    content: convertedContent.toString()
  }
}

export function  getAllProjects(){
  const filenames = fs.readdirSync(directory)
  const projects = filenames.map(filename => {
    const projectPath = path.join(directory, filename)
    const slug = filename.replace('.md', '')
    const project = fs.readFileSync(projectPath)
    const { data } = grayMatter(project)

    return {
      title: data.title,
      excerpt: data.excerpt,
      slug
    }
  })

  return projects
}

export function getLatestProjects(){
  const filenames = fs.readdirSync(directory)
  let latest_filenames: string[]

  latest_filenames = filenames.slice(filenames.length - 2)

  const latest_projects = latest_filenames.map(filename => {
    const projectPath = path.join(directory, filename)
    const slug = filename.replace('.md', '')
    const project = fs.readFileSync(projectPath)
    const { data } = grayMatter(project)

    return {
      title: data.title,
      excerpt: data.excerpt,
      slug
    }
  })

  return latest_projects
}