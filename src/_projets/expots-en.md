---
title: 'Expots'
slug: expots
lang: en
description: "Outil pour la documentation des accrochages de collection et de visualisation 3D"
layout: '/src/layouts/ProjectLayout.astro'
tags: 
    - ciéco
    - documentation
    - modèle de données
    - visualisation 3D
since: 2021-11
link: https://github.com/ouvroir/expots
---

## Tool for documentation des accrochages de collection et de visualisation 3D

La recherche historique portée par le premier axe du partenariat CIÉCO implique la mobilisation et l’exploitation de nombreuses sources archivistiques afin de documenter l’histoire des accrochages de collections dans les musées d’art et pouvoir procéder à leur reconstitution. Un outil permet d’accompagner l’ensemble des opérations de recherche, depuis la collecte de l’information historique, à la formulation des hypothèses et à l’enregistrement des résultats.

La solution logicielle que nous développons s’appuie sur la création d’un modèle documentaire indépendant de toute technologie de visualisation a priori, afin de garantir la pérennité et la conservation à long terme des données enregistrées et de ménager des réutilisations possibles dans différents contextes numériques. Ce modèle consiste en la production d’une ontologie informatique destinée à décrire de manière explicite et formelle les traits d’un accrochage ou d’une exposition (identification de l’exposition, proximité et contiguïté des œuvres, vis-à-vis, etc.).

Cette ontologie permet de faciliter l’enregistrement de l’information historique concernant les accrochages et propose des solutions pour rendre compte de l’incertitude et des lacunes documentaires. Elle sera compatible avec l’ontologie CIDOC-CRM, un modèle conceptuel de référence promu par l’organisation internationale des musées dont elle formera une extension pour couvrir le domaine spécifique des accrochages et des expositions. Le modèle qui aura été mis au point sera publié pour être soumis à commentaires (Request for Comments) au sein de la communauté de la documentation muséale (LinkedArt, CIDOC, RCIP).

Les fonctionnalités offertes par le modèle de données et l’application reposent sur une approche spatiale et le recours à la modélisation 3D pour faciliter la reconstitution des accrochages de collections. Le système exploite la numérisation des données pour proposer des reconstitutions calculées basées sur l’analyse des contraintes spatiales des lieux d’exposition et des informations sur les œuvres exposées (dimensions, poids, éclairage).

Cet outil réalisé par un prestataire de service externe propose une interface graphique ergonomique afin de travailler à partir du modèle documentaire exprimé sous la forme d’une ontologie OWL pour l’enregistrement de l’information historique sur les accrochages défini par le responsable du développement de l’infrastructure numérique à partir du travail des chercheurs. De prise en main aisée, il peut être utilisé par des historiens de l’art sans compétences techniques particulières. Il facilite notamment :

- la création ou l’importation automatisée de listes d’œuvres
- l’enregistrement ou la définition de la géométrie d’un espace expographique
- la localisation des œuvres dans cet espace

Grâce au modèle documentaire mobilisé, cette information peut être qualifiée par niveau de preuve et sourcée, mais aussi partagée sous forme de données ouvertes et liées. L’outil permet de générer des visualisations tridimensionnelles à partir des informations spatiales enregistrées. Plusieurs moteurs de rendu sont implémentés pour produire des hypothèses de restitution sous la forme de table lumineuse ou d’espaces parcourables en 3D dans un navigateur web. Les développements logiciels sont libres et ouverts. Les données de l’application doivent pouvoir être sérialisées en JSON-LD, en respectant le modèle de données exprimé en OWL à des fins d’interopérabilité. Les développements permettent de générer des visualisations 3D à la volée basées sur le standard WebGL.

Pour parvenir à la conception de cet outil de recherche, on prévoit deux étapes de conception (réalisation d’un pilote en année 2, suivie d’une mise en pratique et d’une évaluation puis une deuxième itération en année 3) qui seront prolongées par une étape de dissémination associée à des recherche de financement subséquents en fonction de l’intérêt des partenaires muséaux.

---

Pour en savoir plus: [repo Github](https://github.com/ouvroir/expots)
