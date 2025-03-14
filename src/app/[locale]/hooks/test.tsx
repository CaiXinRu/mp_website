import { Button } from '@/components/ui/button'
import { ApiResponse, HotelTs } from '@/ts/interface/api-response'
import { getTranslations } from 'next-intl/server'

export default async function TestPage() {
  const t = await getTranslations()

  const data: ApiResponse<HotelTs[]> = await fetch(
    'https://api.kcg.gov.tw/api/service/Get/cb50902c-3681-43ec-89da-705f68eafb88'
  ).then((res) => res.json())

  return (
    <div className='p-6 text-center'>
      <h1 className='text-2xl'>Server Component</h1>
      <p className='mt-4 text-lg'>{data?.data?.[0]?.觀光旅館名稱}</p>
      <Button variant='link'>{t('home')}</Button>
      {/* <p className="mt-2 text-gray-600">{data.body}</p> */}
    </div>
  )
}
