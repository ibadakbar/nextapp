'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
    signIn, signOut, useSession, getProviders
} from 'next-auth/react'
import Logo from '../public/assets/images/logo.svg'
Link
const Nav = () => {
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2'>
                <Image
                    alt='Logo'
                    src={Logo}
                    width={30}
                    height={30}
                    className='object-contain'

                />

            </Link>

        </nav>
    )
}

export default Nav