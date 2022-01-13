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


/*Inspired by: https://github.com/DefinedNet/nebula-docs/blob/main/src/languages.ts*/




export const mapGenericToSlug = {
    "": {
        fr: '',
        en: ''
    },
    "BLOG": {
        fr: 'actualites',
        en: 'news'

    },
    "PROJETS": {
        fr: 'projets',
        en: 'projects',
    },
    "SERVICES":{
        fr: 'services',
        en: 'services',
    },
    "INFO":{
        fr: 'info',
        en: 'info',
    }
}

export const mapSlugToGeneric = Object.keys(mapGenericToSlug).reduce((acc, k) => {
    Object.keys(mapGenericToSlug[k]).forEach(l => {
        acc[mapGenericToSlug[k][l]] = k
    })
    return acc
}, {})


/* à adapter-changer la hiérarchie comme dans mapGenericToSlug et implémenter

export const mapGenericToText = {
    "en": {
        "SERVICES": "Services",
        "PROJETS": "Projects",
        "ACTUALITE": "News",
        
        "LIRE_SUITE": "Read more"
    },
    "fr":{
        "SERVICES": "Services",
        "PROJETS": "Projets",
        "ACTUALITE": "Actualité",
        
        "LIRE_SUITE": "Continuer la lecture"
    }
}

*/