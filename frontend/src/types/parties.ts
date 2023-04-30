export interface Parties {
    author: string,
    budget: number,
    createdAt: string,
    description: string,
    image: string,
    services: [Services],
    title: string,
    updatedAt: string,
    _id: string
}

export interface Services {
    name: string,
    description: string,
    price: number,
    image: string,
    updatedAt: string,
    id: string
}
            