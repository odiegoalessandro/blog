import { useState, useEffect } from "react"
import { database } from "../services/firebase"
import useAuth from "./useAuth"

interface Comments {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string

}

interface FirebaseComments {
  content: string
  authorId: string
}

export default function useComment(slug: string){
  const { user } = useAuth()

  const [comments, setComments] = useState<Comments[]>()

  useEffect(() => {
    const commentsRef = database.ref(`posts/${slug}/comments`)

    commentsRef.on("value", result => {
      const comments = result.val()
      const firebaseComments: FirebaseComments = comments ?? {}
      const parsedComments = Object.entries(firebaseComments).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author
        }
      })

      setComments(parsedComments)
    })

    return () => commentsRef.off()
  }, [slug, user?.id])

  return { comments }
}