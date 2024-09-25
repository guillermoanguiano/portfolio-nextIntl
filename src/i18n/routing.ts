import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'es'],
    defaultLocale: 'en',
    pathnames: {
        '/': '/',
    }
});

export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation(routing);