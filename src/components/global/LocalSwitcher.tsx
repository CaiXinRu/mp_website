'use client' 

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const languages = [
  { key: 'en', label: 'En' },
  { key: 'zh', label: '繁中' },
]

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <ul className='flex space-x-1'>
      {languages.map(({ key, label }) => (
        <li key={key}>
          <Link href={redirectedPathName(key)}>
            <Button variant='link'>{label}</Button>
          </Link>
        </li>
      ))}
    </ul>
  )
}
