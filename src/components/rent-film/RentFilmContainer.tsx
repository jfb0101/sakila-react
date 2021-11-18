import React, { useEffect, useState } from 'react'
import { IListFilms } from '../../use-cases/list-films/IListFilms'
import { listFilms } from '../../use-cases/list-films/listFilms'
import { listFilmsFake } from '../../use-cases/list-films/listFilmsFake'
import { RentFilm, RentFilmProps } from './RentFilm'

const listFilmsUseCase = listFilms

export type RentFilmContainerProps = {
    token: string
}

export const RentFilmContainer = (props: RentFilmContainerProps) => {
    const [films,setFilms] = useState<RentFilmProps["films"][0][]>([])

    const updateFilms = async () => {
        setFilms(await listFilmsUseCase(props.token))
    }

    useEffect(() => {
        updateFilms()
    },[])

    return <RentFilm 
        films={films}/>
}