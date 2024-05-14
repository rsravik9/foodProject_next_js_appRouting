import React, { Fragment } from 'react'
import classes from './page.module.css'

import Image from 'next/image'
import { notFound } from 'next/navigation'
// fill is used when we dont know exact dimention of the file

import { getMeal } from '@/lib/meals'

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug)

  if (!meal) {
    notFound() 
  }

  return {
    title: meal.title,
    description: meal.summary,
  }
}


function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug)

  if (!meal) {
    notFound() // Is is a spacial function by Next JS that trigger closest Not-Found Page.
  }

  // To get proper line brake:
  meal.instructions = meal.instructions.replace(/\n/g, '<br />')
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: meal.instructions
        }}>
        </p>
      </main>
    </Fragment>
  )
}

export default MealDetailsPage