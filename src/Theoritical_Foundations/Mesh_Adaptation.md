# Adaptation de Maillage

En réalité deux approches différentes sont utilisées pour modifier la topologie du maillage à travers une simulation. On peut soit choisir de reconstruire un maillage de zéro, on parle alors de remaillage , soit d'appliquer des modifications localement dans le but d'atteindre un maillage cible, on parle alors d'adaptation. Dans les deux approches, le nouveau maillage est construit d'après une __métrique__ issue de l'analyse d'erreur.

En comparaison au remaillage, l'adaptation semble avoir un coût computationnel faible. En effet, la charge de calcul est proportionnelle au nombre d'éléments modifiés, là ou le remaillage a un coût proportionnel au nombre d'éléments du maillage.

Par ailleurs, le remaillage rend complexe le transfert des valeurs de champ de l'ancien maillage vers le nouveau. Cette procédure nécessite des algorithmes de recherche spatiale et a tendance à s'appuyer sur des opérateurs de remappage qui sont diffusifs et/ou soumis à des exigences de conservation globale.

L'adaptation quant à elle permet une exécution locale du transfert de solution. Le raffinement divise les entités parentes et est capable de transférer la solution de manière exacte en utilisant l'interpolation par fonctions de forme. De plus, les autres opérations sont confinées à une cavité locale, ce qui rend toute recherche rapid et les effets diffusifs ainsi que les ajustements de conservation sont localisés. 

Nous nous concentrerons sur le processus d'adaptation de maillage puisqu'il semble que ce dernier possède plus d'avantages que le remaillage total.

On rapelle donc que l'objectif ultime de l'adaptation de maillage (que ce soit par remaillage ou par des opérations d'adaptation locale) est de garantir que le maillage, après modification, se conforme aussi étroitement que possible au champ de métrique cible dérivé de l'analyse d'erreur. 

Soit \\(\mathcal{M}(x)_{x \in \Omega }\\) un espace métrique riemannien. L'objectif est de générer un maillage  \\(\mathcal{H} \\)  pour lequel chaque longueur d'arête est unitaire dans la métrique associée et chaque élément est régulier :

 \\[   \forall \textbf{e} \in \mathcal{H} , \ \mathcal{L}_ \mathcal{M}(\textbf{e})= 1  \text{      and       } \forall K \in \mathcal{H}, |K|_{\mathcal{M}} = \frac{\sqrt{2}}{12} \\]

Comme les éléments réguliers ne peuvent pas remplir entièrement le domaine \\( \Omega \\), l'adaptation de maillage ne peut créer que des maillages quasi-uniformes, c'est-à-dire des éléments de maillage qui sont presque unitaires dans l'espace riemannien. Pour quantifier l'écart à l'unité, différents outils peuvent être utilisés, dont  par exemple, une fonction de qualité d'élément : 

\\[ Q_\mathcal{M} = ... \\] 

On a vu que la taille de la boule unité associée à la métrique \\(\mathcal{M}\\) dans la direction de son \\(i^{\textbf{ème}}\\) vecteur propre est donnée par \\( h_i = \lambda_i^{-1\setminus2} \\). Ainsi on peut déduire que la taille voulue dans la direction \\(\textbf{e}\\) est : 

\\[h_{\mathcal{M}}(\textbf{e}) = \frac{||e||^2}{l_{\mathcal{M}(\textbf{e})}}\\]


Après adaptation du maillage l'idée est donc d'obtenir des arêtes qui sont de taille unitaire pour leur champ de métrique associé, tout en garantissant la meilleure qualité possible des éléments. Pour cela , plusieurs opérations d'adaptation sont utilisées en vérifiant après chaque modification la validité topologique de l'adaptation. Voici les différentes opérations utilisées : 

### Definition : Cavité 

Etant donné une entité de maillage \\( e \\) (un sommet ou une arête dans le cas présent), la cavité \\( \mathcal{C}(e) \\) est l'ensemble des éléments de maillage qui contiennent l'entité \\( e \\).

Une cavité \\( \mathcal{C}(e) \\) peut être remplie à partir d'un sommet \\( \mathbf v \\) comme l'ensemble des éléments créés à partir de \\( \mathbf v \\) et des faces de la frontière de la cavité \\( \partial \mathcal{C}(e) \\) (orientées vers l'extérieur).

\\[ \mathcal F(\mathbf v,C(e))= { K=(\mathbf v, \mathbf g_1, \cdots, \mathbf g_d) | g = (\mathbf g_1, \cdots, \mathbf g_d) \in \partial C(e), \mathbf v \notin g} \\]

### Definition : Swap

<figure style="text-align: center;">
  <img src="../images/swap.svg" alt="Tenseur métrique anisotrope" width="70%">
</figure>

The __swap__ operation aims at improving the quality of the elements. 

It can however introduce
- "long" or "short" edges
- a poor representation of the geometry that will be difficult to recovered later
- inconsistent tagging

These 3 criteria have to be assessed to determine if a __swap__ operation is accepted or not

### Definition : Split



<figure style="text-align: center;">
  <img src="../images/split.svg" alt="Tenseur métrique anisotrope" width="70%">
</figure>

The __split__ operations aims at splitting "long" edges. It is applied to edges whose length
(in metric space) is larger than \\(l_0 > \sqrt{2}\\). 

It can however introduce
- "short" edges
- element of low quality (including invalid elements)

These 2 criteria have to be assessed to determine if a __split__ operation is accepted or not


When introducing new vertices on boundaries, a projection step is required to ensure the consistency with the CAD model. 

### Definition : Collapse

<figure style="text-align: center;">
  <img src="../images/collapse.svg" alt="Tenseur métrique anisotrope" width="70%">
</figure>


The __collapse__ operation aims at removing "small" edges. It is applied to edges whose length (in metric space) is smaller than \\( l_0 < 1/\sqrt{2} \\). 

It can however introduce
- "long" edges
- element of low quality (including invalid elements)
- a poor representation of the geometry that will be difficult to recovered later

These 3 criteria have to be assessed to determine if a __collapse__ operation is accepted or not

### Definition : Smooth

The smoothing operation aims at improving the quality of the elements by moving vertices to some average of the locations of its neighbors.

In order to have a consistent smoothing on the boundaries of the computational domain, only the neighbors tagged on the same topological entity or one of its children are considered for smoothing. A projection step is still required for boundary vertices to ensure the consistency with the CAD model.


