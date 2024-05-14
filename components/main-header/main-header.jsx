import React, { Fragment } from 'react'
import classes from './main-header.module.css'

import Link from 'next/link'
import Image from 'next/image' // Impliment Lazy Loading Automatically.

import NavLink from './nav-link';
import logoImage from '@/assets/logo.png'
import MainHeaderBackground from './main-header-background'

function MainHeader() {

    return (
        <Fragment>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logoImage} alt="Site Main Logo" priority />
                    Next Level Food
                </Link>
                <NavLink/>
            </header>
        </Fragment>
    )
}

export default MainHeader