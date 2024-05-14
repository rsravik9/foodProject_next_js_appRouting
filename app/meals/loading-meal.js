import React, { Fragment } from 'react'
import classes from './loading.module.css'

function MealsLoadingPage() {
  return (
    <Fragment>
      <p className={classes.loading}>Fething Meals....</p>
    </Fragment>
  )
}

export default MealsLoadingPage;