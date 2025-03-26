'use server'

import { signIn, signOut } from '@/auth'
import { cookies } from 'next/headers'

export const login = async () => {
  await signIn('github', { redirectTo: '/' })
}

export const logout = async () => {
  await signOut({ redirectTo: '/' })
}

export const setLocaleCookie = async(locale:string)=>{
  (await cookies()).set({name: 'NEXT_LOCALE', value: locale})
}