'use client';

import React, { Fragment } from 'react'
import classes from './nav-link.module.css'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavLink() {
    const path = usePathname()

    return (
        <Fragment>
            <nav className={classes.nav}>
                <ul>
                    <li><Link
                        href="/meals"
                        className={path.startsWith("/meals") ? classes.active : undefined}
                    >
                        Browse Meals
                    </Link></li>
                    <li><Link
                        href="/community"
                        className={path.startsWith("/community") ? classes.active : undefined}
                    >
                        Foodies Community
                    </Link></li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavLink