import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LocaleSwitcher() {
  const { locales, locale, pathname, query, asPath } = useRouter()
  const otherLocales = locales?.filter((l) => l !== locale)

  return (
    <>
      {otherLocales?.map((locale, index) => {
        return (
          <>
            {locale === 'en' ? (
              <Link
                key={index}
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
                key={index}
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
                key={index}
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
