# Metric

### 2.1.1 Definition : Metric
A metric tensor \\( \mathcal{M} \in \mathbb{R}^{n} \\) is an \\(n \times n \\) symmetric definite positive matrix.  
\\( \mathcal{M} \\) is always diagonalizable and can be decomposed as \\( \mathcal{M}= {^T}\mathcal{R} \Delta \mathcal{R} \\) where \\(\mathcal{R}\\) and \\(\Delta\\) are the eigenvectors and the eigenvalues matrices of \\(\mathcal{M}\\), respectively.

From this definition, it follows up that the scalar product of two vectors in \\(  \mathbb{R}^n \\)
can defined related to a metric \\(  \mathcal{M} \\) as 

\\[  <\textbf{u},\textbf{v}>_{\mathcal{M}} = <\textbf{u},\mathcal{M}\textbf{v} > = {^t}\textbf{u}\mathcal{M}\textbf{v}\\]

Under this notion, the Euclidean norm of a vector \\(  \textbf{u}  \text{ in } \mathbb{R}^n\\) according to \\(  \mathcal{M}\\) is defined as 

\\[ \left\| \textbf{u} \right\| = \sqrt{<\textbf{u},\textbf{u} >_{\mathcal{M}} } = \sqrt{  \textbf{u}^{t} \mathcal{M} \textbf{u} } \\]

This formula allows us to measure the length of a vector \\(\textbf{u}\\) with repsect to a certain metric \\( \mathcal{M}\\).

A metric \\(\mathcal{M}\\) can be geometrically represented by its associated unit ball, defined by 

\\( \xi _{M} ={ p | \sqrt{ \textbf{op}^{t} \mathcal{M} \textbf{op} }=1|  \} \\)


<br><br>

<figure style="text-align: center;">
  <img src="../images/Metric_1.png" alt="Anisotropic metric tensor" width="90%">
  <figcaption>Figure 1: Metric Unit Ball </figcaption>
</figure>

### 2.1.2 Definition : Euclidean Metric Space  
An Euclidean metric space is a vector space supplied with a certain scalar product \\(<.,.>_{\mathcal{M}}\\) defined by a metric tensor \\(\mathcal{M}\\). We denote it \\( \(\mathbb{R}^n, \mathcal{M} \) \\).  
The distance between two point \\(\textbf{p}\\) and \\(\textbf{q}\\) is given by:

 \\[  d_{ \mathcal{M} }( \textbf{p},\textbf{q} ) = \sqrt{  \textbf{pq}^{t} \mathcal{M} \textbf{pq} }  \\] 


Finaly the lenght of a segment \\( \textbf{pq} \\) is the distance between its extremities

\\(    \mathcal{L}_ { \mathcal{M} } ( \textbf{pq} ) = d_{ \mathcal{M} } ( \textbf{p},\textbf{q} )  \\). 

### 2.1.3 Remark 
If the Metric defining the scalar product is the identity matrix, \\( \mathcal{M} = \mathbb{I} _{n} \\) then we get the standart Euclidean space \\( \( \mathbb{R}^n , \mathbb{I} _{n} \)\\) supplpied with the natural dot product \\(\\).

<br><br>

It is then possible to define volumes and angles in an Euclidean metric space. Let K be a bounded subset of \\( \mathbb{R}^n \\), the volume of an element K in metric \\( \mathcal{M} \\) is: 

\\( |K| _{ \mathcal{M} }  = \int _{K} \sqrt{det( \mathcal{M} )} |K| _{ \mathbb{I} _{n}} \\)

The angle between two vectors \\(  \textbf{u} \\) and \\( \textbf{v} \\) is define by the unique real \\( \theta \in \[ 0 , \pi \] \\) such that 

\\[ cos(\theta) = \frac{ <\textbf{u} , \textbf{v} > _{\mathcal{M}} }{||\textbf{u}|| _{\mathcal{M}}  ||\textbf{v}|| _{\mathcal{M}}}\\]

###  2.1.4 Definition : Riemmanian Metric Space
A \\( \textit{Riemmanian}\\) metric space is a continuous manifold \\( \Omega \subset \mathbb{R}^n  \\) supplied with a smooth metric \\( \mathcal{M}(.) \\). We denote it by \\(  \mathcal{M}(\textbf{x}) _{x \in \Omega} \\). 

Contrary to the Euclidean metric space case, the distance between two points, i.e., the shortest path, is no more the straight line but it is given by a geodesic. Nevertheless, in the context of mesh generation or mesh adaptation, we rae not interested in the distance between two points but in the lenght of a path fiven by an edge of the mesh. 
More precisely, in a Riemmanian metric space \\( \mathcal{M}(\textbf{x}) _{x \in \Omega} \\), the length of an edge \\( \textbf{pq} \\) is calculated using the straight line parametrization \\( \gamma(t) = \textbf{p} + t \textbf{pq}, \ t \in \[0,1\]  \\) :


\\[  \mathcal{L}_ { \mathcal{M} } ( \textbf{pq} ) =  \int_{0}^{1} || \gamma (t) || \ dt = \int_{0}^{1} \sqrt{\textbf{pq}^t \mathcal{M}(\textbf{p}+t\textbf{pq})\textbf{pq}} \ dt \\]

<figure style="text-align: center;">
  <img src="../images/Riemmanian.png" alt="Isovalues of the fonction f(x) = lm(ox) for different Spaces" width="90%">
  <figcaption> \( \textbf{Figure 2:} \)  Isovalues of the fonction \( f(x) = \mathcal{L}_m (ox) \) for different spaces.<br> 
  Left, the standard Euclidean Space \(([-1,1]*[-1,1], \mathbb{I} _{2} ) \)<br>
  Midlle, an Euclidean metric Space \(([-1,1]*[-1,1], \mathcal{M} ) \)<br>
  Right, a Riemmanian Metric Space \( (\mathcal{M}(x))_{x \in [-1,1]^2}\) </figcaption>
</figure>


### TODO Operations on Metric / Intersection / Interpolation / Gradation etc ... 


