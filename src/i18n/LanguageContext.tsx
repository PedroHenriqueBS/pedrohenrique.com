import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext, type Language, type LanguageContextValue } from './context'
import { pt, type Translation } from './translations/pt'
import { en } from './translations/en'

const STORAGE_KEY = 'ph-portfolio-lang'

const dictionaries: Record<Language, Translation> = { pt, en }

function readStoredLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'en' ? 'en' : 'pt'
  } catch {
    return 'pt'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(readStoredLanguage)

  const toggle = useCallback(() => {
    setLang((current) => {
      const next: Language = current === 'pt' ? 'en' : 'pt'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // storage unavailable (private mode) — language still toggles for the session
      }
      document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en'
      return next
    })
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: dictionaries[lang],
      toggle,
      resolve: (text) => text[lang],
    }),
    [lang, toggle],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
