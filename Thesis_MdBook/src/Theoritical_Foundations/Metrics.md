# Métrique

### 2.1.1 Définition : Métrique
Un **tenseur métrique** \\( \mathcal{M} \in \mathbb{R}^{n} \\) est une matrice \\( n \times n \\) symétrique définie positive.
\\( \mathcal{M} \\) est toujours diagonalisable et peut être décomposée comme \\( \mathcal{M}= {^T}\mathcal{R} \Delta \mathcal{R} \\), où \\( \mathcal{R} \\) et \\( \Delta \\) sont respectivement les matrices des vecteurs propres et des valeurs propres de \\( \mathcal{M} \\).

De cette définition, il s'ensuit que le **produit scalaire** de deux vecteurs dans \\( \mathbb{R}^n \\) peut être défini par rapport à une métrique \\( \mathcal{M} \\) comme suit :

\\[ <\textbf{u},\textbf{v}>_{\mathcal{M}} = <\textbf{u},\mathcal{M}\textbf{v} > = {^t}\textbf{u}\mathcal{M}\textbf{v} \\]

Dans ce cadre, la **norme euclidienne** d'un vecteur \\( \textbf{u} \text{ dans } \mathbb{R}^n \\) selon \\( \mathcal{M} \\) est définie comme :

\\[ \left\| \textbf{u} \right\| = \sqrt{<\textbf{u},\textbf{u} >_{\mathcal{M}} } = \sqrt{ \textbf{u}^{t} \mathcal{M} \textbf{u} } \\]

Cette formule nous permet de mesurer la longueur d'un vecteur \\( \textbf{u} \\) par rapport à une certaine métrique \\( \mathcal{M} \\).

Une métrique \\( \mathcal{M} \\) peut être représentée géométriquement par sa **boule unité** associée, définie par :

\\( \xi _{M} ={ p | \sqrt{ \textbf{op}^{t} \mathcal{M} \textbf{op} }=1| \} \\)

<br><br>

<figure style="text-align: center;">
  <img src="../images/Metric_1.png" alt="Tenseur métrique anisotrope" width="90%">
  <figcaption>Figure 1: Boule unité métrique</figcaption>
</figure>

### 2.1.2 Définition : Espace métrique euclidien
Un **espace métrique euclidien** est un espace vectoriel muni d'un certain produit scalaire \\( <.,.>_{\mathcal{M}} \\) défini par un tenseur métrique \\( \mathcal{M} \\). On le note \\( ( \mathbb{R}^n, \mathcal{M} ) \\).
La **distance** entre deux points \\( \textbf{p} \\) et \\( \textbf{q} \\) est donnée par :

\\[ d_{ \mathcal{M} }( \textbf{p},\textbf{q} ) = \sqrt{ \textbf{pq}^{t} \mathcal{M} \textbf{pq} } \\]

Enfin, la **longueur** d'un segment \\( \textbf{pq} \\) est la distance entre ses extrémités :

\\[ \mathcal{L}_ { \mathcal{M} } ( \textbf{pq} ) = d_{ \mathcal{M} } ( \textbf{p},\textbf{q} ) \\]

### 2.1.3 Remarque
Si la métrique définissant le produit scalaire est la matrice identité, \\( \mathcal{M} = \mathbb{I} _{n} \\), alors nous obtenons l'**espace euclidien** standard \\( ( \mathbb{R}^n , \mathbb{I} _{n} ) \\) muni du produit scalaire naturel.

<br><br>

Il est alors possible de définir des **volumes** et des **angles** dans un espace métrique euclidien. Soit K un sous-ensemble borné de \\( \mathbb{R}^n \\), le volume d'un élément K dans la métrique \\( \mathcal{M} \\) est :

\\[ |K| _{ \mathcal{M} } = \int _{K} \sqrt{det( \mathcal{M} )} |K| _{ \mathbb{I} _{n}} \\]

L'**angle** entre deux vecteurs \\( \textbf{u} \\) et \\( \textbf{v} \\) est défini par l'unique réel \\( \theta \in [ 0 , \pi ] \\) tel que :

\\[ cos(\theta) = \frac{ <\textbf{u} , \textbf{v} > _{\mathcal{M}} }{||\textbf{u}|| _{\mathcal{M}} ||\textbf{v}|| _{\mathcal{M}}} \\]

### 2.1.4 Définition : Espace métrique riemannien
Un **espace métrique riemannien** est une variété continue \\( \Omega \subset \mathbb{R}^n \\) munie d'une métrique lisse \\( \mathcal{M}(.) \\). On le note par \\( \mathcal{M}(\textbf{x}) _{x \in \Omega} \\).

Contrairement au cas de l'espace métrique euclidien, la distance entre deux points, c'est-à-dire le chemin le plus court, n'est plus la ligne droite, mais est donnée par une **géodésique**. Néanmoins, dans le contexte de la génération ou de l'adaptation de maillage, nous ne sommes pas intéressés par la distance entre deux points, mais par la longueur d'un chemin donné par une arête du maillage.
Plus précisément, dans un espace métrique riemannien \\( \mathcal{M}(\textbf{x}) _{x \in \Omega} \\), la longueur d'une arête \\( \textbf{pq} \\) est calculée en utilisant la paramétrisation en ligne droite \\( \gamma(t) = \textbf{p} + t \textbf{pq}, t \in [0,1] \\) :

\\[ \mathcal{L}_ { \mathcal{M} } ( \textbf{pq} ) = \int_{0}^{1} || \gamma (t) || \ dt = \int_{0}^{1} \sqrt{\textbf{pq}^t \mathcal{M}(\textbf{p}+t\textbf{pq})\textbf{pq}} \ dt \\]

<figure style="text-align: center;">
  <img src="../images/Riemmanian.png" alt="Isovaleurs de la fonction f(x) = Lm(ox) pour différents espaces" width="90%">
  <figcaption> \\( \textbf{Figure 2:} \\) Isovaleurs de la fonction \\( f(x) = \mathcal{L}_m (ox) \\) pour différents espaces.
  <br>
  À gauche, l'espace euclidien standard \\( ([-1,1]*[-1,1], \mathbb{I} _{2} ) \\)
  <br>
  Au milieu, un espace métrique euclidien \\( ([-1,1]*[-1,1], \mathcal{M} ) \\)
  <br>
  À droite, un espace métrique riemannien \\( (\mathcal{M}(x))_{x \in [-1,1]^2} \\) </figcaption>
</figure>

### TODO Opérations sur la métrique / Intersection / Interpolation / Gradation etc...