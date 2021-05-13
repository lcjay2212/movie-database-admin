import React from 'react'
import MoviesList from '../MoviesList'
import PageLayout from '../PageLayout'

const Persons = () => {
    return(
        <PageLayout className="movies-table">
            <MoviesList />
        </PageLayout>
    )
}

export default Persons