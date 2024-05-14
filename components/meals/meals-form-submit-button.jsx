'use client'
import React, { Fragment } from 'react'
import { useFormStatus } from 'react-dom'

function MealsFormButton() {
    const { pending } = useFormStatus()
    return (
        <Fragment>
            <button type="submit" disabled={pending}>
                {pending ? "Submiting..." : "Share Meal"}
            </button>
        </Fragment>
    )
}

export default MealsFormButton;