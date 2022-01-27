import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Home: NextPage = () => {
  return (
    <div className='bg-green-500'>
      <p>Pagina index - prova dev</p>
      <Link href = '/admin/users'>
      <a className='cursor-pointer'>ir admin users </a>
      </Link>
      <div>
        <i className='fa fa-home'/>
      </div>
    </div>
  )
}

export default Home
