import { BreadcrumbGlobal } from '@/app/[locale]/components/Breadcrumb'
import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import { getTranslations } from 'next-intl/server'

export default async function UserInfoPage() {
  const t = await getTranslations()
  const session = await auth()

  return (
    <>
      <BreadcrumbGlobal />
      <Button>{t('user-info')}</Button>
      <div className='mt-5'>
        <h1>MAKEING IT BETTER.</h1>
        {session?.user?.image && (
          <img
            src={session?.user?.image}
            width={48}
            height={48}
            alt={session?.user?.name ?? 'Avatar'}
            style={{ borderRadius: '50%' }}
          />
        )}
        <p>User signed in with name: {session?.user?.name}</p>
        <p>User signed in with email: {session?.user?.email}</p>
      </div>
    </>
  )
}
