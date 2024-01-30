import NavBar from '@/components/nav-bar/navBar';
import SiteActions from '@/components/site-actions/siteActions';
import './header.css';
import SvgFoxLogo from '@/assets/fox_logo.png';
import Image from 'next/image';

export const sizesMap = {
  small: 24,
  medium: 48,
  large: 96,
}

export default function Header() {
  return (
    <div className='header--container'>
      <LogoWithName size='medium' />
      <NavBar />
      <SiteActions />
    </div>
  )
}

export function LogoWithName({
  size,
}: Readonly<{
  size: keyof typeof sizesMap
}>) {
  return (
    <div className='logo--container'>
      <Image
        src={SvgFoxLogo}
        alt='MiDevLabs Logo'
        width={sizesMap[size]}
        height={sizesMap[size]}
      />
      <p>MiDevLabs</p>
    </div>
  )
}