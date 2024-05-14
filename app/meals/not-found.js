import React, { Fragment } from 'react'

function PageNotFound() {
  return (
    <Fragment>
      <main className='not-found'>
        <h1>Meal Not Found !</h1>
        <p>Unfoutunately, we could not find the requested meal.</p>
      </main>
    </Fragment>
  )
}

export default PageNotFound;