# Thesis Context and Motivations

### General Context 

The design of modern aircraft necessitates the development of increasingly complex concepts, both geometrically and physically. This requires appropriate numerical modeling that integrates multiphysics interactions, particularly between aerodynamics, propulsion systems, and various components and materials.

Within this framework, Airbus, DLR, and ONERA launched a collaborative development initiative in 2018 for a common Computational Fluid Dynamics (CFD) software called CODA. This new CFD platform is designed for efficient parallel and heterogeneous architectures, allowing for the modular integration of advanced interoperable CFD components and methods.

### Importance of Mesh Adapatation

Auto-adaptive remeshing is critical for achieving autonomous and reliable CFD simulations. The currently used a priori mesh requirements strategy is set to evolve. Switching to an autonomous numerical error-driven strategy for CFD will be a game changer for design offices.

This transition will lead to a drastic reduction in the overall lead time for CFD computations , and, coupled with numerical error certification, will allow aerodynamicists to significantly widen the space of exploration during the design phase.

### Role of Metric-Based Meshing

Automatic mesh adaptation requires a preliminary mesh focusing on the underlying geometry representation, and an associated metric field prescribing a desired mesh orientation and size. This metric field can be anisotropic (describing mesh size and orientation at a given spatial location, see figure 2(a-b)) or isotropic (describing an overall element size, see figure 2(a-b)). The remesher then produces a new mesh respecting this specified metric.

Typically, the metric field is obtained from the numerical error in the output resulting from solving a partial differential equation (PDE). This motivates an iterative approach of constructing a metric field using the error in the output and adapting the mesh using this metric field to achieve an optimal mesh-error convergence. The remeshing tool used in this work creates geometry-conformal meshes using a metric-based Delaunay triangulation/tetrahedralization.

### Thesis Objectives 

The main objective of this thesis is to develop a massevily parallel anisotropic mesh adaptation framework for the CODA CFD solver. The ultimate goal is lead time reduction and space exploration widening in aircraft design offices. This work particularly involves combining the existing kalpaTARU distributed mesh adaptation framework (developed at CERFACS) and the 
Tucanos metric-based remeshing library (developed at Airbus) with CODA, thus benefiting from years of effort devoted to the development of both open-source libraries.