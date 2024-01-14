import styles from './page.module.scss'
import { createTranslation } from '@/i18n/server';

export default async function Home() {
  const { $t } = await createTranslation('home');

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
      { $t("Transforming ideas into products.") }
      </h1>
    </main>
  )
}
