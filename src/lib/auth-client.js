import { jwtClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({

    //   baseURL:"https://localhost:3000",
          baseURL:"https://client-ten-eta-68.vercel.app",
    plugins:[
        jwtClient()
    ]
})

export const { signIn, signUp, useSession, signOut } = createAuthClient()