# Mesh Adaptation

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


Pour atteindre le maillage conformément à la métrique donnée plusieurs opérations de remaillage sont utilisées. 

### Definition : Cavité 
Définition de la cavité
### Definition : Swap
Swap 
### Definition : Split
Split 
### Definition : Collapse
Collapse
### Definition : Smooth
Smooth 

