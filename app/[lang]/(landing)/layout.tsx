import type { Metadata } from 'next'
import { Providers } from '../providers'
import { Locale, i18n } from '@/i18n.config'
import Header from '../components/header'
import {
  Inter,
  Roboto,
  Roboto_Mono,
  Open_Sans,
  Montserrat,
  Lato,
  Poppins,
  Roboto_Condensed,
  Oswald,
  Noto_Sans,
  Raleway,
  Source_Sans_3,
  PT_Sans,
  Work_Sans
} from 'next/font/google'
import '../globals.css'
import React from 'react'

const inter = PT_Sans({ subsets: ['latin'], weight: ["400", "500", "700"], display: 'swap' } as any)

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  ru: () => import('@/dictionaries/ru.json').then(module => module.default)
}

const getDictionary = async (locale: Locale) => dictionaries[locale]()

export const metadata: Metadata = {
  title: 'vds-vps.com',
  description: 'Provides IT infrastructure',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}


export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {

  const { navigation } = await getDictionary(params.lang)

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header i18text={navigation} lang={params.lang} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
