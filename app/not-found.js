import React, {Fragment} from 'react'

function PageNotFound() {
  return (
    <Fragment>
      <main className='not-found'>
        <h1>Page Not Found !</h1>
        <p>Unfoutunately, we could not find the requested page or resource.</p>
      </main>
    </Fragment>
  )
}

export default PageNotFound;