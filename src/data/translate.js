
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

