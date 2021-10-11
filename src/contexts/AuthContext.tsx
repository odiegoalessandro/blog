import { createContext, ReactNode, useState, useEffect } from "react"
import { auth, firebase } from "../services/firebase"

interface User {
  id: string
  name: string
  avatar: string
}

interface AuthContextType {
  user: User | undefined
  signInWithGoogle: () => Promise<void>
}

interface AuthContextProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProps){
  const { children } = props

  const [user, updateUser] = useState<User>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        const { uid, displayName, photoURL } = user

        if(!displayName || !photoURL){
          throw new Error("missing information from google account")
        }

        updateUser({
          id: uid,
          name: String(displayName).split(" ")[0],
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  async function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await auth.signInWithPopup(provider)
  
    if(result.user){
      const { uid, displayName, photoURL } = result.user

      if(!displayName || !photoURL){
        throw new Error("Missing information from google account")
      }

      updateUser({
        id: uid,
        avatar: photoURL,
        name: String(displayName).split(" ")[0]
      })
    }
  }

  return (
    <AuthContext.Provider value={{signInWithGoogle, user}}>
      {children}
    </AuthContext.Provider>
  )
}