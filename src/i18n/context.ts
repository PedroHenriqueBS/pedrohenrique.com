import { createContext, useContext } from 'react'
import type { Translation } from './translations/pt'

export type Language = 'pt' | 'en'

/** A string that carries both languages; resolved by `useLanguage().resolve`. */
export type Localized = Record<Language, string>

export interface LanguageContextValue {
  lang: Language
  t: Translation
  toggle: () => void
  resolve: (text: Localized) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
