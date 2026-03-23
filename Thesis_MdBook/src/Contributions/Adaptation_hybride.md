# Adaptation Hybride : Le cycle Polyédrique / Tétraédrique

### Pourquoi le polyédrique ?
Tucanos travaille nativement sur des maillages full tétraèdres. Cependant, pour la résolution en **Volumes Finis (VF)** *cell-centered* dans CODA, les maillages polyédriques sont préférés pour :
* Une meilleure convergence de la solution sur des maillages grossiers.
* Un calcul de gradient plus robuste (via Green-Gauss ou Moindres Carrés).

### Algorithme de la boucle d'adaptation
Le cycle mis en place pour pallier les limitations des tétras est le suivant :
1. **Initialisation** : Départ d'un maillage tétraédrique coarse.
2. **Conversion** : Transformation en polyédrique via le logiciel ANSA (plus stable que la méthode duale interne actuelle).
3. **Simulation** : Calcul de la solution via CODA sur le maillage polyédrique.
4. **Interpolation (Rayon Pair)** : Pour remailler, il faut ramener la solution du Poly vers le Tétra. J'ai implémenté la méthode du "Rayon Pair" (*Point-in-Polyhedron*) pour déterminer l'appartenance d'un point à une cellule polyédrique.
5. **Remaillage** : Utilisation de Tucanos pour adapter les tétras selon la métrique issue de la solution.

### Robustesse et qualité des éléments
Le processus est fragile : les mailles remaillées par Tucanos ne fournissent pas toujours de bons éléments polyédriques après conversion. Un travail est en cours pour identifier des critères de qualité tétraédriques spécifiques garantissant la stabilité de la solution polyédrique après adaptation.