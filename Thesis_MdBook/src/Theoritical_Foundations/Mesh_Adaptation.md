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

A discrete simplex mesh can be fully described by a Riemannian metric space. Such duality relies on
the notion of unit elements. Once we define the unit element notion, we can generalize the unit notion
to the mesh and then define a duality between the mesh and the continuous metric space. Then we
can refer to a mesh as its metric field. Furthermore we can use the existing metric operations and
invariants in the Riemannian space to control the interpolation error. Such mathematical framework
was thoroughly established in ([33],[34]). We will hereby recall the most important aspects of the
continuous mesh theory.

To generate anisotropic meshes that adapt to the flow physics, it is necessary to prescribe element sizes and orientations at every point in the domain. This is made possible by using the Riemannian space defined earlier.

The core idea is to generate a unit mesh with respect to the metric derived from the error indicator. A tetrahedron\\( K \\), ddefined by its set of edges \\( \mathbf{(e_i)}_{i=1..6}\\)is said to be unit with respect to a metric \\( \mathcal{M} \\) if the length of each of its edges is unity in this metric: 

\\[   \forall i= 1,...,6, \mathcal{l_{M}}(\mathbf{e_i})= 1 \text{ with }  \mathcal{l_{M}}(\mathbf{e_i})=\sqrt{^t\mathbf{e_i}\mathcal{M}\mathbf{e_i}} \\]

If all edges of \\(K\\) have unit length, then its volume  \\(  \mathbf{|K|_\mathcal{M}}\\)  in the metric   \\( \mathcal{M}\\) is constant and equal to: 

\\[  \mathbf{|K|_\mathcal{M} }= \frac{\sqrt{2}}{12}  \text{  and  } \mathbf{|K|} = \frac{\sqrt{2}}{12} (det(\mathcal{M}))^{ -\frac{1}{2}} \\]

where \\( \mathbf{|K|}\\) denotes the Euclidean volume.

The existence of a perfect unit mesh for a given Riemannian metric space is not guaranteed. Therefore, the concept of a unit mesh must be extended: a discrete mesh \\(\mathcal{H}\\)  of a domain \\( \Omega \subset R^{n}\\)  is considered a unit mesh with respect to a Riemannian metric space \\( \mathbf{M}= (\mathcal{M})(x)_{x \in \Omega} \\) if all its elements are quasi-unit. A tetrahedron \\( K \\) is said to be quasi-unit if: 


\\[   \forall i= 1,...,6, \mathcal{l_{M}}(\mathbf{e_i}) \in [\frac{1}{\sqrt{2}}, \sqrt{2}]\\] and if its volume is unitary.


Consequently, the adapted mesh is uniform and isotropic in the Riemannian space, while being anisotropic in the Euclidean space.

## Duality Between Discrete and Continuous Entities
Lete \\(\mathcal{M}\\) be a metric tensor, there exists an infinite, non-empty set of elements that are unit with respect to \\(\mathcal{M}\\).Conversely, let \\(K\\) be an element such that \\(|K| != 0\\), there exists a metric tensor \\(\mathcal{M}\\) for which this element \\(K\\) is unit.

The consequence of this proposition is that the notion of a "unit" element relative to \\(\mathcal{M}\\) allows for the definition of equivalence classes of discrete elements. Thus, within the framework of continuous meshing, a metric tensor \\(\mathcal{M}\\) is itself referred to as a continuous element. It is used to model the set of all discrete elements that are unit for \\(\mathcal{M}\\). This framework makes it possible to compute geometric quantities directly associated with this continuous element.


A Riemannian space \\(\mathcal{M} =  (\mathcal{M})(x)_{x \in \Omega} \\) can be written locally as :

\\[    \forall x \in \Omega       \mathcal{M} = d^{\frac{2}{3}}(x) \mathcal{R}(x)   \begin{bmatrix}r^{-\frac{2}{3}}(x)&&\\\\
     & r^{-\frac{2}{3}}(x) & \\\\
     & & r^{-\frac{2}{3}}(x) \end{bmatrix}   ^t\mathcal{R}(x)   \\]

où :
* The density\\( d \\) is defined as: \\(d = (\lambda_1 \lambda_2 \lambda_3)^{\frac{1}{2}} = (h_1 h_2 h_3)^{-1}\\), where \\(\lambda_i\\) are the eigenvalues  \\(\mathcal{M}\\).
* The anisotropy quotients \\(r_i\\) are defined as : \\(r_i = \frac{h_i^3}{h_1 h_2 h_3}\\) .
* \\(R\\) is the eigenvector matrix of \\(\mathcal{M}\\) representing the orientation.

