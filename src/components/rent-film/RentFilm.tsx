import React from 'react'


export type RentFilmProps = {
    films: {
        filmId: number,
        title: string
    }[]
}

export const RentFilm = (props: RentFilmProps) => {
    return <>
        <ul>
            {props.films.map(f => <li key={f.filmId}>{f.title}</li>)}
        </ul>

        
    </>
}