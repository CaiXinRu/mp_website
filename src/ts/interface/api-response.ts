export interface ApiResponse<T> {
  contentType: string | null
  isImage: boolean
  data: T
  id: string
  message: string | null
  success: boolean
}

export interface HotelTs {
  seq: number
  觀光旅館名稱: string
  地址: string
  經度: string
  緯度: string
}