The metric tensor \\(\mathcal{M}\\) can thus be decomposed into three distinct components that drive the adaptation process:

Density  \\(d \\)  Controls only the local precision level of \\(\mathcal{M}\\). Increasing or decreasing \\(d \\) affects neither the anisotropic properties nor the orientation.

Anisotropy is defined by the anisotropy quotients \\(r_i \\) based on the size ratios \\( (h_i)\\).

L'orientation is represented by the eigenvector matrix \\( \mathcal{R} \\) of \\( \mathcal{M} \\) .

Finally, the complexity\\( \mathcal{C}\\) of the metric \\(  \mathcal{M} \\) (which corresponds to the target number of vertices  \\( N  \\) ) is defined by the integral of the density over the domain:: 
 \\[  \mathcal{C}(\mathcal{M}) = \int_{\Omega} d(x) \ dx = \int_{\Omega} \sqrt{\det(\mathcal{M}(x))} \ dx \\]


### Error Control and Continuous Formulation in Mesh Adaptation

In mesh adaptation, the goal is to control the interpolation error between an exact solution \\( u \\)  and its linear reconstruction on a mesh \\( \mathcal{H}\\) : 

\\[  |u- \Pi_h u |_{L^p(\Omega_h)}\\] 

where : 
* \\(\Pi_h u\\) is the linear interpolant on the discrete mesh.
* \\((\Omega_h)\\) is the meshed domain.

This formulation is discrete and explicitly depends on the mesh, which makes global optimization complex. By using a continuous metric field \\( \mathcal{M}(x) \\),one can define a continuous interpolation error associated with the metric \\( \mathcal{M}(x) \\)independent of any specific discrete mesh:

\\[  |u- \Pi_{\mathcal{M}} u |_{L^p(\Omega_h)}\\] 

For a quadratic function \\(u \\), the following theorem holds:

#### Théorème 3.1. 
For any element \\(K\\) that is unit with respect to  \\(\mathcal{M} \\) , the \\(L^1 \\)   interpolation error of \\( u \\)is independent of the element's shape and depends solely on the Hessian \\(\mathbf{H} \\) of \\(u \\) and the metric \\(\mathcal{M}\\).
In 3D, for all tetrahedra \\(K \\) that are unit with respect to \\(\mathcal{M}\\) , the following equality holds: :

\\[\|u - \Pi_h u\|_{L^1(K)} = \frac{\sqrt{2}}{240} \det \left( \mathcal{M}^{-\frac{1}{2}} \right) \text{trace} \left( \mathcal{M}^{-\frac{1}{2}} \mathbf{H} \mathcal{M}^{-\frac{1}{2}} \right)\\]


The error is well-defined for a quadratic solution on an element K, however, since a metric is defined at every point in the domain\\( x \in \Omega \\)it is necessary to define the error throughout the entire domain :


#### Théorème 3.2. 

Let\\(u\\)be a twice continuously differentiable function on a domain \\( \Omega \\) and let \\( \mathcal{M}(x)_{x \in \Omega} \\)  be a continuous mesh of  \\( \Omega\\).

There exists a unique function\\( \pi_M \\)  such that:
\\[ \forall a \in \Omega, |u - \pi_M u|(a) = \frac{\|u_Q - \Pi_h u_Q\|_{L^1(K)}}{|K|} = \frac{1}{20} \text{trace} \left( \mathcal{M}(a)^{-\frac{1}{2}} |\mathbf{H}(a)| \mathcal{M}(a)^{-\frac{1}{2}} \right) \\] 
for any element K that is unit with respect to \\(\mathcal{M}(a)\\) , where \\( u_Q\\)  is the quadratic model of \\(u\\) at point\\( a \\).


This theorem emphasizes another discrete-continuous duality by highlighting a continuous equivalent of the interpolation error.

For this reason, the following formalism is proposed

\\( \pi_M\\)  is called the continuous linear interpolant, and \\( |u - \pi_M u| \\)  represents the continuous dual of the interpolation error.


The local interpolation error becomes global when the mesh is unit with respect to a constant metric tensor (which does not necessarily imply that the mesh is uniform) and when the function is quadratic. In this specific case, neglecting boundary discretization errors, we obtain the following equality: 

\\[ \|u - \Pi_h u\|_{L^1(\Omega_h)} = \|u - \pi_M u\| _{ L^1(\Omega) }\\]


for all meshes \\( \mathcal{H} \\) that are unit with respect to\\( \mathcal{M}(x)_{x \in \Omega} \\) 


