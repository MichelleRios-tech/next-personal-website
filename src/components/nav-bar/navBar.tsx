import Link from 'next/link'
import React from 'react'

import './navBar.css'

export default function NavBar() {
  const urlsIndex = [
    '/home',
    '/about',
    '/contact',
    '/portfolio',
  ]

  function generateLinks() {
    return urlsIndex.map((url) => {
      return (
        <Link href={url} key={url}>
          {url.replace('/', '')}
        </Link>
      );
    });
  }
  return (
    <nav className='nav-bar--container'>
      {generateLinks()}
    </nav>
  )
}
