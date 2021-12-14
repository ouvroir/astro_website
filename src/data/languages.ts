import localeSettings from './locales.json';
const {locales} = localeSettings;

export const DEFAULT_LOCALE = 'fr';

export const KNOWN_LANGUAGES = locales
    .reduce((accum, l) => {
        accum[l.language] =  l.locale;
        return accum
    }, {});

export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);
export const ALL_LOCALES = locales.map(l => l.locale);


export const langPathRegex = /\/([a-z]{2})\//;

export function getLanguageFromURL(pathname: string) {
    const langCodeMatch = pathname.match(langPathRegex);
    return langCodeMatch ? langCodeMatch[1] : DEFAULT_LOCALE;
}

export function getSlugFromURL(pathname: string) {
    const pathnameParts = pathname.split('/');
    const pathName = pathnameParts[pathnameParts.length - 1];
    const [slug] = pathName.split('.');
    return slug;
}
/* do we need: getLangFromFilename or getSlugFromFilename? */
/*Inspired by: https://github.com/DefinedNet/nebula-docs/blob/main/src/languages.ts*/