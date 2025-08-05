# Organisation des travaux de recherche
* __[M1-M6]__ Immersion dans le logiciel CODA et son environnement, incluant l'environnement de développement, les outils de pré/post-traitement et l'environnement HPC  Td'Airbus. L'objectif est d'apprendre et de se former sur le logiciel CODA et de mettre en place le calcul de cas tests pertinents.

* __[M1-M6]__  Réalisation d'une revue de littérature sur les métriques de maillage existantes pour les applications aéronautiques, la résolution près des parois, les écoulements turbulents, les écoulements transsoniques avec chocs, et les méthodes basées sur l'objectif utilisant la sensibilité adjointe.

* __[M4-M17]__  L'implémentation du support de la métrique anisotrope sera réalisée dans kalpaTARU. Cela inclura l'extension du support existant de la métrique scalaire aux champs de métriques tensoriels, l'adaptation de l'interpolation de métrique distribuée existante aux champs tensoriels, et l'implémentation de critères de seuillage pour les champs tensoriels. Les tests seront effectués en utilisant l'infrastructure d'adaptation de maillage autonome existante.

* __[M7-M11]__ Apprentissage et formation sur l'utilisation et le développement de Tucanos afin de réaliser les développements nécessaires pour supporter l'adaptation de maillage distribuée. Cela implique le gel de l'adaptation des faces des processeurs, l'information de tag pour la gestion des indices globaux-locaux, et l'API C/Rust pour la nouvelle fonctionnalité créée.

* __[M11-M17]__ En Phase 1, Tucanos-kalpaTARU sera couplé via une interface en ligne de commande (CLI). Le principal travail de développement consistera à implémenter un plugin d'E/S pour les maillages CODA basé sur le plugin de maillage AVBP existant. La validation sera effectuée (adaptation de maillage statique) sur des maillages CODA simples avec des champs de métriques prescrits dans des fichiers HDF5.

* __[M17-M24]__ En Phase 2, nous réaliserons le couplage de la structure de données FSDM en utilisant l'interface C-API de Tucanos-kalpaTARU. Les tests et la validation seront effectués sur des cas tests avec diverses métriques prescrites implémentées dans CODA.

* __[M24-M30]__  Les tests et la validation seront réalisés sur un cas test de production, à savoir la configuration de train d'atterrissage LAGOON et les configurations de Drag Prediction Workshop (DPW).

* __[M30-M36]__  Réalisation des tâches de rédaction de thèse et communication des publications pour satisfaire aux exigences du doctorat.


<br><br><br>
<div style="display: flex; justify-content: space-between; align-items: flex-start;">
    <img src="../images/Airbus.png" alt="Image à gauche" style="width: 30%;">
    <img src="../images//CERFACS.png" alt="Image à droite" style="width: 30%;">
</div>
