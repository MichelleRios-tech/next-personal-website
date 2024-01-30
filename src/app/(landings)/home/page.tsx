import { HeroBanner } from '@/components/hero-banner/heroBaner';
import { Button } from '@/components/ui/button';
import { createTranslation } from '@/i18n/server';

export default async function Home() {
  const { $t } = await createTranslation('home');

  return (
    <main>
      <HeroBanner />
      <h1>
      { $t("Transforming ideas into products.") }
      </h1>
      <Button variant='outline'>
        { $t("Schedule a meeting") }
      </Button>
    </main>
  )
}
