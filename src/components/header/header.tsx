import Image from 'next/image';

import NavBar from '@/components/nav-bar/navBar';
import logo from '@/assets/logo.jpeg';
import SiteActions from '@/components/site-actions/siteActions';
import './header.css';

export default function Header() {
  return (
    <div className='header--container'>
      <Image
        src={logo}
        alt='Logo'
        width={50}
        height={50}
      />
      <NavBar />
      <SiteActions />
    </div>
  )
}