import Header from "@/components/header/header"
import './layout.css'

export default function landingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='landing-layout'>
      {children}
    </div>
  )
}