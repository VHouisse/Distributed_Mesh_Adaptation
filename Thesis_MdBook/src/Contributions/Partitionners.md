# Partitionners

Comme nous l'avons vu, la quantité de données induites par la résolution des équations de la CFD ainsi que la recherche de calcul de haute performance nous pousse à utiliser plusieurs unité de calcul. Pour cela il est impératif de partitionner le maillage sous-jacent au domaine de travail. Partitionner permet de diviser le domaine en autant de sous-domaines qu'il y a de coeurs disponibles, décomposant le problème initial en N sous-problèmes.

Un bon partitionnement repose sur trois critères essentiels : 

Reduction des interdépendances : Minimiser les arêtes ou faces partagées entre les sous-domaines afin de limiter les communications coûteuses entre les unités de calcul.

Preservation de la qualité : Assurer que la division ne dégrade pas la qualité des sous-maillages individuels

Equilibrage de charge : Distribuer équitablement la charge de travail computationnel entre tous les processeurs afin d'eviter les goulots d'étranglement et maximiser la performance parallèle (CF Load balancing)



### Partitionnement pour le Remaillage : Le Défi des Interfaces
Dans le cadre du remaillage, la gestion des interfaces entre les partitions est un défi majeur, car ces frontières doivent être adaptées sans compromettre la continuité du maillage global ni l'efficacité parallèle. Deux approches principales peuvent être distinguées pour adresser ce problème 


#### Two-Step process :
Cette méthode débute par un premier partitionnement du maillage. Les interfaces de ces partitions initiales sont alors "gelées", permettant à chaque processeur de remailler son sous-domaine interne de manière indépendante. Une fois cette première phase d'adaptation locale achevée, un second partitionnement est effectué sur l'ensemble du domaine, mais de manière à ce que les interfaces du premier partitionnement (celles qui étaient gelées) ne partagent aucun élément en commun avec les nouvelles interfaces du deuxième partitionnement. Cette stratégie garantit que la totalité du domaine, y compris les zones d'interface initialement gelées, soit effectivement remaillée, assurant ainsi une adaptation complète.


<center>
<img src="../images/Two_Step_Process.png" alt="Logo Tucanos" width="100%">
</center>

<br>

#### Hierarchical Interface Freezing Method :
Cette seconde approche est également basée sur le gel des interfaces, mais de manière itérative et hiérarchique. Le domaine est initialement partitionné et les interfaces sont gelées, permettant le remaillage indépendant de chaque sous-domaine. Une fois cette étape terminée, l'attention se porte sur les interfaces elles-mêmes : elles sont à leur tour partitionnées (en "gelant" les sous-interfaces nouvellement créées), puis remaillées. Ce processus de subdivision et de remaillage des interfaces peut être répété de manière récursive (gel des interfaces des interfaces, et ainsi de suite) jusqu'à atteindre un niveau de précision et de conformité satisfaisant sur l'ensemble des frontières.


<center>
<img src="../images/Freezing_Interface.png" alt="Logo Tucanos" width="80%">
</center>


Au-delà des stratégies de gestio ndes interfaces pour le remaillage parallèle, la problématique fondamentale de la dibision initiale d'un maillage en sous-domaines demeure. Cette tâche est assurée par les algorithmes de partitionnement dont les objectifs ont été discutés plus tôt. Nous allons introduire ici une séléction des partitionneurs utilisés au sein de Tucanos, ainsi que ceux implémentés dans le cadre des travaux de thèse. On effectuera une analyse comparative de leurs performances sur un cas test : 


#### 1. Hilbert Ball Partitionner
#### 2. BFS & BFS With Restart (BFSWR) 
#### 3. Metis Partitionner 

