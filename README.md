Site web du lab ouvroir

## Meta

- [feuille de route](https://github.com/ouvroir/site-lab/milestones?direction=asc&sort=due_date&state=open)
- [arborescence - navigation](https://github.com/ouvroir/labouvroir/blob/main/web/arborescence.md) (navigation du contenu)

## Structure du code

première version en français uniquement

```
├─ public
	├─ style
		└─ global.css 
	├─ ouvroir.png
	└─ favicon.ico 
├─ src
	├─ components
		├─ HeadMeta.astro 
		└─ Header.astro
	├─ layouts
		├─ BaseLayout.astro 
		├─ BlogLayout.astro
		└─ ProjectLayout.astro
	└─ pages
		├─ index.astro
		├─ fonctionnement.astro
		├─ projets.astro 
		├─ actualites.astro 
		└─ info.astro 
├─ .gitignore
	└─ node_modules
├─ package-lock.json
	└─ pour astro
└─ package.json
	└─ pour le site
	"name: astro"
	"author": "Ouvroir",
  	"license": "GNU GPL",
      "dependencies": {
        "astro": "^0.21.0"
      }
```


### Components

#### HeadMeta

Contient les métadonnées générales pour la page (charset, favicon, title, description), OpenGraph et Twitter.

Quand on importe HeaderMeta, il faut toujours renseigner title, description et permalink pour les passer dans BaseHead

```jsx
<BaseHead title={title} description={description} permalink={permalink} />
```

Pour l'instant, les préfixes (namespaces pour [OpenGraph](https://ogp.me/)) sont dans la balise html. Peut aussi être une balise <head> dans HeadMeta pour ne pas répéter


#### Header

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

#### Footer
- make sure links are up to date


#### BlogPost

Publication de blogue, utilisée dans layout Actualite

### Layouts

#### BaseLayout

layout pour les pages principales du site (celles accessibles directement depuis la nav)

#### BlogLayout

layout pour pages/blog/*.md 
blogpost yaml front matter: 


#### ProjectLayout
layout pour pages/projets/*.md 

Project yaml front matter:
- title
- description
- layout: '../../layouts/ProjectLayout.astro'
- tags
- since
- url 

Content: 
bien mettre de l'avant les auteur·rice·s car il n'est pas dans les métadonnées



### Pages
pages de la nav: 
- index
- services
- projets
- actualites
- info

pages de blog en .md
pages de projets en .md

