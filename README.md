Site web du lab ouvroir

## Meta

- [feuille de route](https://github.com/ouvroir/site-lab/milestones?direction=asc&sort=due_date&state=open)
- [arborescence - navigation](https://github.com/ouvroir/labouvroir/blob/main/web/arborescence.md) (navigation du contenu)

## Cloner le projet

Ce projet contient des sous-modules git

Cloner le répertoire :
```bash
git clone --recursive https://github.com/ouvroir/ouvroir.github.io.git
```

Mettre à jour le répertoire et ses sous-modules [à revoir]
```bash
git pull --recurse-submodules
```

Mettre à jour les sous-modules [à revoir]
```bash
git submodule update --remote --merge
```

Ajout d’un sous-module :

```bash
git submodule add https://github.com/path/submodule.git src/_name
git submodule update --init --recursive
```

## Déployer en local

Ce site utilise le générateur de site statique [Astro](http://astro.build)

Installer les dépendances# :
```js
	npm install
```

Déployer pour le développement :
```bash
	npm run dev
```

Construire le site

Ce répertoire contient des instructions pour l’intégration continue avec GitHub dans `.github/main.yml`

Pour déployer localement :
```bash
	npm run build
```


## Structure du code

version billingue 1.0

```
├─ public
	├─ style
		└─ global.css 
	├─ ouvroir.png
	└─ favicon.ico 
├─ src
    ├─ _blog 						/*billets de blogue en .md, attention au yaml nécessaire*/
    	├─ article-en.md 
		└─ article-fr.md
    ├─ _labouvroir (sous-module)
    ├─ _projets    					/*présentation de projets en .md, attention au yaml nécessaire*
    	├─ projet-en.md 
		└─ projet-fr.md
	├─ components
		├─ BlogPost.astro
		├─ BlogPostPreview.astro
		├─ Footer
		├─ Header.astro
		├─ MetaData.astro 
		├─ Project.astro
		├─ ProjectCardPreview.astro
		└─ ProjectPreview.astro
	├─ data
		├─ languages.ts
		└─ locales.json
	├─ layouts	
		├─ BaseLayout.astro 
		├─ BlogLayout.astro
		└─ ProjectLayout.astro
	└─ pages
		├─ en
            ├─ news
                ├─ tags
                	└─ [slug].astro			/* pages générées à partir des tags des news*/
                └─ [slug].astro 			/* pages générées à partir des _blog/*-en.md*/
            ├─ projects
                └─ [slug].astro 			/* pages générées à partir des _projets/*-en.md*/
			├─ index.astro
            ├─ info.astro
            ├─ news.astro 
            ├─ projects.astro 
            └─ info.astro 
		├─ fr
			├─ actualités
				├─ tags
					└─ [slug].astro			/* pages générées à partir des tags des actualités*/
				└─ [slug].astro 			/* pages générées à partir des _blog/*-fr.md*/
            ├─ projets
                └─ [slug].astro 			/* pages générées à partir des _projets/*-fr.md*/
            ├─ actualites.astro 
            ├─ index.astro
            ├─ info.astro
            ├─ projets.astro 
            └─ services.astro 
		└─ index.astro 
├─ .gitmodules
├─ arborescence.md
├─ .gitignore
	└─ node_modules
├─ package-lock.json
	└─ pour astro
├─ package.json
	└─ pour le site
	"name: astro"
	"author": "Ouvroir",
  	"license": "GNU GPL",
      "dependencies": {
        "astro": "^0.21.0"
      }
└─ README.md
```

## Pages
pages de la nav: 
- index
- services
- projets
- actualites
- info

pages de blog en .md
pages de projets en .md

## Layouts

### BaseLayout

layout pour les pages principales du site (celles accessibles directement depuis la nav)

requiert: 

```typescript
const {title, description, permalink, slug}
```

### BlogLayout

layout pour pages/blog/*.md 

requiert: 

```typescript
const {title, description, author, publishDate, tags, permalink, slug} 
```

<!-- ajouter lang-->

**Project yaml front matter**:

```yaml
title: 
date: (yyyy-[mm]-[dd])
description:
lang: (en / fr)
slug: 
permalink:
tags: 
    - tag 1
    - tag 2
category:
status: 
```


### ProjectLayout
layout pour pages/projets/*.md 

requiert: 

```typescript
const {title, description, since, tags, permalink, link, slug, lang}
```



**Project yaml front matter**:

```yaml
title: 
since: (yyyy-[mm]-[dd])
description:
lang: (en / fr)
slug: 
permalink:
tags: 
    - tag 1
    - tag 2
link: 
category:
status: 
```

**Content**
bien mettre de l'avant les auteur·rice·s car il n'est pas encoredans les métadonnées



## Components

### HeadMeta

Contient les métadonnées générales pour la page (charset, favicon, title, description), OpenGraph et Twitter.

Quand on importe HeaderMeta, il faut toujours renseigner title, description et permalink pour les passer dans BaseHead

```jsx
<BaseHead title={title} description={description} permalink={permalink} />
```

Pour l'instant, les préfixes (namespaces pour [OpenGraph](https://ogp.me/)) sont dans la balise html. Peut aussi être une balise <head> dans HeadMeta pour ne pas répéter


### Header

base: contient la navbar


```jsx
<header>
    Logo
    SkipToContent
    MenuToggle
    //LanguageSelect
    //Search
</header>
```

### Footer
- make sure links are up to date


### BlogPost

Publication de blogue, utilisée dans layout BlogLayout