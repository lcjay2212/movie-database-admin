import React from 'react'
import MoviesList from '../MoviesList'
import PageLayout from '../PageLayout'

const Screening = () => {
    return(
        <PageLayout className="movies-table">
            SCREENINGS
            <MoviesList />
        </PageLayout>
    )
}

export default Screening