import Link from 'next/link'
import React from 'react'

export const Link1 = ({ route, text }) => {
    return (
        <Link href={route} className='text-center bg-gradient-to-r from-twBlue to-twRedishPink hover:to-twBlue hover:from-twRedishPink hover:scale-95 px-3 py-1 rounded-full m-2 mx-3 text-white border-2 border-white'>
            {text}</Link>
    )
}
