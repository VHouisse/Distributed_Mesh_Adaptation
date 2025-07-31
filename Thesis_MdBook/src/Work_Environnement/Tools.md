# Tools

### L'environnement HPC

Mes travaux de thèse sont ancrés au sein d'un cluster de calcul haute performantce (HPC). Cet environnement possède une architecture robuste conçue pour répondre aux exigences des calculs massifs liés aux activités d'ingénierie AIRBUS. L'environnement est composé de noeuds de calcul optimisé en terme de puissance et de mémoire.
La machine utilisée est composée de deux types de noeuds calcul : 

<br>

| Caractéristiques \ Types | Type 1  | Type 2    |
|---------|---------|---------|
| Processeurs    | 2 Xeon-G 6142    |  2 Xeon-G 6142       |
| Coeurs physiques par processeurs| 16 (HT) |16 (HT)|
|Base Clock Speed | 1.6 Ghz | 1.6 Ghz|
|Memory Speed |2666 Mhz|2666 Mhz|
|RAM| 96GB| 384 GB |
|Stockage local | 1 TB HDD | 3.8 TB SSD|

<br>

La machine comprend 110 noeuds de Type 1 et 16 de Type2.

L'ensemble du cluster est géré par LSF (Load Sharing Facility) qui alloue dynamiquement des ressources critiques en fonction des requêtes soumises.


### MdBook : Outil de Documentation et de Suivi de Thèse

Ce document lui-même est généré à l'aide de **MdBook**, un outil de publication de livres statiques basé sur Markdown.
MdBook offre plusieurs fonctionnalités clés qui sont particulièrement pertinentes pour la documentation d'une thèse en calcul scientifique :

* Sa syntaxe Markdown est légère et aide à se concentrer sur le contenu.

* Il inclut un support de recherche intégré.

* La coloration syntaxique pour les blocs de code est prise en charge pour de nombreux langages différents.

* Des fichiers de thème permettent de personnaliser le formatage de la sortie.

* Les préprocesseurs peuvent fournir des extensions pour une syntaxe personnalisée et modifier le contenu.

* Les backends peuvent rendre la sortie dans plusieurs formats.

* Écrit en Rust, MdBook est conçu pour la vitesse, la sécurité et la simplicité.

* Il permet également le test automatisé des exemples de code Rust qui sera très utile pour certaines fonctionnalités implémentées dans Tucanos.

**MdBook** : <https://rust-lang.github.io/mdBook/index.html>.