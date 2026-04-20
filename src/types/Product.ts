export type ProductImage = {
    id: number
    image: string
}

export type Product = {
    id: number
    name: string
    price: string
    category: 'smart_panels' | 'smart_lighting' | 'smart_switches' | 'home_security'
    category_display: string
    description: string
    image: string
    images: ProductImage[]
    rating: number
    reviews: number
    in_stock: boolean
    featured: boolean    
}