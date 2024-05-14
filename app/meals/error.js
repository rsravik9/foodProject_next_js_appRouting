'use client'
import React, {Fragment} from 'react'

function ErrorPage({error}) {
  return (
    <Fragment>
        <main className='error'>
            <h1>An Error Occureed !</h1>
            <p>Fail to fetch meal data. Please try again leter</p>
        </main>
    </Fragment>
  )
}

export default ErrorPage