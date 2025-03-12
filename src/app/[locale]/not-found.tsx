import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations()

  return (
    <div>
      <h1>{t('not-found-title')}</h1>
      <Button variant='link'>
        <Link href={'/main'}></Link>
        {t('not-found-return')}
      </Button>
    </div>
  )
}
