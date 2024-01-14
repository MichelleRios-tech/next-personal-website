import styles from './page.module.scss'
import { cookies } from 'next/headers'

export default function Home() {
  const locale = cookies().get('mdl_locale')?.value

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Transforming designs into real life products
      </h1>
      <h2>
        {locale}
      </h2>
    </main>
  )
}
