# Étude de Cas : Aile ONERA M6

### Adaptation à haute complexité
L'adaptation fonctionne de manière satisfaisante lorsqu'un grand nombre de degrés de liberté est autorisé. Sur l'aile M6, un maillage très bien adapté capturant le choc transsonique a été obtenu avec :
* **Complexité** : Environ 6 000 000 d'éléments.
* **Itérations** : 20 cycles d'adaptation.

### Le défi de la basse complexité
L'enjeu actuel est d'obtenir une capture physique similaire avec une complexité proche du maillage initial (~600 000 éléments). 
* **Observation** : Le couplage actuel échoue à capter la courbure de la Hessienne du Mach sur maillage grossier.
* **Analyse** : L'indicateur d'erreur, initialement pensé pour le DG (Discontinuous Galerkin), semble moins performant pour le Volume Fini sur des maillages très *coarse* où le gradient est mal résolu.

### Perspectives : Gradients d'ordre supérieur
Pour améliorer la précision de l'indicateur sans augmenter massivement le nombre d'éléments, l'objectif est de travailler sur des méthodes de calcul de gradients d'ordre plus élevé. Cela permettrait d'obtenir un indicateur d'erreur plus précis capable de guider l'adaptation même sur des résolutions spatiales limitées.