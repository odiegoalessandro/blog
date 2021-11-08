import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

const directory = path.join(process.cwd(), "src", "projects")

export function getAllSlugs(){
  const filenames = fs.readdirSync(directory)
  const slugs = filenames.map(filename => filename.replace('.md', ''))

  return slugs
}

export async function getProjectBySlug(slug: string){
  const projectPath = path.join(directory, `${slug}.md`)
  const project = fs.readFileSync(projectPath)
  const { content, data: metadata } = grayMatter(project)

  return {
    metadata,
    content
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
      slug,
      image: data.image
    }
  })

  return projects
}