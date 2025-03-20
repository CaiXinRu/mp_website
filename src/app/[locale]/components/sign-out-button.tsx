'use client'

import { Button } from '@/components/ui/button'
import { logout } from '@/lib/actions/auth'

export const SignOutButton = () => {
  return <Button onClick={() => logout()}>Sign Out</Button>
}
