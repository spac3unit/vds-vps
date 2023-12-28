import type { Metadata } from 'next'
import { Providers } from '../providers'
import { Locale, i18n } from '@/i18n.config'
import Header from '../components/header'
import { Inter } from 'next/font/google'
import '../globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })


const dictionaries = {
    en: () => import('@/dictionaries/en.json').then(module => module.default),
    ru: () => import('@/dictionaries/ru.json').then(module => module.default)
}

const getDictionary = async (locale: Locale) => dictionaries[locale]()

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export async function generateStaticParams() {
    return i18n.locales.map(locale => ({ lang: locale }))
}


export default async function DashboardLayout({
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
                    {children}
                </Providers>
            </body>
        </html>
    )
}
