export interface Parties {
    author: string,
    budget: number,
    createdAt: string,
    description: string,
    image: string,
    services: {
        name: string,
        description: string,
        price: number,
        image: string,
        updatedAt: string,
        id: string
    },
    title: string,
    updatedAt: string,
    id: string
}