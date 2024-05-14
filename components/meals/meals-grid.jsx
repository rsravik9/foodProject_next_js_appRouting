import React, { Fragment } from 'react'
import classes from './meals-grid.module.css'
import MealItem from './meal-item'

function MealsGrid({ meals }) {
    return (
        <Fragment>
            <ul className={classes.meals}>
                {meals?.length && meals.map((meal) => {
                    return (
                        <li key={meal.id}>
                            <MealItem {...meal} />
                        </li>
                    )
                })}
            </ul>
        </Fragment>
    )
}

export default MealsGrid