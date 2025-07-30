# Tools

### MdBook : Outil de Documentation et de Suivi de Thèse

Ce document lui-même est généré à l'aide de **MdBook**, un outil de publication de livres statiques basé sur Markdown. MdBook est un choix particulièrement pertinent pour ce projet de thèse pour plusieurs raisons. Sa syntaxe Markdown permet une rédaction claire et rapide, idéale pour la documentation technique et le suivi des avancées. Il offre un excellent support pour l'intégration d'**équations mathématiques via MathJax**, ainsi que pour l'**affichage de graphiques et d'extraits de code**, ce qui est essentiel pour une thèse en calcul scientifique. Développé en Rust, MdBook s'intègre naturellement à notre environnement de développement et permet un versionnement aisé du contenu via Git, assurant une traçabilité complète de nos travaux. Cet outil nous sert de carnet de bord dynamique, présentant l'intégralité des résultats et des réflexions tout au long de notre parcours doctoral.


### Mon Environnement de Calcul Haute Performance : HPC5 à Toulouse

[cite_start]Nos développements et expérimentations sont menés sur le cluster de calcul haute performance **HPC5**, l'environnement standard d'Airbus (depuis le Q1 2019) [cite: 1] pour les calculs d'ingénierie à très grande échelle. [cite_start]Conçu pour succéder à HPC4[cite: 1], HPC5 est une collection de grands clusters massivement parallèles, indispensable pour traiter des maillages de plusieurs centaines de millions d'éléments. [cite_start]Les besoins de calcul interactif sont quant à eux pris en charge via GISEH[cite: 1].

[cite_start]Notre travail se concentre spécifiquement sur le cluster **`tou_b`**, qui est la partie **développement et validation (DEV/VAL)** de HPC5 située à Toulouse[cite: 1].

[cite_start]Ce cluster `tou_b` est composé de nœuds de calcul basés sur l'architecture **Intel Skylake**[cite: 1]. Bien que notre environnement de travail interactif actuel (une machine virtuelle sous VMware) puisse présenter des configurations spécifiques (comme 8 cœurs CPU virtuels basés sur un Intel(R) Xeon(R) Gold 6248R CPU @ 3.00GHz), les nœuds physiques du cluster `tou_b` sont configurés comme suit :

* [cite_start]**Nœuds de calcul (Compute nodes - Type 5)** : Chaque nœud contient 2 processeurs **HPE BL460c Xeon-G 6142 Intel 16 Cores 2.6 GhZ** [cite: 1][cite_start], offrant un total de **32 cœurs physiques** (16 cœurs par processeur)[cite: 1]. [cite_start]Ces nœuds sont équipés de **96 Go de RAM** (soit 3 Go par cœur) avec une vitesse de 2666 MHz[cite: 1]. [cite_start]Le cluster `tou_b` dispose de 96 de ces nœuds (de `touh1n0001` à `touh1n0096`)[cite: 1].
* [cite_start]**Nœuds de calcul (Compute nodes - Type 6)** : Également de type `HPE BL460c Xeon-G 6142 Intel 16 Cores 2.6 GhZ` [cite: 1][cite_start], ces nœuds offrent aussi **32 cœurs physiques**[cite: 1]. [cite_start]Leur principale distinction est leur mémoire : **384 Go de RAM** (soit 12 Go par cœur) à 2666 MHz[cite: 1]. [cite_start]Le cluster `tou_b` compte 16 de ces nœuds (de `touh2n0001` à `touh2n0016`)[cite: 1].

[cite_start]Nos fichiers d'application sont accessibles via `/share/hpc5_devel`[cite: 1]. [cite_start]Pour la gestion des données massives, le site de Toulouse de HPC5 utilise un système de fichiers **Lustre** de 1874 TiB avec une bande passante agrégée de 38GB/s [cite: 1][cite_start], et un système **Panasas** de 525 TB (Raw Data 763 TB) avec une bande passante agrégée de 12.6 to 14.4 GB/s[cite: 1].

[cite_start]La soumission et l'orchestration des tâches de calcul sont gérées par le *scheduler* **IBM LSF (Version 10.1)**[cite: 1]. [cite_start]Les développeurs peuvent cibler spécifiquement le cluster `tou_b` en utilisant l'option `-clusters tou_b` dans la commande `bsub` [cite: 1][cite_start], et demander des types de nœuds (type5 ou type6) en fonction des besoins en mémoire par cœur[cite: 1]. [cite_start]Les bibliothèques MPI disponibles incluent IBM Spectrum MPI (Version 10.1.1.0) et diverses versions d'Open MPI[cite: 1].

Cet environnement de calcul haute performance nous permet de tester la scalabilité de nos algorithmes d'adaptation de maillage et de valider leur efficacité sur des configurations complexes, représentatives des défis industriels d'Airbus.



