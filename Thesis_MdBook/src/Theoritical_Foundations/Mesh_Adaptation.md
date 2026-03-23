# Adaptation de Maillage

<!-- En réalité deux approches différentes sont utilisées pour modifier la topologie du maillage à travers une simulation. On peut soit choisir de reconstruire un maillage de zéro, on parle alors de remaillage , soit d'appliquer des modifications localement dans le but d'atteindre un maillage cible, on parle alors d'adaptation. Dans les deux approches, le nouveau maillage est construit d'après une __métrique__ issue de l'analyse d'erreur.

En comparaison au remaillage, l'adaptation semble avoir un coût computationnel faible. En effet, la charge de calcul est proportionnelle au nombre d'éléments modifiés, là ou le remaillage a un coût proportionnel au nombre d'éléments du maillage.

Par ailleurs, le remaillage rend complexe le transfert des valeurs de champ de l'ancien maillage vers le nouveau. Cette procédure nécessite des algorithmes de recherche spatiale et a tendance à s'appuyer sur des opérateurs de remappage qui sont diffusifs et/ou soumis à des exigences de conservation globale.

L'adaptation quant à elle permet une exécution locale du transfert de solution. Le raffinement divise les entités parentes et est capable de transférer la solution de manière exacte en utilisant l'interpolation par fonctions de forme. De plus, les autres opérations sont confinées à une cavité locale, ce qui rend toute recherche rapid et les effets diffusifs ainsi que les ajustements de conservation sont localisés. 

Nous nous concentrerons sur le processus d'adaptation de maillage puisqu'il semble que ce dernier possède plus d'avantages que le remaillage total.

