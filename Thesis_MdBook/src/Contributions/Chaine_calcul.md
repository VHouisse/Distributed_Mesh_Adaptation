# La Chaîne de Calcul : Écosystème et Interopérabilité
<!-- 
### Architecture logicielle et outils
La mise en œuvre de l'adaptation nécessite une orchestration entre plusieurs outils complexes :
* **CODA** : Solveur CFD massivement parallèle gérant des calculs de très grande envergure.
* **FSDM** : Gestionnaire de structures de données (Fluid Structure Data Manager) qui propose l'interface avec le solveur via une API Python/C.
* **Tucanos** : Bibliothèque de remaillage anisotrope 2D/3D écrite en Rust.
* **FSCGNS** : Module d'E/S crucial pour lequel des contributions significatives ont été apportées afin d'assurer la compatibilité des formats de fichiers industriels (ANSA/CODA). -->

### Le défi de la convergence initiale
L'adaptation est un processus dont la qualité dépend de la solution calculée sur le maillage précédent. 
* **Sensibilité de l'indicateur** : Si la solution sur le maillage initial (souvent grossier) n'est pas convergée, l'indicateur d'erreur est de mauvaise qualité.
* **Conséquence directe** : Un indicateur bruité ne permet pas d'adapter le maillage correctement pour capturer la physique de l'écoulement (chocs, couches limites).