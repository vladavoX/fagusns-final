import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LocaleSwitcher() {
  const { locales, locale, pathname, query, asPath } = useRouter()
  const otherLocales = locales?.filter((l) => l !== locale)

  return (
    <>
      {otherLocales?.map((locale) => {
        return (
          <Link
            key={locale}
            href={{ pathname, query }}
            as={asPath}
            locale={locale}
          >
            {locale === 'en' ? (
              <Image
                src='/flags/en.svg'
                alt='English'
                height={24}
                width={24}
              />
            ) : (
              <Image
                src='/flags/sr.svg'
                alt='Serbian'
                height={24}
                width={24}
              />
            )}
          </Link>
        )
      })}
    </>
  )
}
