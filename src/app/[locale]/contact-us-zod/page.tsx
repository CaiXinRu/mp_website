'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { useTranslations } from 'next-intl'

const formSchema = z.object({
  name: z.string().min(1, { message: 'nameRequired' }),
  company: z.string().optional(),
  phone: z.string().min(10, { message: 'phoneRequired' }),
  email: z.string().email('validEmail'),
  requestType: z.string().min(1, { message: 'selectRequestType' }),
  country: z.string().optional(),
  sources: z.array(z.string()).min(1, { message: 'selectSource' }),
  content: z.string().min(1, { message: 'contentRequired' }),
})

type FormData = z.infer<typeof formSchema>

export default function ContactUsZod() {
  const t = useTranslations()
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requestType: '',
      sources: [],
    },
  })

  const onSubmit = (data: FormData) => {
    console.log('表單資料：', data)
  }

  const selectedSources = watch('sources', [])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mx-auto p-6 border rounded-lg space-y-4'
    >
      {/* 姓名 */}
      <div>
        <label className='block font-semibold'>姓名 *</label>
        <Input {...register('name')} className='border p-2 w-full' />
        <p className='text-red-600 text-sm'>
          {errors.name?.message && t(errors.name?.message)}
        </p>
      </div>

      {/* 公司 / 單位 */}
      <div>
        <label className='block font-semibold'>公司 / 單位</label>
        <Input {...register('company')} className='border p-2 w-full' />
      </div>

      {/* 聯絡電話 */}
      <div>
        <label className='block font-semibold'>聯絡電話 *</label>
        <Input {...register('phone')} className='border p-2 w-full' />
        <p className='text-red-600 text-sm'>
          {errors.phone?.message && t(errors.phone?.message)}
        </p>
      </div>

      {/* Email */}
      <div>
        <label className='block font-semibold'>E-mail *</label>
        <Input {...register('email')} className='border p-2 w-full' />
        <p className='text-red-600 text-sm'>
          {errors.email?.message && t(errors.email?.message)}
        </p>
      </div>

      {/* 需求類型 */}
      <div>
        <label className='block font-semibold'>需求類型 *</label>
        <Select
          onValueChange={(value) => {
            setValue('requestType', value)
            trigger('requestType')
          }}
        >
          <SelectTrigger className='w-full border'>
            <SelectValue placeholder='請選擇' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='consultation'>公關洽詢</SelectItem>
            <SelectItem value='product'>產品需求</SelectItem>
            <SelectItem value='technical'>技術諮詢</SelectItem>
            <SelectItem value='partnership'>產業合作</SelectItem>
            <SelectItem value='other'>其他</SelectItem>
          </SelectContent>
        </Select>
        <p className='text-red-600 text-sm'>
          {errors.requestType?.message && t(errors.requestType?.message)}
        </p>
      </div>

      {/* 國家 */}
      <div>
        <label className='block font-semibold'>國家</label>
        <Input {...register('country')} className='border p-2 w-full' />
      </div>

      {/* 資訊來源 */}
      <div>
        <label className='block font-semibold'>資訊來源 *</label>
        <div className='flex flex-wrap gap-2'>
          {['社群網頁', '網頁搜尋', '客戶/朋友介紹', '廣告/DM', '其他'].map(
            (source) => (
              <div key={source} className='flex items-center space-x-2'>
                <Checkbox
                  checked={selectedSources.includes(source)}
                  onCheckedChange={(checked) => {
                    const updatedSources = checked
                      ? [...selectedSources, source]
                      : selectedSources.filter((s) => s !== source)
                    setValue('sources', updatedSources)
                    trigger('sources')
                  }}
                />
                <span>{source}</span>
              </div>
            )
          )}
        </div>
        <p className='text-red-600 text-sm'>
          {errors.sources?.message && t(errors.sources?.message)}
        </p>
      </div>

      {/* 內容 */}
      <div>
        <label className='block font-semibold'>內容 *</label>
        <Textarea {...register('content')} className='border p-2 w-full' />
        <p className='text-red-600 text-sm'>
          {errors.content?.message && t(errors.content?.message)}
        </p>
      </div>

      {/* 送出按鈕 */}
      <Button type='submit' className='text-white w-full'>
        送出
      </Button>
    </form>
  )
}
