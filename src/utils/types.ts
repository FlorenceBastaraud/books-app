export interface Genre {
  id: string
  name: string
  displayName: string
}

export interface Book {
  id: number
  title: string
  author: string
  coverImageUrl: string
  subjects: string[]
}
