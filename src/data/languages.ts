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



export const mapGenericToText = {
    "SERVICES":{
        fr: "Services",
        en: "Services"
    },
    "PROJETS":{
        fr: "Projets",
        en: "Projects"
    },    
    "BLOG":{
        fr: "Actualité",
        en: "News"
    },
    "LIRE_SUITE":{
        fr: "Continuer la lecture",
        en: "Read more"
    }
    
}    

//slugs
//TODO: trouver un moyen de parser _blog et _projets pour récupérer les slugs 
export const mapGenericToSlug = {
    "":{
        fr:"",
        en:""
    },
    "ACTUALITES": {
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
    },
    "ARTICLE_1":{
        fr: 'premier-billet',
        en: 'first-blogpost'
    },
    "ARTICLE_2":{
        fr: 'demo-site',
        en: 'site-demo'
    },
    "ARTICLE_3":{
        fr: 'billet-cieco',
        en: 'cieco-blogpost'
    },
    "COMMON":{
        fr: 'common',
        en: 'common'
    },
    "DIGITALMODELS":{
        fr: 'digital-models-reconstruction-project',
        en: 'digital-models-reconstruction-project'
    },
    "ENCYCLO":{
        fr: 'encyclopedie',
        en: 'encyclopedia'
    },
    "EXPOTS":{
        fr: 'expots',
        en: 'expots'
    },
    "ICI":{
        fr: 'inscribed-capitals-index',
        en: 'inscribed-capitals-index'
    },
    "REFRAME":{
        fr: 'reframe',
        en: 'reframe'
    },
    "TAGS":{
        fr: 'tags',
        en: 'tags'
    },
    "LAB": {
        fr: 'lab',
        en: 'lab'
    },
    "BLOG":{
        fr: 'blog',
        en: 'blog'
    },
    "EVENT":{
        fr: 'event',
        en: 'event'
    },
    "PARTENARIAT":{
        fr: 'partenariat',
        en: 'partenariat'
    }
}

export const mapSlugToGeneric = Object.keys(mapGenericToSlug).reduce((acc, k) => {
    Object.keys(mapGenericToSlug[k]).forEach(l => {
        acc[mapGenericToSlug[k][l]] = k
    })
    return acc
}, {})
