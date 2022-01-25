import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Home: NextPage = () => {
  return (
    <div className='bg-red-500'>
      <p>Pagina index</p>
      <Link href = '/admin/users'>
      <a className='cursor-pointer'>ir admin users </a>
      </Link>
    </div>
  )
}

export default Home
