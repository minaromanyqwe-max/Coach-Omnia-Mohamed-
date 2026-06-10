"use client"

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../i18n/routing';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === 'ar' ? 'en' : 'ar';
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="px-3 py-1.5 rounded-lg bg-black/20 dark:bg-white/10 hover:bg-black/30 dark:hover:bg-white/20 transition-colors text-sm font-bold text-black dark:text-white font-sans"
    >
      {locale === 'ar' ? 'EN' : 'عربي'}
    </button>
  );
}
