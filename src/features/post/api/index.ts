import { Prisma, Post } from '@prisma/client'

/**
 * Get all posts
 */

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export async function getAllPosts(): Promise<Post[]> {
  const response = await fetch(`/api/posts`)
  const json = await response.json()

  if (!response.ok) {
    throw json()
  }
  return json()
}
export async function getSinglePost(id: number): Promise<Post> {
  const response = await fetch(`/api/posts/${id}`)
  const json = await response.json()

  if (!response.ok) {
    throw json()
  }
  return json()
}
export async function createPost(post: Prisma.PostCreateInput): Promise<Post> {
  const response = await fetch(`/api/posts/create-post`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers,
  })

  const json = await response.json()
  if (!response.ok) {
    throw json()
  }

  return json()
}
export async function deletePost(id: string): Promise<Post> {
  const response = await fetch(`/api/posts/${id}/delete`, {
    method: 'DELETE',
    headers,
  })
  const json = await response.json()
  if (!response.ok) {
    throw json()
  }
  return json()
}