### 3.4  Optimal Control of the \\(L^p\\)-norm Interpolation Error

In its most general form, the mesh adaptation problem consists of finding the mesh \\(\mathcal{H}\\) of a domain \\( \Omega \\) that minimizes a given error for a defined function \\( u \\). 

For the sake of simplicity, we consider here the linear interpolation error \\( |u - \Pi_h u | \\) controlled in the \\(L^p\\)norm, although other norms may also be used. The problem is thus posed a priori:
Find \\( H_{opt} \\) with \\(N\\) vertices such that:
\\[E_{L^p}(H_{opt}) = \min_{H} \|u - \Pi_h u\|_{L^p(\Omega_h)} \quad (P)\\]


Problem \\((P)\\) is a global combinatorial problem that proves to be insoluble in practice. Indeed, it would require the simultaneous optimization of both the mesh topology and the vertex positions.

Consequently, simpler sub-problems are considered to approximate the solution. A common simplification consists of performing a local error analysis instead of addressing the global problem. A first set of methods focuses on deducing the optimal shape of the elements. A second set involves deriving a local bound for the interpolation error.

This bound is then transformed into a metric-based estimate. Direct error minimization can also be considered by using the interpolation error itself as a cost function within the mesh generator.

All these strategies share a common trait: they solve a local problem, as they operate in the neighborhood of a single element. Consequently, such error minimizations are equivalent to a gradient descent algorithm that only converges toward a local minimum with poor convergence properties. This drawback arises from the fact that the minimization is performed directly on a discrete mesh.

<br>
<br>


## 3.5 Optimal Control of the \\(L^p\\)-norm Interpolation Error in a Continuous Framework 

We propose to address the resolution of \\((P)\\) within a continuous framework. Consequently, \\((P)\\) is reformulated as a continuous optimization problem where the discrete interpolation error is replaced by its continuous equivalent:

Find \\(M_{opt}\\) with a complexity of \\(N\\) such that:
\\[E_{L^p}(M_{opt}) = \min_{M} \|u - \pi_M u\|_{L^p(\Omega)}\\]

By using the definition of the continuous linear interpolant\\(\pi_M\\), it is possible to pose a well-posed global optimization problem to find the optimal continuous mesh that minimizes the \\(L^p\\) norm continuous interpolation error:

Find \\(M_{L^p} = \min_{M} E_{L^p}(M)\\), where:

\\[E_{L^p}(M) = \left( \int_{\Omega} (u(x) - \pi_M u(x))^p , dx \right)^{1/p} = \left( \int_{\Omega} \text{trace} \left( M(x)^{-1/2} |H_u(x)| M(x)^{-1/2} \right)^p  dx \right)^{1/p} \quad (4)\\]

subject to the constraint: \\[\mathcal{C}(M) = \int_{\Omega} d(x) \ dx = N\\]

The complexity constraint is added to avoid the trivial solution where all sizes \\((h_i)_{i=1,3}\\) would be zero, which would result in zero error. Unlike a discrete analysis, this problem can be solved globally using the calculus of variations, which is well-defined over the space of continuous meshes.


### Theorem 3.3
Let \\(u\\) be a twice continuously differentiable function defined on \\(\Omega \subset \mathbb{R}^3\\), and \\(H_u\\) its Hessian. The optimal continuous mesh \\(M_{L^p}(u) = (M_{L^p}(x))_{x \in \Omega}\\) that locally minimizes Problem (4) is given by:

\\[M_{L^p}(x) = N^{\frac{2}{3}} \left( \int_{\Omega} \det(|H_u(\bar{x})|)^{\frac{p}{2p+3}} d\bar{x} \right)^{-\frac{2}{3}} \times \det(|H_u(x)|)^{-\frac{1}{2p+3}} |H_u(x)| \quad (5)\\]

It satisfies the following properties:
* L'Uniqueness : \\(M_{L^p}(u)\\) is unique.
* Local Alignment: \\(M_{L^p}(u)\\) is locally aligned with the eigenvector basis of \\(H_u\\) and possesses the same anisotropy ratios as \\(H_u\\).
* Optimal Error Bound: \\(M_{L^p}(u)\\) provides an explicit optimal bound for the \\(L^p\\)norm interpolation error: :

\\[ \|u - \pi_{M_{L^p}} u\|_ {L^p(\Omega)} = 3 N^{-\frac{2}{3}} \left( \int_{\Omega} \det(|H_u|)^{\frac{p}{2p+3}} \right)^{\frac{2p+3}{3p}}\\]


