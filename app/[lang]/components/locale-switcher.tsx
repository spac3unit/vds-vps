'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'
import { Button, Stack } from '@chakra-ui/react'

export default function LocaleSwitcher() {
    const pathName = usePathname()

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <Stack direction='row' spacing={4} mr={4} >
            {i18n.locales.map(locale => {
                return (
                    <Link
                        href={redirectedPathName(locale)}
                    >
                        {locale}
                    </Link>

                )
            })}
        </Stack>
    )
}




