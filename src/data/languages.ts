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


// remove diacritics : 
// see https://codepen.io/marcelo-ribeiro/pen/PomqOvE

const accentsMap = new Map([
  ["-", "\\s|_"],
  ["a", "á|à|ã|â|ä"],
  ["e", "é|è|ê|ë"],
  ["i", "í|ì|î|ï"],
  ["o", "ó|ò|ô|õ|ö"],
  ["u", "ú|ù|û|ü"],
  ["c", "ç"],
  ["n", "ñ"],
  ["", "\'"] //retire l'apostrophe, ex: histoire de l'art
]); 
 
const reducer = (acc, [key]) =>
  acc.replace(new RegExp(accentsMap.get(key), "gi"), key);

//type issue to check
export const slugify = (text) =>
  [...accentsMap].reduce(reducer, text.toLowerCase());


/*Inspired by: https://github.com/DefinedNet/nebula-docs/blob/main/src/languages.ts*/
export const mapGenericToText = {
    "MENU_SERVICES":{
        fr: "Services",
        en: "Services"
    },
    "MENU_PROJETS":{
        fr: "Projets",
        en: "Projects"
    },    
    "MENU_BLOG":{
        fr: "Actualités",
        en: "News"
    },
    "LIRE_SUITE":{
        fr: "Continuer la lecture",
        en: "Read more"
    },
    "TAGLINE":{
        fr: "Un espace ouvert et inclusif",
        en: "An inclusive and open-source space"
    },
    "SITE_WEB":{
        fr: "site web",
        en: "website"
    },
    "PUBLIE_LE":{
        fr: "publié le",
        en: "published on"
    },
    "PAR":{
        fr: "par",
        en: "by"
    }    
}    

//slugs
//TODO: trouver un moyen de parser _blog et _projets pour récupérer les slugs et les tags
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
    "ARTICLE_1":{
        fr: 'annonce-partenariat-creation-ouvroir',
        en: 'announcement-partnership-creation-ouvroir'
    },
    "ARTICLE_2":{
        fr: 'atelier-1',
        en: 'workshop-1'
    },
    "ARTICLE_3":{
        fr: 'nettoyage-transformation-tableau-word-en-donnees',
        en: 'cleaning-and-transforming-word-table-into-data'
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
    },
    "JAVASCRIPT":{
        fr: 'javascript',
        en: 'javascript'
    },
    "CIECO":{
        fr: 'cieco',
        en: 'cieco'
    },
    "DOCUMENTATION":{
        fr: 'documentation',
        en: 'documentation'
    },
    "PARTAGE":{
        fr: 'partage',
        en: 'sharing'
    },
    "WEB":{
        fr: 'web',
        en: 'web'
    },
    "MODELISATION3D":{
        fr: 'modelisation-3d',
        en: '3d-modeling'
    },
    "EDITION_NUMERIQUE":{
        fr: 'edition-numerique',
        en: 'digital-edition'
    },
    "VISUALISATION3D":{
        fr: 'visualisation-3d',
        en: '3d-visualisation'
    },
    "FCI":{
        fr:'fci',
        en:'fci'
    },
    "CR":{
        fr:'cr',
        en:'cr'
    },
    "ATELIER":{
        fr:"atelier",
        en:"workshop"
    },
    "HIST_ART_NUMERIQUE":{
        fr:"histoire-de-l'art-numerique",
        en:"digital-art-history"
    },
    "INTERNATIONAL":{
        fr:'international',
        en:'internationl'
    },
    "SERVEUR":{
        fr:'serveur',
        en:'serveur'
    },
    "NETTOYAGE_DONNEES":{
        fr:"nettoyage-donnees",
        en:"data-cleaning"
    },
    "FORMATS":{
        fr:"formats",
        en:"formats"
    },
    "LENA":{
        fr: 'lenamk',   
        en: 'lenamk'
    },
    "EMMANUEL":{
        fr: 'emchateau',
        en: 'emchateau'
    },
    "KRISTINE":{
        fr: 'ktanton',
        en: 'ktanton'
    },
    "WILLIAM":{
        fr: 'williamdiakite',
        en: 'williamdiakite'
    }
}

export const mapSlugToGeneric = Object.keys(mapGenericToSlug).reduce((acc, k) => {
    Object.keys(mapGenericToSlug[k]).forEach(l => {
        acc[mapGenericToSlug[k][l]] = k
    })
    return acc
}, {})


export function formatDate (date, lang){
    var bonneDate;
    //enlève l'heure et time zone
    date = date.replace('T00:00:00.000Z', '')

    var annee = date.split("-")[0]
    var mois = date.split("-")[1]
    var jour = date.split("-")[2]
    var moisTxt;

    //enlève le 0 devant les jours de 1 à 9
    if (jour.charAt(0) == "0")
    jour = jour.slice(1)

    if (mois.charAt(0) == "0")
    mois = mois.slice(1)

    if (lang == "en"){
        switch (parseInt(mois)){
            case 1: 
                moisTxt = "January";
                break;
            case 2: 
                moisTxt = "February";
                break;
            case 3: moisTxt = "March";
                break;
            case 4: 
                moisTxt = "April";
                break;
            case 5: 
                moisTxt = "May";
                break;
            case 6: 
                moisTxt = "June";
                break;
            case 7: 
                moisTxt = "July";
                break;
            case 8: 
                moisTxt = "August";
                break;
            case 9: 
                moisTxt = "September";
                break;
            case 10: 
                moisTxt = "October";
                break;
            case 11: 
                moisTxt = "November";
                break;
            case 12: 
                moisTxt = "December";
                break;   
            default: console.log(mois, 'error')         
        }

        switch (parseInt(jour.slice(-1))){
            case 1: 
                bonneDate = moisTxt.concat(` ${jour}st, ${annee}`);
                break;   
            case 2: 
                bonneDate = moisTxt.concat(` ${jour}nd, ${annee}`);
                break;   
            case 3: 
                bonneDate = moisTxt.concat(` ${jour}rd, ${annee}`);
                break;
            default: 
                bonneDate = moisTxt.concat(` ${jour}th, ${annee}`);
        }
    }
    else if (lang == "fr"){
        switch (parseInt(mois)){
            case 1: 
                moisTxt = "janvier";
                break;
            case 2: 
                moisTxt = "février";
                break;
            case 3: 
                moisTxt = "mars";
                break;
            case 4: 
                moisTxt = "avril";
                break;
            case 5: 
                moisTxt = "mai";
                break;
            case 6: 
                moisTxt = "juin";
                break;
            case 7: 
                moisTxt = "juillet";
                break;
            case 8: 
                moisTxt = "août";
                break;
            case 9: 
                moisTxt = "septembre";
                break;
            case 10: 
                moisTxt = "octobre";
                break;
            case 11: 
                moisTxt = "novembre";
                break;
            case 12: 
                moisTxt = "décembre";
                break;            
            default: console.log(mois, 'error')
        }
        switch (parseInt(jour)){
            case 1: 
                bonneDate = jour.concat(`er ${moisTxt} ${annee}`);
                break;
            default: bonneDate = jour.concat(` ${moisTxt} ${annee}`);
        }
    }
    return bonneDate;
}