It thus appears that the search for the optimal mesh cannot be dissociated from the metric from which it originates; the latter acts as the pivot between the theoretical minimization of error and the geometric construction of a discrete and efficient computational domain.

### 4. Mesh Adaptation for Steady Flows

The transition from a theoretical error analysis to a numerical application in Fluid Dynamics requires a reformulation of the optimization problem. While pure theory defines the optimal metric as an ideal tensor, the operational challenge lies in the effective generation of a mesh whose density and anisotropy minimize the approximation error.

In numerical simulations, the exact solution \\(u\\) is, by definition, unknown. 

Problem \\((P)\\) therefore transposed to minimize the error between \\(u \text{ and } u_h \\) in the \\(  |L^{p}| \\) norm .

This transition requires coupling continuous mesh theory with error estimators capable of linking the approximation error to the local interpolation error.

### 4.1. Adaptation Strategies

Two distinct methodological approaches are used to drive anisotropy:

Feature-based approach :This aims to optimize the mesh to capture all physical structures of a specific sensor (e.g., pressure, Mach number). The use of the \\(L^p\\)norm is crucial here for capturing multi-scale phenomena, allowing for the refinement of structures whose amplitude is several orders of magnitude smaller than the primary scales.

Goal-oriented approach: This focuses the error reduction effort on a specific scalar functional of interest (e.g., lift, drag), although prescribing anisotropy in this context is mathematically more complex.

### 4.3. Iterative Procedure and Convergence

Since mesh adaptation is intrinsically non-linear, its resolution relies on an iterative loop aimed at the convergence of the mesh-solution pair. The process follows a rigorous sequence:

Flow resolution on a given mesh \\(H_i\\).
Estimation of the optimal metric \\(M_{L^p}\\)from the computed solution (generally via Hessian recovery).
Metric field gradation to ensure geometric regularity (smoothing).
Generation of a new mesh \\(H_{i+1}\\)  that adheres to the prescribed metric.

This strategy not only allows for the capture of singularities and strong discontinuities (shocks, boundary layers) but also ensures the recovery of the numerical scheme's theoretical convergence order, which is often degraded on non-adapted meshes.

We no longer seek merely to mathematically define an optimal metric, but to physically construct the resulting optimal mesh to solve complex fluid dynamics problems.


