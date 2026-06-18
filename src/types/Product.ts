export type Review = {
    id: number
    name: string
    text: string
    rating: number
    created_at: string
}

export type ProductImage = {
    id: number
    image: string
}

export type Product = {
    id: number
    name: string
    price: number
    category: 'smart_panels' | 'smart_lighting' | 'smart_switches' | 'home_security'
    category_display: string
    description: string
    image: string
    images: ProductImage[]
    specs: string[]

    rating: number
    review_count: number
    reviews_list: Review[]

    in_stock: boolean
    featured: boolean
    created_at: string
}