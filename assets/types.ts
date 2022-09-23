export type Movie = {
    id: string,
    poster: string
}

export type Categorie = {
    id: string,
    title: string,
    movies: Movie[]
}