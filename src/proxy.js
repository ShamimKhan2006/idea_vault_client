import { headers } from 'next/headers'
import { auth } from './lib/auth'
import { NextResponse } from 'next/server'

export async function proxy(request) {

  const session=await auth.api.getSession({

    headers:await headers()
  })

console.log(session)
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/add-idea", "/my-idea", "/my-interections", "/ideas/:path"]
}