<!-- L'adaptation basée sur les caractéristiques (Feature-based) : On cherche le meilleur maillage pour capturer les variations d'un capteur physique donné (vitesse, pression, etc.).
L'adaptation orientée par l'objectif (Goal-oriented) : On optimise le maillage pour observer une fonctionnelle scalaire précise (par exemple, la traînée ou la portance d'une aile).
Problématiques et Motivations
Bien que l'efficacité de l'anisotropie soit prouvée, le passage aux solutions numériques (où la solution exacte \\(u\\) est inconnue) soulève des défis :Erreur d'approximation : On cherche à minimiser \\(\|u - u_h\|_ {L^p}\\) au lieu de l'erreur d'interpolation pure.Capture multi-échelles : L'utilisation de la norme \\(L^p\\) (au lieu de \\(L^\infty\\)) est indispensable pour capturer des phénomènes dont l'amplitude est parfois 1000 fois plus faible que les structures principales, sans avoir besoin de fixer arbitrairement une taille de maille minimale.Convergence théorique : L'adaptation permet de retrouver un ordre de convergence de 2 (souvent perdu sur des maillages uniformes en présence de chocs ou de forts gradients), ce qui valide la qualité du calcul.L'algorithme d'adaptationL'adaptation est un processus non-linéaire résolu par une boucle itérative. On ne se contente pas de calculer une métrique ; on génère un nouveau maillage à chaque étape pour converger vers le couple maillage-solution optimal.La boucle type (Algorithme 2) :Calcul : Résolution de l'écoulement sur le maillage actuel.Métrique : Calcul de la métrique \\(M_{L^p}\\) basée sur l'estimation d'erreur.Gradation : Lissage de la métrique pour éviter des variations de taille trop brutales entre voisins.Génération : Création d'un nouveau maillage adapté à cette métrique.Interpolation : Transfert de la solution précédente sur le nouveau maillage pour redémarrer le calcul. -->



<div class="algorithm">
<b>Algorithm:</b> Mesh Adaptation Loop for Steady Flows<br><br>

<b>Input:</b> Initial mesh and solution \\((H_0, S_0^0)\\), target complexity \\(N\\)<br>
<b>Output:</b> Adapted mesh and solution<br><br>

<ol>
Compute solution \\(S_i\\) using the flow solver from \\( (H_i, S_i^0) \\)
If \\(i = n_{\text{adap}}\\) , <b>break</b> 
Compute metric \\(M_{L^p,i} \text{from} (H_i, S_i)\\)
Apply metric gradation to obtain \\(\tilde{M}_{L^p,i}\\)
Generate adapted mesh \\(H_{i+1}\\)from \\((H_i, \tilde{M}_{L^p,i})\\)
Interpolate solution to obtain \\(S_{i+1}^0\\) from \\((H_{i+1}, H_i, S_i)\\)
</ol>

</div> 



\\(\\) \\(\\) \\(\\) \\(\\) \\(\\) 


### Definition: Cavity

Given a mesh entity \\( e \\) (a vertex or an edge in this case), the cavity \\( \mathcal{C}(e) \\)is the set of mesh elements that contain the entity \\( e \\).

A cavity \\( \mathcal{C}(e) \\) can be "re-filled" from a vertex \\( \mathbf v \\) as the set of elements created from \\( \mathbf v \\) and the faces of the cavity boundary \\( \partial \mathcal{C}(e) \\) (outward-oriented).

\\[ \mathcal F(\mathbf v,C(e))= { K=(\mathbf v, \mathbf g_1, \cdots, \mathbf g_d) | g = (\mathbf g_1, \cdots, \mathbf g_d) \in \partial C(e), \mathbf v \notin g} \\]

### Definition: Swap

<figure style="text-align: center;">
  <img src="../images/swap.svg" alt="Anisotropic metric tensor " width="70%">
</figure>

The __swap__ operation aims at improving the quality of the elements. It locally modifies the connectivity of a mesh without adding or removing vertices.

This operation may fail for several reasons. It is topologically impossible if the edge to be modified has only one adjacent element or if it lies on a fixed boundary. Similarly, the operation fails if the vertex topology is incompatible.

These 3 criteria have to be assessed to determine if a __swap__ operation is accepted or not.

This operation may fail for several reasons. It is topologically impossible if the edge to be modified has only one adjacent element or if it lies on a fixed boundary. Similarly, the operation fails if the vertex topology is incompatible.

A swap is also rejected when quality and geometric constraints are not met. The operation is not performed if the current mesh quality is already above the required threshold, or if it risks compromising surface regularity by creating, for instance, an excessively large normal angle. Specifically, the new elements resulting from the swap must respect a minimum quality and predefined edge length limits. Finally, the swap is considered a failure if the proposed modification does not change the cavity connectivit


It can however introduce:

* "long" or "short" edges

* a poor representation of the geometry that will be difficult to recover later

* inconsistent tagging

These three criteria must be assessed to determine if a swap operation is accepted or not.

### Definition: Split



<figure style="text-align: center;">
  <img src="../images/split.svg" alt="Anisotropic metric tensor" width="70%">
</figure>

The __split__ operation aims at splitting "long" edges. It is applied to edges whose length (in metric space) is larger than \\(l_0 > \sqrt{2}\\). 

For a split to be performed on an edge deemed too long, it must not be located on a fixed boundary, and the modification must not result in poor mesh quality or excessively short edges. If any of these conditions are not met, the operation fails. The operation is validated and executed only if all conditions are respected and if it effectively improves the mesh quality. 

It can however introduce
- "short" edges
- element of low quality (including invalid elements)

These 2 criteria have to be assessed to determine if a __split__ operation is accepted or not
When introducing new vertices on boundaries, a projection step is required to ensure the consistency with the CAD model.



### Definition: Collapse

<figure style="text-align: center;">
  <img src="../images/collapse.svg" alt="Tenseur métrique anisotrope" width="70%">
</figure>


The __collapse__ operation aims at removing "small" edges. It is applied to edges whose length (in metric space) is smaller than \\( l_0 < 1/\sqrt{2} \\). 

It can however introduce
- "long" edges
- element of low quality (including invalid elements)
- a poor representation of the geometry that will be difficult to recovered later

These 3 criteria have to be assessed to determine if a __collapse__ operation is accepted or not.

Just as with a split, a collapse on an edge deemed too short can only be performed under certain conditions. The operation is first subject to feasibility checks. It fails if the edge is on a fixed boundary, if the modification risks degrading the resulting mesh quality, or if it leads to an irregular vertex geometry.

### Definition: Smooth

The smoothing operation aims at improving the quality of the elements by moving vertices to some average of the locations of its neighbors.

In order to have a consistent smoothing on the boundaries of the computational domain, only the neighbors tagged on the same topological entity (or one of its children) are considered for smoothing. A projection step is still required for boundary vertices to ensure consistency with the CAD model.


