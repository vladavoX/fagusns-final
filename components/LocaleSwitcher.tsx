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
          <>
            {locale === 'en' ? (
              <Link
                key={1}
                href={{
                  pathname,
                  query
                }}
                as={asPath}
                locale={locale}
              >
                <Image
                  src='/flags/en.svg'
                  alt='English'
                  height={24}
                  width={24}
                />
              </Link>
            ) : locale === 'ru' ? (
              <Link
                key={2}
                href={{
                  pathname,
                  query
                }}
                as={asPath}
                locale={locale}
              >
                <Image
                  src='/flags/ru.svg'
                  alt='English'
                  height={24}
                  width={24}
                />
              </Link>
            ) : (
              <Link
                key={3}
                href={{
                  pathname,
                  query
                }}
                as={asPath}
                locale={locale}
              >
                <Image
                  src='/flags/sr.svg'
                  alt='English'
                  height={24}
                  width={24}
                />
              </Link>
            )}
          </>
        )
      })}
    </>
  )
}
