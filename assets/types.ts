export type Movie = {
    id: string,
    poster: string
}

export type Categorie = {
    id: string,
    title: string,
    movies: Movie[]
}

export type Episode = {
    id: string,
    title: string,
    poster: string,
    duration: string,
    plot: string,
    video: string
}