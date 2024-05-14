import React, { Fragment, Suspense } from 'react'
import calsses from './page.module.css'

import Link from 'next/link'

import { getMeals } from '@/lib/meals'
import MealsLoadingPage from './loading-meal'
import MealsGrid from '@/components/meals/meals-grid'

export const metadata = {
    title: 'All Meals',
    description: 'Delicious meals',
};

async function Meals() {
    const meals = await getMeals()

    return <MealsGrid meals={meals} />
}

function MealPage() {
    return (
        <Fragment>
            <header className={calsses.header}>
                <h1>
                    Delicious meal, created
                    <span className={calsses.highlight}> by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={calsses.cta}>
                    <Link href="/meals/share">
                        Share Your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className={calsses.header}>
                <Suspense fallback={<MealsLoadingPage />}>
                    <Meals />
                </Suspense>
            </main>
        </Fragment>
    )
}

export default MealPage