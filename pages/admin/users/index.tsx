import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <div>
            <div>
                pagina de admin users
                <Link href='/'>
                    <a>Ir Home</a>
                </Link>
            </div>
        </div>
    )
}

export default index
