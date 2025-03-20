import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations()

  return (
    <div>
      <h1>{t('not-found-title')}</h1>
      <Link href={'/'}>
        <Button variant='link'>{t('not-found-return')}</Button>
      </Link>
    </div>
  )
}
