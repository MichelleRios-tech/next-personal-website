import Link from 'next/link'
import { headers } from 'next/headers'

import './navBar.css'

export default function NavBar() {
  const urlsIndex = [
    '/home',
    '/about',
    '/contact',
    '/portfolio',
  ]

  const headers = new Headers();

  // get url
  const pathname = headers.get('pathname');

  function generateLinks() {
    return urlsIndex.map((url) => {
      return (
        <Link 
          href={url}
          key={url}
          className='nav-bar--link'
        >
          {url.replace('/', '')}
        </Link>
      );
    });
  }

  return (
    <div>
      <nav className='nav-bar--container'>
        {generateLinks()}
      </nav>
      <p>{pathname}</p>
    </div>
  )
}
