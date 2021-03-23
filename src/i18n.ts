import NextI18Next from 'next-i18next';
import path from 'path';

// Internacionalization global setup
const NextI18Instance = new NextI18Next({
  defaultLanguage: 'cs',
  otherLanguages: ['cs', 'en'],
  localePath: path.resolve('./public/locales')
});

export const {
  appWithTranslation,
  useTranslation,
  withTranslation,
  i18n,
  Link
} = NextI18Instance;

export interface WithNamespaces {
  namespacesRequired: string[];
  [key: string]: string[];
}

export default NextI18Instance;