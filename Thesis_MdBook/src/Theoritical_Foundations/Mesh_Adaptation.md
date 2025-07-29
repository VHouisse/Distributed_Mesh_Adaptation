# Mesh Adaptation

The core advantage of using metric tensors in mesh generation and adaptation lies in their ability to impose specific directional stretching on mesh elements. This allows us to briefly detail our approach to anisotropic mesh generation: by defining a mesh size in each direction at every point of the domain using metric tensors, it's then possible to generate a uniform unit mesh, thus specifying sizes directionally.

More precisely, let \\(\mathcal{M}(x)_{x \in \Omega }\\) be a Riemmanian metric space. In three dimensions, the objective is to generate a mesh    \\(\mathcal{H} \\) for which each edge lenght is unit in the associated metric and each element is regular : 

 \\[   \forall \textbf{e} \in \mathcal{H} , \mathcal{L}_ \mathcal{M}(\textbf{e})= 1  \text{      and       } \forall K \in \mathcal{H}, |K|_{\mathcal{M}} = \frac{\sqrt{2}}{12} \\]

As a regular elements can not fill the entire domain \\( \Omega \\), the mesh generator can only create quasi-uniform mesh, i.e. the mesh elements are almost unit in the Riemmanian space. To quantify the fap to unity, differents tools can be used, for example, an element_quality function : 
\\[ Q_\mathcal{M}\\] \\(\\)