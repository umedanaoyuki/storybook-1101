import {preRunMessage} from "jest-util";

export type Category = 'shoes' | 'clothes' | "book"
export type Condition = "new" | "used"

export type User = {
    id: number
    name: string
    displayName: string
    email: string
    profileImageUrl: string
    description: string
}

export type Product = {
    id: number
    category: Category
    title: string
    description: string
    imageUrl: string
    blurDataUrl: string
    price: number
    condition: Condition
    owner: User
}

export type ApiContext = {
    apiRootUrl: string
}