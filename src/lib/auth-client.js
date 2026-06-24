import { jwtClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({

    baseURL:"https://idea-vault-client-ifzm.vercel.app",
    plugins:[
        jwtClient()
    ]
})

export const { signIn, signUp, useSession, signOut } = createAuthClient()