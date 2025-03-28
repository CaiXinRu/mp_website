'use server'

import { BreadcrumbGlobal } from '@/app/[locale]/components/Breadcrumb'
import { SignInButton } from '@/app/[locale]/components/SignInButton'
import { SignOutButton } from '@/app/[locale]/components/SignOutButton'
import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export default async function MainHomePage() {
  const session = await auth()
  const t = await getTranslations()

  return (
    <>
      <BreadcrumbGlobal />
      {session?.user ? (
        <div className='flex gap-4 mb-5'>
          <Link href={'/user-info'}>
            <Button>{t('user-info')}</Button>
          </Link>
          <SignOutButton />
        </div>
      ) : (
        <div className='text-center mb-5'>
          <p>You Are Not Signed In</p>
          <SignInButton />
        </div>
      )}
      <Image src='https://picsum.photos/800/600' width={800}
            height={600} alt={''} />
      <div className='flex justify-end mt-5 items-end gap-4'>
        <a href='/spanish.pdf' download>
          <Button>PDF</Button>
        </a>
        <a href='/front_target.csv' download>
          <Button>CSV</Button>
        </a>
      </div>
    </>
  )
}