On rapelle donc que l'objectif ultime de l'adaptation de maillage (que ce soit par remaillage ou par des opérations d'adaptation locale) est de garantir que le maillage, après modification, se conforme aussi étroitement que possible au champ de métrique cible dérivé de l'analyse d'erreur.  -->
<!-- 
Soit \\(\mathcal{M}(x)_{x \in \Omega }\\) un espace métrique riemannien. L'objectif est de générer un maillage  \\(\mathcal{H} \\)  pour lequel chaque longueur d'arête est unitaire dans la métrique associée et chaque élément est régulier :


TODO: Formule maillage optimal 

 \\[   \forall \textbf{e} \in \mathcal{H} , \ \mathcal{L}_ \mathcal{M}(\textbf{e})= 1  \text{      and       } \forall K \in \mathcal{H}, |K|_{\mathcal{M}} = \frac{\sqrt{2}}{12} \\]

Comme les éléments réguliers ne peuvent pas remplir entièrement le domaine \\( \Omega \\), l'adaptation de maillage ne peut créer que des maillages quasi-uniformes, c'est-à-dire des éléments de maillage qui sont presque unitaires dans l'espace riemannien. Pour quantifier l'écart à l'unité, différents outils peuvent être utilisés, dont  par exemple, une fonction de qualité d'élément : 

\\[ Q_\mathcal{M} = ... \\] 

On a vu que la taille de la boule unité associée à la métrique \\(\mathcal{M}\\) dans la direction de son \\(i^{\textbf{ème}}\\) vecteur propre est donnée par \\( h_i = \lambda_i^{-1\setminus2} \\). Ainsi on peut déduire que la taille voulue dans la direction \\(\textbf{e}\\) est : 

\\[h_{\mathcal{M}}(\textbf{e}) = \frac{||e||^2}{l_{\mathcal{M}(\textbf{e})}}\\]


Après adaptation du maillage l'idée est donc d'obtenir des arêtes qui sont de taille unitaire pour leur champ de métrique associé, tout en garantissant la meilleure qualité possible des éléments. Pour cela , plusieurs opérations d'adaptation sont utilisées en vérifiant après chaque modification la validité topologique de l'adaptation. Voici les différentes opérations utilisées :  -->



Pour pouvoir générer des maillages anisotropiques qui s'adaptent à la physique de l'écoulement, il est nécessaire de pouvoir prescrire en tout point du domaine des tailles et des orientations pour les éléments. L'utilisation de l'espace Riemmannien défini plus tôt le permet. 

L'idée principale est donc de réussir à générer un maillage unité vis à vis de la métrique issue de l'indicateur erreur.
Un tétrahèdre K, défini par sa liste d'arêtes \\( \mathbf{(e_i)}_{i=1..6}\\) est dit unitaire vis à vis d'une métrique \\( \mathcal{M} \\) si la longueur de chacune de ses arêtes est unité dans cette métrique: 

\\[   \forall i= 1,...,6, \mathcal{l_{M}}(\mathbf{e_i})= 1 \text{ avec }  \mathcal{l_{M}}(\mathbf{e_i})=\sqrt{^t\mathbf{e_i}\mathcal{M}\mathbf{e_i}} \\]

Si toutes les arêtes de K sont de longueur unitaire, alors son volume  \\(  \mathbf{|K|_\mathcal{M}}\\)   dans   \\( \mathcal{M}\\) est constant, égal à : 


\\[  \mathbf{|K|_\mathcal{M} }= \frac{\sqrt{2}}{12}  \text{  and  } \mathbf{|K|} = \frac{\sqrt{2}}{12} (det(\mathcal{M}))^{ -\frac{1}{2}} \\]

avec\\( \mathbf{|K|}\\) le volume euclidien. 

L'existence d'un maillage entier unitaire vis à vis d'un espace métrique Riemmanien n'est pas garanti. Ainsi la notion de maillage unitaire doit être étendue, on dira donc qu'un maillage discret \\(\mathcal{H}\\)  d'un domaine \\( \Omega \subset R^{n}\\)  est un maillage unité vis à vis d'un espace métrique Riemmanien  \\( \mathbf{M}= (\mathcal{M})(x)_{x \in \Omega} \\) si tous ses éléments sont quasi-unitaires. On dira qu'un tétrahédron K est quasi-unitaire si : 


\\[   \forall i= 1,...,6, \mathcal{l_{M}}(\mathbf{e_i}) \in [\frac{1}{\sqrt{2}}, \sqrt{2}]\\] et si son volume est unitaire.


En conséquence, si le maillage adapté est uniforme est isotropique dans l'espace Riemmanien et anisotrope dans l'espace Euclidien.

## Dualité entre les entités discrètes et continues 
Soit un tenseur métrique M, il existe un ensemble infini non vide d'éléments unitaire relativement à M. Réciproquement, soit K un élément tel que |K| != 0, il existe un tenseur métrique m pour lequel cet élément K lui est relativement unitaire.

La conséquence de cette proposition est que la notion d'unité par rapport à \\(\mathcal{M}\\) permet de définir des classes d'équivalence d'éléments discrets. Ainsi, dans le cadre des maillages continus, un tenseur métrique \\(\mathcal{M}\\) est lui-même appelé élément continu. Il est utilisé pour modéliser l'ensemble des éléments discrets qui sont unitaires pour \\(\mathcal{M}\\). Il est alors possible de calculer des grandeurs géométriques directement associées à cet élément continu.


Un espace Riemmanien  \\(\mathcal{M} =  (\mathcal{M})(x)_{x \in \Omega} \\) s'écrit localement : 

\\[    \forall x \in \Omega       \mathcal{M} = d^{\frac{2}{3}}(x) \mathcal{R}(x)   \begin{bmatrix}r^{-\frac{2}{3}}(x)&&\\\\
     & r^{-\frac{2}{3}}(x) & \\\\
     & & r^{-\frac{2}{3}}(x) \end{bmatrix}   ^t\mathcal{R}(x)   \\] 

où :
* la densité \\( d \\) est égale à : \\(d = (\lambda_1 \lambda_2 \lambda_3)^{\frac{1}{2}} = (h_1 h_2 h_3)^{-1}\\), avec \\(\lambda_i\\) les valeurs propres de \\(\mathcal{M}\\).
* les quotients d'anisotropie \\(r_i\\) sont égaux à : \\(r_i = \frac{h_i^3}{h_1 h_2 h_3}\\) .
* \\(R\\) est la matrice des vecteurs propres de \\(\mathcal{M}\\) représentant l'orientation.

Le tenseur métrique \\(\mathcal{M}\\) peut être décomposé en trois composantes distinctes qui pilotent l'adaptation :

La densité \\(d \\)  contrôle uniquement le niveau de précision local de \\(\mathcal{M}\\). Augmenter ou diminuer \\(d \\) n'affecte ni les propriétés d'anisotropie, ni l'orientation. 

L'anisotropie  est définie par les quotients d'anisotropie  \\(r_i \\) basés sur les rapports de tailles \\( (h_i)\\).

L'orientation est représentée par la matrice des vecteurs propres R de \\( \mathcal{M} \\) .

On définit également la complexité \\( \mathcal{C}\\) de la métrique \\(  \mathcal{M} \\) (qui correspond au nombre total de sommets cibles  \\( N  \\) ) par l'intégrale de la densité sur le domaine : 
 \\[  \mathcal{C}(\mathcal{M}) = \int_{\Omega} d(x) \ dx = \int_{\Omega} \sqrt{\det(\mathcal{M}(x))} \ dx \\]


### Contrôle de l’erreur et formulation continue en adaptation de maillage

En adaptation de maillage, on cherche à contrôler l'erreur d'interpolation entre une solution exacte  \\( u \\)  et sa reconstruction linéraire sur un maillage \\( \mathcal{H}\\) : 

\\[  |u- \Pi_h u |_{L^p(\Omega_h)}\\] 

où : 
* \\(\Pi_h u\\) est l'interpolé linéaire sur le maillage discret
* \\((\Omega_h)\\) le domaine maillé 

Cette formulation est discrète et dépend explicitement du maillage, ce qui rend l'optimisation globale complexe. En utilisatnt une métrique continue \\( \mathcal{M}(x) \\), on peut alors définir une erreur d'interpolation continue associée à la métrique \\( \mathcal{M}(x) \\) indépendante d'un maillage discret spécifique. 

\\[  |u- \Pi_{\mathcal{M}} u |_{L^p(\Omega_h)}\\] 

Pour une fonction u quadratique on a le théorème suivant : 

#### Théorème 3.1. 
Pour tous les éléments unitaires K par rapport à \\(\mathcal{M} \\) , l'erreur d'interpolation de \\( u \\) en norme \\(L^1 \\) ne dépend pas de la forme de l'élément et est uniquement fonction de la Hessienne \\(\mathbf{H} \\) de \\(u \\) et de \\(\mathcal{M}\\).
En 3D, pour tous les tétraèdres unitaires \\(K \\) par rapport à \\(\mathcal{M}\\) , l'égalité suivante est vérifiée :

\\[\|u - \Pi_h u\|_{L^1(K)} = \frac{\sqrt{2}}{240} \det \left( \mathcal{M}^{-\frac{1}{2}} \right) \text{trace} \left( \mathcal{M}^{-\frac{1}{2}} \mathbf{H} \mathcal{M}^{-\frac{1}{2}} \right)\\]


L'erreur est bien definie pour une soltuion quadratique sur un élément K, mais une métrique étant définie en chaque point du domaine \\( x \in \Omega \\) il faut définir une erreur en tout point du domaine : 


#### Théorème 3.2. 

Soit u une fonction deux fois continûment dérivable sur un domaine \\( \Omega \\) et \\( \mathcal{M}(x)_{x \in \Omega} \\)  un maillage continu de  \\( \Omega\\).

Alors, il existe une unique fonction \\( \pi_M \\)  telle que :
\\[ \forall a \in \Omega, |u - \pi_M u|(a) = \frac{\|u_Q - \Pi_h u_Q\|_{L^1(K)}}{|K|} = \frac{1}{20} \text{trace} \left( \mathcal{M}(a)^{-\frac{1}{2}} |\mathbf{H}(a)| \mathcal{M}(a)^{-\frac{1}{2}} \right) \\] 
pour tout élément unitaire K par rapport à \\(\mathcal{M}(a)\\) , où \\( u_Q\\)  est le modèle quadratique de u au point \\( a \\).


Ce théorème souligne une autre dualité discret-continu en mettant en évidence un équivalent continu de l'erreur d'interpolation. 

Pour cette raison, le formalisme suivant est proposé :

\\( \pi_M\\)  est appelé interpolé linéaire continu et \\( |u - \pi_M u| \\)  représente le dual continu de l'erreur d'interpolation.


L'erreur d'interpolation locale devient globale lorsque le maillage est unitaire par rapport à un tenseur métrique constant (ce qui n'implique pas nécessairement que le maillage soit uniforme) et lorsque la fonction est quadratique. Dans ce cas spécifique, en négligeant les erreurs dues à la discrétisation des frontières, nous obtenons l'égalité :
\\[ \|u - \Pi_h u\|_{L^1(\Omega_h)} = \|u - \pi_M u\| _{ L^1(\Omega) }\\]


Pour tous les maillages \\( \mathcal{H} \\) qui sont unitaires par rapport à \\( \mathcal{M}(x)_{x \in \Omega} \\) 


### 3.4 Contrôle optimal de l'erreur d'inteprolation en norme \\(L^P\\)

Dans sa forme la plus générale, le problème de l'adaptation de maillage consiste à trouver le maillage \\(\mathcal{H}\\) d'un domaine \\( \Omega \\) qui minimise une erreur donnée pour une fonction u définie. Par souci de simplicité, nous considérons ici l'erreur d'interpolation linéaire \\( |u - \Pi_h u | \\) contrôlée en norme \\(L^p\\). À noter que l'utilisation d'autres normes est également possible. Le problème est ainsi posé de manière a priori 
Trouver \\( H_{opt} \\) possédant \\(N\\) sommets tel que :
\\[E_{L^p}(H_{opt}) = \min_{H} \|u - \Pi_h u\|_{L^p(\Omega_h)} \quad (P)\\]


\\((P)\\) est un problème combinatoire global qui s'avère insoluble en pratique. En effet, cela nécessiterait l'optimisation simultanée de la topologie du maillage et de la position des sommets. 

Par conséquent, des problèmes plus simples sont envisagés pour approximer la solution.Une simplification courante consiste à effectuer une analyse locale de l'erreur au lieu de considérer le problème global. Un premier ensemble de méthodes consiste à déduire la forme optimale des éléments. Un second ensemble consiste à dériver une borne locale de l'erreur d'interpolation. Cette borne est ensuite transformée en une estimation basée sur une métrique. Une minimisation directe de l'erreur peut également être envisagée en utilisant l'erreur d'interpolation directement comme fonction de coût dans le générateur de maillage.

Toutes ces stratégies ont en commun la résolution d'un problème local, car elles agissent au voisinage d'un élément. Par conséquent, de telles minimisations d'erreur sont équivalentes à un algorithme de descente de gradient qui ne converge que vers un minimum local avec de faibles propriétés de convergence. Cet inconvénient provient du fait qu'une minimisation est directement effectuée sur un maillage discret.



Nous proposons d'aborder la résolution de \\((P)\\) dans un cadre continu. Par conséquent, \\((P)\\) est reformulé comme un problème d'optimisation continue où l'erreur d'interpolation discrète est remplacée par son équivalent continu :

Trouver \\(M_{opt}\\) ayant une complexité de \\(N\\) tel que :
\\[E_{L^p}(M_{opt}) = \min_{M} \|u - \pi_M u\|_{L^p(\Omega)}\\]

En utilisant la définition de l'interpolé continu linéaire \\(\pi_M\\), il est alors possible de poser le problème d'optimisation globale bien posé consistant à trouver le maillage continu optimal qui minimise l'erreur d'interpolation continue en norme \\(L^p\\) :

Trouver \\(M_{L^p} = \min_{M} E_{L^p}(M)\\), soit :

\\[E_{L^p}(M) = \left( \int_{\Omega} (u(x) - \pi_M u(x))^p , dx \right)^{1/p} = \left( \int_{\Omega} \text{trace} \left( M(x)^{-1/2} |H_u(x)| M(x)^{-1/2} \right)^p  dx \right)^{1/p} \quad (4)\\]

sous la contrainte :\\[\mathcal{C}(M) = \int_{\Omega} d(x) \ dx = N\\]

La contrainte sur la complexité est ajoutée pour éviter la solution triviale où tous les \\((h_i)_{i=1,3}\\) seraient nuls, ce qui donnerait une erreur nulle. Contrairement à une analyse discrète, ce problème peut être résolu globalement en utilisant le calcul des variations, lequel est bien défini sur l'espace des maillages continus.



### Theoreme 3.3 
Soit \\(u\\) une fonction deux fois continûment dérivable définie sur \\(\Omega \subset \mathbb{R}^3\\), et \\(H_u\\) sa Hessienne. Le maillage continu optimal \\(M_{L^p}(u) = (M_{L^p}(x))_{x \in \Omega}\\) minimisant localement le Problème (4) s'écrit :

\\[M_{L^p}(x) = N^{\frac{2}{3}} \left( \int_{\Omega} \det(|H_u(\bar{x})|)^{\frac{p}{2p+3}} d\bar{x} \right)^{-\frac{2}{3}} \times \det(|H_u(x)|)^{-\frac{1}{2p+3}} |H_u(x)| \quad (5)\\]

Il vérifie les propriétés suivantes :
* L'unicité : \\(M_{L^p}(u)\\) est unique.
* L'alignement local : \\(M_{L^p}(u)\\) est localement aligné avec la base des vecteurs propres de \\(H_u\\) et possède les mêmes rapports d'anisotropie que \\(H_u\\).
* La borne d'erreur optimale : \\(M_{L^p}(u)\\) fournit une borne explicite optimale de l'erreur d'interpolation en norme \\(L^p\\) :

\\[ \|u - \pi_{M_{L^p}} u\|_ {L^p(\Omega)} = 3 N^{-\frac{2}{3}} \left( \int_{\Omega} \det(|H_u|)^{\frac{p}{2p+3}} \right)^{\frac{2p+3}{3p}}\\]


Il apparaît ainsi que la recherche du maillage optimal ne peut être dissociée de la métrique dont il découle ; cette dernière agit comme le pivot entre la minimisation théorique de l'erreur et la construction géométrique d'un domaine de calcul discret et efficace.


### 4. Adaptation de maillage pour les écoulements stationnaires

Le passage d'une analyse théorique de l'erreur à une application numérique en mécanique des fluides (CFD) impose de reformuler le problème d'optimisation. Alors que la théorie pure définit la métrique optimale comme un tenseur idéal, l'enjeu opérationnel réside dans la génération effective d'un maillage dont la densité et l'anisotropie minimisent l'erreur d'approximation.

Dans le cadre de simulations numériques, la solution exacte \\(u\\) est par définition inconnue. Le problème \\((P)\\) est alors transposé pour minimiser l'erreur entre \\(u \text{ et } u_h \\) en norme \\(  |L^{p}| \\) .

Cette transition nécessite de coupler la théorie du maillage continu avec des estimateurs d'erreur capables de lier l'erreur d'approximation à l'erreur d'interpolation locale.

### 4.1. Stratégies d'adaptation

Deux approches méthodologiques se distinguent pour le pilotage de l'anisotropie :

L'approche par caractéristiques (Feature-based) : Elle vise à optimiser le maillage pour capturer l'ensemble des structures physiques d'un capteur (pression, nombre de Mach, etc.). L'utilisation de la norme \\(L^p\\) s'avère ici cruciale pour la capture des phénomènes multi-échelles, permettant de raffiner des structures dont l'amplitude est plusieurs ordres de grandeur inférieure aux échelles principales.

L'approche orientée objectif (Goal-oriented) : Elle focalise l'effort de réduction d'erreur sur une fonctionnelle scalaire d'intérêt (ex: portance, traînée), bien que l'introduction de l'anisotropie y soit mathématiquement plus complexe à prescrire.

### 4.3. Procédure itérative et convergence

L'adaptation de maillage étant intrinsèquement non-linéaire, sa résolution repose sur une boucle itérative visant la convergence du couple maillage-solution. Le processus suit une séquence rigoureuse :

Résolution de l'écoulement sur un maillage \\(H_i\\).
Estimation de la métrique optimale \\(M_{L^p}\\) à partir de la solution calculée (généralement via la récupération de la Hessienne).Gradation du champ de métriques pour assurer une régularité géométrique.
Génération d'un nouveau maillage \\(H_{i+1}\\) respectant la métrique prescrite.

Cette stratégie permet non seulement de capturer les singularités et les fortes discontinuités (chocs, couches limites), mais assure également le recouvrement de l'ordre de convergence théorique du schéma numérique, souvent dégradé sur des maillages non adaptés.
Désormais, on ne cherche plus seulement à définir mathématiquement une métrique optimale, mais à construire physiquement le maillage optimal qui en découle pour résoudre des problèmes complexes de dynamique des fluides.

Deux approches principalesL'auteur distingue deux méthodes pour guider l'adaptation :L'adaptation basée sur les caractéristiques (Feature-based) : On cherche le meilleur maillage pour capturer les variations d'un capteur physique donné (vitesse, pression, etc.).L'adaptation orientée par l'objectif (Goal-oriented) : On optimise le maillage pour observer une fonctionnelle scalaire précise (par exemple, la traînée ou la portance d'une aile).Problématiques et MotivationsBien que l'efficacité de l'anisotropie soit prouvée, le passage aux solutions numériques (où la solution exacte \\(u\\) est inconnue) soulève des défis :Erreur d'approximation : On cherche à minimiser \\(\|u - u_h\|_ {L^p}\\) au lieu de l'erreur d'interpolation pure.Capture multi-échelles : L'utilisation de la norme \\(L^p\\) (au lieu de \\(L^\infty\\)) est indispensable pour capturer des phénomènes dont l'amplitude est parfois 1000 fois plus faible que les structures principales, sans avoir besoin de fixer arbitrairement une taille de maille minimale.Convergence théorique : L'adaptation permet de retrouver un ordre de convergence de 2 (souvent perdu sur des maillages uniformes en présence de chocs ou de forts gradients), ce qui valide la qualité du calcul.L'algorithme d'adaptationL'adaptation est un processus non-linéaire résolu par une boucle itérative. On ne se contente pas de calculer une métrique ; on génère un nouveau maillage à chaque étape pour converger vers le couple maillage-solution optimal.La boucle type (Algorithme 2) :Calcul : Résolution de l'écoulement sur le maillage actuel.Métrique : Calcul de la métrique \\(M_{L^p}\\) basée sur l'estimation d'erreur.Gradation : Lissage de la métrique pour éviter des variations de taille trop brutales entre voisins.Génération : Création d'un nouveau maillage adapté à cette métrique.Interpolation : Transfert de la solution précédente sur le nouveau maillage pour redémarrer le calcul.

<div class="algorithm">
<b>Algorithm 2:</b> Mesh Adaptation Loop for Steady Flows<br><br>

<b>Input:</b> Initial mesh and solution \\((H_0, S_0^0)\\), target complexity \\(N\\)<br>
<b>Output:</b> Adapted mesh and solution<br><br>

<ol>
<li> Compute solution \\( S_i \\) using the flow solver from \\( (H_i, S_i^0) \\)</li>
<li> If \\(i = n_{\text{adap}}\\), <b>break</b> </li>
<li> Compute metric \\(M_{L^p,i} \text{from} (H_i, S_i)\\)</li>
<li> Apply metric gradation to obtain \\(\tilde{M}_{L^p,i}\\)</li>
<li> Generate adapted mesh \\(H_{i+1}\\)from \\((H_i, \tilde{M}_{L^p,i})\\)</li>
<li> Interpolate solution to obtain \\(S_{i+1}^0\\) from \\((H_{i+1}, H_i, S_i)\\)</li>
</ol>

</div> 



\\(\\) \\(\\) \\(\\) \\(\\) \\(\\) 


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

These 3 criteria have to be assessed to determine if a __swap__ operation is accepted or not.

Un swap modifilocalement la connectivité d'un maillage sans ajouter ni retirer de sommets. Cette opération peut échouer pour diverses raisons. Elle est impossible pour des raisons topologiques si l'arête à modifier n'a qu'un seul élément adjacent ou si elle se situe sur une frontière fixe. De la même manière, l'opération échoue si la topologie des sommets est incompatible.

Le swap est également rejeté lorsque les contraintes de qualité et géométriques ne sont pas respectées. L'opération n'est pas effectuée si la qualité du maillage est déjà supérieure au seuil requis, ou si elle risque de compromettre la régularité de la surface en créant, par exemple, un angle de normales trop grand. Plus précisément, les nouveaux éléments résultant du swap doivent respecter une qualité minimale et des limites de longueur d'arête prédéfinies. Enfin, le swap est considéré comme un échec si la modification proposée ne change rien à la connectivité de la cavité.

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


Ainsi pour qu'un split soit effectué sur une arête jugée trop longue, celle-ci ne doit pas se trouver sur une frontière fixe, et la modification ne doit pas engendrer un maillage de mauvaise qualité ou des arêtes trop courtes. Si l'une de ces conditions n'est pas remplie, l'opération échoue. L'opération est validée et s'effectue si toutes les conditions sont respectées et qu'elle a pour effet d'améliorer la qualité du maillage.

### Definition : Collapse

<figure style="text-align: center;">
  <img src="../images/collapse.svg" alt="Tenseur métrique anisotrope" width="70%">
</figure>


The __collapse__ operation aims at removing "small" edges. It is applied to edges whose length (in metric space) is smaller than \\( l_0 < 1/\sqrt{2} \\). 

It can however introduce
- "long" edges
- element of low quality (including invalid elements)
- a poor representation of the geometry that will be difficult to recovered later

These 3 criteria have to be assessed to determine if a __collapse__ operation is accepted or not.

De la même manière que pour un split, un collapse sur une arête jugée trop courte ne peut être effectué que sous certaines conditions. L'opération est d'abord soumise à des vérifications de faisabilité. Elle échoue si l'arête se trouve sur une frontière fixe, si la modification risque de dégrader la qualité du maillage résultant ou si elle engendre une géométrie des sommets non régulière.

### Definition : Smooth

The smoothing operation aims at improving the quality of the elements by moving vertices to some average of the locations of its neighbors.

In order to have a consistent smoothing on the boundaries of the computational domain, only the neighbors tagged on the same topological entity or one of its children are considered for smoothing. A projection step is still required for boundary vertices to ensure the consistency with the CAD model.


